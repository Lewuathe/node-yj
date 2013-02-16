var Error = require('./error');
var Util  = require('./util');
var url   = require('url');

var Client = module.exports = function(config){
    var self = this;
    self.config = config;
    
    self.service = config.service;
    var serviceClt = require('./api/' + self.service);
    self[self.service] = new serviceClt(self);
    
    
};

