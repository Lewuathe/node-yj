var Client = require('../index.js');

var config = require('./config.json');

var client = new Client({
    service : "yolp"
});

client.yolp.ShapeSearch({
    appid : config.appid,
    query : "六本木",
    coordinates : "139.7297801,35.6646985 139.7312115,35.6646985"
}, function(err, result){
    if( err ) {
	console.log("err=" + err);
    }
    console.log(result);
});
