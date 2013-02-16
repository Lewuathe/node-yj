"use strict";

var error = require("./../../error");
var Util = require("./../../util");


var kanaConvert = module.exports = {
    kanaConvert : function(params, callback){
        var self = this;
        if( typeof params != 'Object' ){
            params = {};
        }
        params.schema = "openid";
        
        self.protocol = "https";
        self.url  = "https://userinfo.yahooapis.jp/yconnect/v1/attribute",
        self.request = self.url + Util.makeParams(params);
        var req = require(self.protocol).get(self.request, function(res){
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
        
    }
};


