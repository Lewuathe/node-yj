"use strict";

var error = require("./../../error");
var Util = require("./../../util");


var kanaConvert = module.exports = {
    kanaConvert : function(params, callback){
        var self = this;
        self.name   = "kanaConvert";
        self.config = self.__proto__.router[self.name];

        self.options = {
            host : self.config.host,
            port : self.config.protocol == "http" ? 80 : 443,
            path : self.config.path + Util.makeParams(params),
            method : self.config.method
        };
        


        var req = require(self.config.protocol).request(self.options, function(res){
            var data = "";
            res.on("data", function(chunk){
                data += chunk;
            });

            res.on("end", function(){
                if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
                    callback(new error.HttpError(data, res.statusCode));
                }
                else {
                    res.data = data
                    callback(null, res.data);
                }
            });
            
            res.on("error", function(err){
                console.log("Error");
            });
        });
        req.end();
        
    }
};


