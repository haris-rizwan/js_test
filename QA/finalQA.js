function expHarSorting() {
    var transferedSize = [];
    for (values in expHar) {      
        if (expHar[values].response.status == 206 ) {
            var y = expHar[values].request.url;
            expLinks.push(y);

             // checking the url for HTTP 

            bol_check = (y.match(httpCheck_regex));
            if (bol_check !== null) {
                exphttplinks.push(y);
            };

              // getting the size of 206 responses

            var checkSize = expHar[values].response.content.size;
            transferedSize.push(checkSize);
            expUrlSize[y] = checkSize;

        } else {
            var x = expHar[values].request.url;
            expLinks.push(x);

            bol_check = (x.match(httpCheck_regex));
            if (bol_check !== null) {
                exphttplinks.push(x);
            };


            if(expHar[values].response.status==403 || expHar[values].response.status==404){

                expError[x]=expHar[values].response.status;
            };

            // getting the transfered size of the responses other than 206 
            var checkSize = expHar[values].response._transferSize;
            transferedSize.push(checkSize);
            expUrlSize[x] = checkSize; 
        };
    
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        expWeight = transferedSize.reduce(reducer);


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
        sorted_exp_links[i]=sorted[i];
    }

    console.log("exp results done");

};