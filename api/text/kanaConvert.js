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
        

        self.requestClient(self.config, self.options, callback);
    }
};


