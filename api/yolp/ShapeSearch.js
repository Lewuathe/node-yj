"use strict";

var error = require("./../../error");
var Util = require("./../../util");


var ShapeSearch = module.exports = {
    ShapeSearch : function(params, callback){
        var self           = this;
        self.name          = "ShapeSearch";
        self.config        = self.__proto__.router[self.name];
        self.requestClient = self.__proto__.requestClient;

        if( self.config.defaults ){
            Util.extend(params, self.config.defaults, true);
        }

        self.options = {
            host : self.config.host,
            port : self.config.protocol == "http" ? 80 : 443,
            path : Util.spaceUrlEncode(self.config.path + Util.makeParams(params)),
            method : self.config.method
        };
        
        self.requestClient(self.config, self.options, callback);
    }
};


