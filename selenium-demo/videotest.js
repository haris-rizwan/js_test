var cmd = require('node-cmd');
var fs = require('fs');

var cmd1 = 'sh runChromeHeadless.sh';
cmd.run(cmd1);
var cmd2 ='sh closeChromeHeadless.sh';

var harCapturing = require('chrome-har-capturer');
var fs = require('fs');

var co = require('co');

var urlz = ["https://dbb1.contobox.com/v3/preview.php?id=25932&tpl=preview_expanded"];
let harData;
var links=[];
var Weight;

// http://dbb1.contobox.com/v3/preview.php?id=21787
// http://localhost:8080/video.html



function getData(link) {

    return new Promise(function (res, rej) {
        harCapturing.run(link).on('har', function (har) {
            var logs = har;
            fs.writeFileSync('/Users/harisrizwan/Desktop/out.har', JSON.stringify(har))
            // console.log(logs); 
            var filteredLogs = logs.log.entries;
            fs.writeFileSync('out.json', JSON.stringify(har, null, 2));
            console.log(filteredLogs);
            res(filteredLogs);
        });
    });
};

// ,{timeout:25000}




function HarSorting() {
    var transferedSize = [];
    for (values in harData) {
        var x = harData[values].request.url;
        links.push(x);
        // getting the transfered size of the responses
        var checkSize = harData[values].response._transferSize;
        // console.log("transfered Size = " + checkSize);
        transferedSize.push(checkSize);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        Weight = transferedSize.reduce(reducer);

        // console.log(links);
        // console.log(Weight);
    }
};


function runProgram() {
    co(function* () {
        harData = yield getData(urlz);
        cmd.run(cmd2);
        HarSorting();
        console.log(links);
        console.log(Weight/1000);
        console.log(links.length);
    });
};




setTimeout(function(){runProgram(); }, 2000);