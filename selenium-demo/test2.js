var cmd = require('node-cmd');

// var cmd1 = 'sh runChromeHeadless.sh';
// cmd.run(cmd1);

var harCapturing = require('chrome-har-capturer');
var fs = require('fs');
// var dataFrame = require('dataframe-js');

var banner ="https://dbb1.contobox.com/v3/preview.php?id=20055"
var previewExpandable ="https://dbb1.contobox.com/v3/preview.php?id=20055&tpl=preview_expanded"
var url_banner = [banner];
var url_expandable = [previewExpandable];
var UrlSize={};
var sortable = [];





harCapturing.run(url_banner).on('har', function (har) {
    var logs = har;
    var entries = logs.log.entries;
    var links=[];
    var httpLinks = [];
    var transferedSize=[];
    var httpCheck_regex = /(http)\:\/\//gi;
    for (var property in entries) {
        var checkUrl= entries[property].request.url;
        links.push(checkUrl);
        bol_check = (checkUrl.match(httpCheck_regex));
        // console.log(bol_check);
        if(bol_check!==null){
            httpLinks.push(checkUrl)
        }
        var checkSize = entries[property].response._transferSize;
        transferedSize.push(checkSize);
        UrlSize[checkUrl]=checkSize;
        
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var preExpandableWeight = transferedSize.reduce(reducer);


    
    console.log("Total banner request = "+" "+links.length);
    console.log("**********__________************");
    console.log("Number of http request = "+" "+httpLinks.length);
    console.log("**************-------------------**************");
    // console.log(transferedSize);
    console.log("Banner weight ="+" "+preExpandableWeight/1000+" "+"kb");

    
   
});



harCapturing.run(url_expandable).on('har', function (har) {
    var logs = har;
    var entries = logs.log.entries;
    var links=[];
    var httpLinks = [];
    var transferedSize=[];
    var httpCheck_regex = /(http)\:\/\//gi;
    for (var property in entries) {
        var checkUrl= entries[property].request.url;
        links.push(checkUrl);
        bol_check = (checkUrl.match(httpCheck_regex));
        // console.log(bol_check);
        if(bol_check!==null){
            httpLinks.push(checkUrl)
        }
        var checkSize = entries[property].response._transferSize;
        transferedSize.push(checkSize);
        UrlSize[checkUrl]=checkSize;
        
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var preExpandableWeight = transferedSize.reduce(reducer);

    for (var URLZ in UrlSize) {
        sortable.push([URLZ, UrlSize[URLZ]]);
    };

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    console.log("Total expandable request = "+" "+links.length);
    console.log("**********__________************");
    console.log("Number of http request = "+" "+httpLinks.length);
    console.log("**************-------------------**************");
    // console.log(transferedSize);
    console.log("Expandable weight ="+" "+preExpandableWeight/1000+" "+"kb");
    console.log("Total request of ContoBOX ="+" "+Object.keys(UrlSize).length);
    // console.log(sortable);
    

           
            
});





