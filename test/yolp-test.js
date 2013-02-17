var vows = require('vows');
var assert = require('assert');
var util = require('util');
var Client = require('../index.js');

var config = require("./config.json");


vows.describe('YOLP API test').addBatch({
  
  'YJDN YOLP API': {
      topic : new Client({
          service : "yolp"
      }),
     
      'LocalSearch': {
          topic : function(client){
              client.yolp.LocalSearch({
                  appid : config.appid
              }, this.callback);
          },

          "result LocalSearch" : function(err, result){
              assert.ok(result);
          }
      },

      'GeoCoder' : {
          topic : function(client){
              client.yolp.GeoCoder({
                  appid : config.appid
              }, this.callback);
          },

          "result GeoCoder" : function(err, result){
              assert.ok(result);
          }
      },

      'ReverseGeoCoder' : {
          topic : function(client){
              client.yolp.ReverseGeoCoder({
                  appid : config.appid,
                  lat   : 35.68381981,
                  lon   : 139.77456498
              }, this.callback);
          },

          "result ReverseGeoCoder" : function(err, result){
              assert.ok(result);
          }
      },

      'CassetteSearch' : {
          topic : function(client){
              client.yolp.CassetteSearch({
                  appid : config.appid
              }, this.callback);
          },

          "result CassetteSearch" : function(err, result){
              assert.ok(result);
          }
      },

      'Place' : {
          topic : function(client){
              client.yolp.Place({
                  appid : config.appid
              }, this.callback);
          },

          "result Place" : function(err, result){
              assert.ok(result);
          }
      },

      'ZipCodeSearch' : {
          topic : function(client){
              client.yolp.ZipCodeSearch({
                  appid : config.appid
              }, this.callback);
          },

          "result ZipCodeSearch" : function(err, result){
              assert.ok(result);
          }
      },

      'Get' : {
          topic : function(client){
              client.yolp.Get({
                  appid : config.appid
              }, this.callback);
          },

          "result Get" : function(err, result){
              assert.ok(result);
          }
      },

      'AddressDirectory' : {
          topic : function(client){
              client.yolp.AddressDirectory({
                  appid : config.appid
              }, this.callback);
          },

          "result AddressDirectory" : function(err, result){
              assert.ok(result);
          }
      },

      'RouteMap' : {
          topic : function(client){
              client.yolp.RouteMap({
                  appid : config.appid
              }, this.callback);
          },

          "result RouteMap" : function(err, result){
              assert.ok(result);
          }
      },

      'Building' : {
          topic : function(client){
              client.yolp.Building({
                  appid : config.appid,
                  lat   : 35.66619,
                  lon   : 139.73008
              }, this.callback);
          },

          "result Building" : function(err, result){
              assert.ok(result);
          }
      },

      'ContentsGeoCoder' : {
          topic : function(client){
              client.yolp.ContentsGeoCoder({
                  appid : config.appid,
                  query : "六本木"
              }, this.callback);
          },

          "result ContentsGeoCoder" : function(err, result){
              assert.ok(result);
          }
      },

      'ShapeSearch' : {
          topic : function(client){
              client.yolp.ShapeSearch({
                  appid : config.appid,
                  query : "六本木",
                  coordinates : "139.7297801,35.6646985 139.7312115,35.6646985"
              }, this.callback);
          },

          "result ShapeSearch" : function(err, result){
              assert.ok(result);
          }
      },

      'Distance' : {
          topic : function(client){
              client.yolp.Distance({
                  appid : config.appid,
                  coordinates : "139.7309115928,35.66566232761 135.4951338888,34.70197416666"
              }, this.callback);
          },

          "result Distance" : function(err, result){
              assert.ok(result);
          }
      },

      'GenreCode' : {
          topic : function(client){
              client.yolp.GenreCode({
                  appid : config.appid
              }, this.callback);
          },

          "result GenreCode" : function(err, result){
              assert.ok(result);
          }
      },

      'GetGid' : {
          topic : function(client){
              client.yolp.GetGid({
                  appid : config.appid,
                  lat   : 35.666202,
                  lon   : 139.731258,
                  name  : "ザ・リッツ・カールトン東京"
              }, this.callback);
          },

          "result GetGid" : function(err, result){
              assert.ok(result);
          }
      },

      'DatumConvert' : {
          topic : function(client){
              client.yolp.DatumConvert({
                  appid : config.appid
              }, this.callback);
          },

          "result DatumConvert" : function(err, result){
              assert.ok(result);
          }
      },

      'GetAltitude' : {
          topic : function(client){
              client.yolp.GetAltitude({
                  appid : config.appid
              }, this.callback);
          },

          "result GetAltitude" : function(err, result){
              assert.ok(result);
          }
      }
  }
  
}).export(module);





