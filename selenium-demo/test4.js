var cmd = require('node-cmd');

var cmd1 = 'sh runChromeHeadless.sh';
cmd.run(cmd1);

var harCapturing = require('chrome-har-capturer');
var fs = require('fs');

var co = require('co');

addID = 20547;
// 20580 jaguaar
// 20064 tourism
// 20547 floor and decor 


var banner = "https://dbb1.contobox.com/v3/preview.php?id="+addID;

var url_banner = [banner];

// harCapturing.run(url_banner).on('har', function (har) {
//     var logs = har;
//     // console.log(logs);
//     var filteredLogs = logs.log.entries;
//     console.log(filteredLogs);
// });

setTimeout(function(){harCapturing.run(url_banner).on('end', function (har) {
    var logs = har;
    // console.log(logs);
    var filteredLogs = logs.log.entries;
    console.log(filteredLogs);
}); }, 2000);