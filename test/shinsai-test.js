var vows = require('vows');
var assert = require('assert');
var util = require('util');
var Client = require('../index.js');

var config = require("./config.json");


vows.describe('Shisai API test').addBatch({
  
  'YJDN Shinsai API': {
      topic : new Client({
          service : "shinsai"
      }),
     
      'LatestPowerUsage': {
          topic : function(client){
              client.shinsai.LatestPowerUsage({
                  appid : config.appid
              }, this.callback);
          },

          "result LatestPowerUsage" : function(err, result){
              assert.ok(result);
          }
      },

      'Volunteers' : {
          topic : function(client){
              client.shinsai.Volunteers({
                  appid : config.appid
              }, this.callback);
          },

          "result Volunteers" : function(err, result){
              assert.ok(result);
          }
      },

      'ElectricPowerForcast' : {
          topic : function(client){
              client.shinsai.ElectricPowerForcast({
                  appid : config.appid
              }, this.callback);
          },

          "result ElectricPowerForcast" : function(err, result){
              assert.ok(result);
          }
      },

      'Search' : {
          topic : function(client){
              client.shinsai.Search({
                  appid : config.appid
              }, this.callback);
          },

          "result Search" : function(err, result){
              assert.ok(result);
          }
      },

      'LocalSearch' : {
          topic : function(client){
              client.shinsai.LocalSearch({
                  appid : config.appid
              }, this.callback);
          },

          "result LocalSearch" : function(err, result){
              assert.ok(result);
          }
      },

      'Area' : {
          topic : function(client){
              client.shinsai.Area({
                  appid : config.appid
              }, this.callback);
          },

          "result Area" : function(err, result){
              assert.ok(result);
          }
      },

      
  }
  
}).export(module);





