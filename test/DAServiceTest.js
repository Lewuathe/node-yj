var Client = require('../index.js');

var config = require('./config.json');

var client = new Client({
    service : "text"
});

client.text.DAService({
    sentence : "あ",
    appid    : config.appid
}, function(err, result){
    if( err ){
	console.log('err=' + err);
    }
    console.log(result);
});
