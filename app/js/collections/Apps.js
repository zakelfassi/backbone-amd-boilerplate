// Filename: collections/Apps.js

define([
  'jquery',
  'underscore',
  'backbone',
  'models/App'
], function($, _, Backbone, App){
  var Apps = Backbone.Collection.extend({
    model: App,
    
    initialize: function(){

      var app0 = new App({title: 'LiberTweet.com', url: 'http://libertweet.com'}); 
      var app1 = new App({title:'Zaigood.com', url: 'http://zaigood.com'});

      this.add([app0, app1]);

      console.log('Apps initialized');
    }
  });
 
  return Apps;
});
