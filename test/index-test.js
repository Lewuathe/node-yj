var vows = require('vows');
var assert = require('assert');
var util = require('util');
var Client = require('../index.js');


vows.describe('Client not undefined').addBatch({
  
  'module': {
    'Client should not be undefined': function (x) {
        var client = new Client({
            service : "text"
        });
        assert.notEqual(client, undefined);
    },
  }
  
}).export(module);

