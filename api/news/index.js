"use strict";

var fs = require('fs');

var Util = require("./../../util");
var error = require("./../../error");

var YJNewsHandler = module.exports = function(client){
    var self = this;
    self.client = client;
};

var proto = {
    sendError: function(err, block, msg, callback) {
        Util.log(err, block, msg.user, "error");
        if (typeof err == "string")
            err = new error.InternalServerError(err);
        if (callback){
            callback(err);
        }
    },

    router : JSON.parse(fs.readFileSync(__dirname + "/router.json", "utf8")),

    requestClient : function(config, options, callback){
        var req = require(config.protocol).request(options, function(res){
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
                    var retJson = Util.toJson(res.data);
                    callback(null, retJson);
                }
            });

            res.on("error", function(err){
                callback(new error.SocketError(res.req._headers.host));
            });
        });
        req.end();
    }
};

["NewsWebService"].forEach(function(api) {
    Util.extend(proto, require("./" + api));
});

YJNewsHandler.prototype = proto;
