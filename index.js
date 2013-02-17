/*
 *   class: YJClient
 *   
 *   Author: Kai Sasaki <lewuathe@me.com>
 *   This client can access to YJDN API server
 * 
 *   Date: 2013-2-17 
 */
   


var Error = require('./error');
var Util  = require('./util');

var Client = module.exports = function(config){
    var self = this;
    self.config = config;
    
    self.service = config.service;
    var serviceClt = require('./api/' + self.service);
    self[self.service] = new serviceClt(self);
};

