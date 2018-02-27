var cmd = require('node-cmd');

var cmd1 = 'sh runChromeHeadless.sh';
cmd.run(cmd1);

var harCapturing = require('chrome-har-capturer');
var fs = require('fs');

var co = require('co');

addID = 20583;
// 20580 jaguaar
// 20064 tourism
// 20547 floor and decor 


var banner = "https://dbb1.contobox.com/v3/preview.php?id="+addID;
var previewExpandable = "https://dbb1.contobox.com/v3/preview.php?id="+addID+"&tpl=preview_expanded";
var urlz = [banner, previewExpandable];
let harData;
var bannerHar = [];
var expHar = [];
var preLinks = [];
var expLinks =[];
var preError = {} || null;
var expError = {} || null;
var prehttplinks = [];
var exphttplinks = [];
var preUrlSize = {};
var expUrlSize= {};
var sorted_pre_links=[];
var sorted_exp_links=[];
var preWeight;
var expWeight;
var httpCheck_regex = /(http)\:\/\//gi;

let result = {};
result["PreExp"]= {};
result["Expandable"]= {};
result["Total"]= {};


function getData(link) {

    return new Promise(function (res, rej) {
        harCapturing.run(link,{timeout:5000}).on('har', function (har) {
            var logs = har;
            // console.log(logs); 
            var filteredLogs = logs.log.entries;
            // console.log(filteredLogs);
            res(filteredLogs);
        });
    });
    console.log("it works first");
};

function sortHar() {
    for (var values in harData) {
        if (harData[values].pageref == 'page_1') {
            bannerHar.push(harData[values]);
        } else {
            expHar.push(harData[values]);
        };

    };

    console.log("data sorted");

};

function bannerHarSorting() {
    var transferedSize = [];
    for (values in bannerHar) {
        var x = bannerHar[values].request.url;
        preLinks.push(x);

        // checking the url for HTTP 

        bol_check = (x.match(httpCheck_regex));
        if (bol_check !== null) {
            prehttplinks.push(x);
        };

        // getting the transfered size of the responses

        var checkSize = bannerHar[values].response._transferSize;
        transferedSize.push(checkSize);
        preUrlSize[x] = checkSize;

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        preWeight = transferedSize.reduce(reducer);

        // checking response for status 403 and 404

        if(bannerHar[values].response.status==403 || bannerHar[values].response.status==404){
            preError[x]=bannerHar[values].response.status;
        };


    }
 //soting the links acoording to their size , starting from the highest
    var sorted = [];
    for (var z in preUrlSize) {
        sorted.push([z, preUrlSize[z]]);
    };

    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });

    for(var i = 0;i<10;i++){
        sorted_pre_links.push(sorted[i]);
    }

    console.log("banner results done");

};

function expHarSorting() {
    var transferedSize = [];
    for (values in expHar) {
        var x = expHar[values].request.url;
        expLinks.push(x);

        // checking the url for HTTP 

        bol_check = (x.match(httpCheck_regex));
        if (bol_check !== null) {
            exphttplinks.push(x);
        };

        // getting the transfered size of the responses

        var checkSize = expHar[values].response._transferSize;
        transferedSize.push(checkSize);
        expUrlSize[x] = checkSize;

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        expWeight = transferedSize.reduce(reducer);

        // checking response for status 403 and 404

        

        if(expHar[values].response.status==403 || expHar[values].response.status==404){

            expError[x]=expHar[values].response.status;
        };




    };

    //soting the links acoording to their size , starting from the highest
    var sorted = [];
    for (var z in expUrlSize) {
        sorted.push([z, expUrlSize[z]]);
    };

    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });

    for(var i = 0;i<10;i++){
        sorted_exp_links.push(sorted[i]);
    }

    console.log("exp results done");

};

function runProgram() {
    co(function* () {
        harData = yield getData(urlz);
        sortHar();
        bannerHarSorting();
        expHarSorting();
        result.PreExp.Weight = preWeight/1000;
        result.PreExp.Http_Requets = prehttplinks;
        result.PreExp.Requets = preLinks.length;
        // result.PreExp.Erros = preError;
        result.PreExp.Heavy_files=sorted_pre_links;
        // console.log(result);  
        result.Expandable.Weight = expWeight/1000;
        result.Expandable.Http_Requets = exphttplinks;
        result.Expandable.Requets = expLinks.length;
        // result.Expandable.Erros = expError;
        result.Expandable.Heavy_files=sorted_exp_links;

        result.Total.Weight = (expWeight+preWeight)/1000;
        result.Total.Http_Requets = exphttplinks.length+prehttplinks;
        result.Total.Requets = expLinks.length+preLinks.length;
        

        console.log(result);
        console.log("======================================");
        // console.log(preLinks);
        console.log("==================================================");
        // console.log(expLinks);  
        // console.log(sorted_exp_links);
    });
};


setTimeout(function(){ runProgram() }, 2000);









