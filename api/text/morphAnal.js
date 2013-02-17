"use strict";

var error = require("./../../error");
var Util = require("./../../util");


var morphAnal = module.exports = {
    morphAnal : function(params, callback){
        var self = this;
        self.name   = "morphAnal";
        self.config = self.__proto__.router[self.name];
        self.requestClient = self.__proto__.requestClient;

        self.options = {
            host : self.config.host,
            port : self.config.protocol == "http" ? 80 : 443,
            path : self.config.path + Util.makeParams(params),
            method : self.config.method
        };
        

        self.requestClient(self.config, self.options, callback);
    }
};



