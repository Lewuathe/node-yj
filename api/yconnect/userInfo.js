"use strict";

var error  = require("./../../error");
var Util   = require("./../../util");

var userInfo = module.exports = {
    userInfo : function(params, callback){
        var self = this;
        if( typeof params != 'object' ){
            params = {};
        }
        params.schema = "openid";
        self.protocol = "https";
        self.url  = "userinfo.yahooapis.jp",

        self.options = {
            host : self.url,
            port : 443,
            path : "/yconnect/v1/attribute?schema=openid",
            method : "GET",
            headers : {
                authorization : "Bearer " + params.accesToken
            }
        };
        
        var req = require(self.protocol).request(self.options, function(res){
            var data = "";
            res.on("data", function(chunk){
                data += chunk;
            });

            res.on("end", function(){
                if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
                    callback(new error.HttpError(data, res.statusCode));
                }
                else {
                    res.data = data;
                    callback(null, res);
                }
            });
            
            res.on("error", function(err){
                console.log("Error");
            });
        });
        req.end();
    }
};


