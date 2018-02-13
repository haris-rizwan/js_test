var cmd = require('node-cmd');

// var urls = ["https://github.com", "https://google.ca"];

var cmd1 = 'sh runChromeHeadless.sh';
cmd.run(cmd1);



// for(var i = 0; i < urls.length; i++) {
//     var cmdForUrl = `chrome-har-capturer -o ${i}.har -t localhost -p 9222 https://google.ca`;
//     cmd.run(cmdForUrl);
// }


var ex = require('chrome-har-capturer');
var fs = require('fs');
var dataFrame = require('dataframe-js');

var urls = ["https://dbb1.contobox.com/v3/preview.php?id=20005&tpl=preview_expanded"];

ex.run(urls).on('har', function (har) {
    var logs = har;
    var entries = logs.log.entries;
    fs.writeFileSync('output.json', JSON.stringify(entries, null, 2));
    var dataFrameFromEntries;
    var filteredDF;
    var df = new dataFrame.DataFrame.fromJSON('/Users/harisrizwan/Desktop/test/selenium-demo/output.json').then(
        df => {
            dataFrameFromEntries = df;
            filteredDF = dataFrameFromEntries.select('request', 'response');
            filteredDF.map(f => {
                console.log("REQUEST", f.get('request'));
                console.log("RESPONSE", f.get('response'));
            });
        }
    );
})