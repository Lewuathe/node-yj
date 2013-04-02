var vows   = require('vows');
var assert = require('assert');
var util   = require('util');
var Client = require('../index.js');

var config = require('./config.json');

vows.describe('News topics API test').addBatch({
    
    'News topics API' : {
	topic : new Client({
	    service : "news"
	}),

	'NewsWebService' : { 
	    topic : function(client) {
		client.news.NewsWebService({
		    topicname : "weather",
		    appid : config.appid
		}, this.callback);
	    },

	    "result NewsWebService" : function(err, result) {
		assert.ok(result);
	    }
	}
    }

}).export(module);
