var vows = require('vows');
var assert = require('assert');
var util = require('util');
var Client = require('../index.js');

var config = require("./config.json");


vows.describe('Text API test').addBatch({
  
  'YJDN Text API': {
      topic : new Client({
          service : "text"
      }),
     
      'JIMService': {
          topic : function(client){
              client.text.JIMService({
                  sentence : "きょうはおやすみです",
                  appid : config.appid
              }, this.callback);
          },

          "result JIMService" : function(err, result){
              assert.ok(result);
          }
      },

      'MAService' : {
          topic : function(client){
              client.text.MAService({
                  sentence : "今日の牛乳は配達です",
                  appid : config.appid
              }, this.callback);
          },

          "result MAService" : function(err, result){
              assert.ok(result);
          }
      },

      'FuriganaService' : {
          topic : function(client){
              client.text.FuriganaService({
                  sentence : "東京の空はいつも曇りなのです",
                  appid : config.appid
              }, this.callback);
          },

          "result FuriganaService" : function(err, result){
              assert.ok(result);
          }
      },

      'DAService' : {
          topic : function(client){
              client.text.DAService({
                  sentence : "うちの庭には二羽鶏がいる",
                  appid : config.appid
              }, this.callback);
          },

          "result DAService" : function(err, result){
              assert.ok(result);
          }
      },

      'KeyPhraseService' : {
          topic : function(client){
              client.text.KeyPhraseService({
                  sentence : "安倍晋三が今の日本の総理大臣です",
                  appid : config.appid
              }, this.callback);
          },

          "result KeyPhraseService" : function(err, result){
              assert.ok(result);
          }
      },

      
  }
  
}).export(module);





