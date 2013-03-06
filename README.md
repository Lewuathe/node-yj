# node-yj
=======

A Node.JS module, which provides an object oriented wrapper for the YJDN APIs.

## Installation

  Install with the node package manager, [npm](http://npmjs.org/):

    $ npm install node-yj

or

  Install via git clone

    $ git clone git://github.com/Lewuathe/node-yj.git
    $ cd node-yj
    $ npm install

## How to use

If you already have access_token of yconnect, you can access any API in YJDN.
Return value is default json considering of node availability.

### Not require authorization

For example, YOLP, text analysis, Shpping API and so on does not require authorization 
token. So whenever you like, you can access these APIs.


    var YJAPI = require('node-yj');
	
	var yjClient = new YJAPI({
	    service : "text"
	});

	yjClient.text.kanaConvert({
	    sentence : "きょうはいいてんきですね",
		appid : <Your Application ID>
	}, function(res){
	    // res is server response.
		// Use as you like
	});


### Require authorization

When you want to access userInfo API, you need access_token via YConnect.
You can get this access_token with [passport-yj](https://github.com/Lewuathe/passport-yj).
In this case, your code should be like below.

    var YJAPI = require('node-yj');
	
	var yjClient = new YJAPI({
	    service : "yconnect"
	});

	yjClient.yconnect.userInfo({
	    accessToken : <Access Token>
	}, function(res){
	    // res is server response.
		// Use as you like
	});

### Test 

Before running test code, you have to make own appid configuration file like below.

    {
	    "appid" : <YOUR_APP_ID>
	}

This file is put on test/ as named config.json. And then, you can run test code.


    $ npm install --dev
	$ make test

### License

MIT License. Please see the LICENSE file in details.