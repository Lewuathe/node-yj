var http = require('http');

var options = { host: 'spatial.search.olp.yahooapis.jp',
		port: 80,
		path: '/OpenLocalPlatform/V1/shapeSearch?appid=dj0zaiZpPVFlSVlOWGhMRnFTWCZkPVlXazlOMjlRV25KUU56Z21jR285TUEtLSZzPWNvbnN1bWVyc2VjcmV0Jng9NjM-&query=六本木&coordinates=139.7297801,35.6646985 139.7312115,35.6646985&output=json',
		method: 'GET' }
var req = http.request(options, function(res){
    var data = "";
    res.on("data", function(chunk){
	data += chunk;
    });

    res.on("end", function(){
	console.log(data);
    });
});
req.end();
