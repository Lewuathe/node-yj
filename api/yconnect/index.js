"use strict";

var fs = require('fs');


var Util = require("./../../util");
var error = require("./../../error");

var YConnectHandler = module.exports = function(client){
    var self = this;
    self.client = client;
    self.router = JSON.parse(fs.readFileSync(__dirname + "/router.json", "utf8"));
};

var proto = {
    sendError: function(err, block, msg, callback) {
        Util.log(err, block, msg.user, "error");
        if (typeof err == "string")
            err = new error.InternalServerError(err);
        if (callback)
            callback(err);
    },

    router : self.router
};

["userInfo"].forEach(function(api) {
    Util.extend(proto, require("./" + api));
});

YConnectHandler.prototype = proto;