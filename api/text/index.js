"use strict";

var fs = require('fs');

var Util = require("./../../util");
var error = require("./../../error");

var YJTextHandler = module.exports = function(client){
    var self = this;
    self.client = client;
};

var proto = {
    sendError: function(err, block, msg, callback) {
        Util.log(err, block, msg.user, "error");
        if (typeof err == "string")
            err = new error.InternalServerError(err);
        if (callback)
            callback(err);
    }
};

["morphAnal", "kanaConvert"].forEach(function(api) {
    Util.extend(proto, require("./" + api));
});

YJTextHandler.prototype = proto;