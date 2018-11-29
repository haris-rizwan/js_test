var cmd = require('node-cmd');
var fs = require('fs');

var cmd1 = 'sh runChromeHeadless.sh';
cmd.run(cmd1);
var cmd2 ='sh closeChromeHeadless.sh';

var harCapturing = require('chrome-har-capturer');
var fs = require('fs');

var co = require('co');

var urlz = ["https://dbb1.contobox.com/v3/preview.php?id=21808&tpl=preview_expanded"];
let harData;
var links=[];
var Weight;

// id =25932
// 25772
// 25684

function postHook(urlz) {
    return new Promise((fulfill, reject) => {
        // allow the user specified grace time
        setTimeout(fulfill,3500);
    });
}





function getData(link) {

    return new Promise(function (res, rej) {
        harCapturing.run(link,{postHook}).on('har', function (har) {
            var logs = har;
            fs.writeFileSync('/Users/harisrizwan/Desktop/out-21808.har', JSON.stringify(har))
            // console.log(logs); 
            var filteredLogs = logs.log.entries;
            fs.writeFileSync('out-21808.json', JSON.stringify(har, null, 2));
            console.log("Its Done");
            res(filteredLogs);
        });
    });

    // return new Promise(function(res, rej){
    //     console.log("initialized promise");
    //     var x = harCapturing.run(link,{postHook});
    //     console.log("initialized request");
    //     x.on('har',function(har){
    //         console.log("initialized on har event");
    //         fs.writeFileSync('out.json', JSON.stringify(har, null, 2));
    //         var logs = har;
    //         var filteredLogs = logs.log.entries;
    //         res(filteredLogs);
    //     });
        
    // });
    
};






function HarSorting() {
    var transferedSize = [];
    for (values in harData) {
        // getting the size of 206 responses
        if (harData[values].response.status == 206 ) {
            var checkSize = harData[values].response.content.size;
            console.log(checkSize);
            transferedSize.push(checkSize);
        } else {
            var x = harData[values].request.url;
            links.push(x);
            // getting the transfered size of the responses
            var checkSize2 = harData[values].response._transferSize;
            console.log("URL = " + x +" transfered Size = " + checkSize2);
            transferedSize.push(checkSize2); 
        }
    
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        Weight = transferedSize.reduce(reducer);

    }
};


function runProgram() {
    co(function* () {
        harData = yield getData(urlz);
        cmd.run(cmd2);
        HarSorting();
        // console.log(links);
        console.log(Weight/1000);
        console.log(links.length);
    });
};




setTimeout(function(){runProgram(); }, 2000);