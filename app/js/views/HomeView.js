// Filename: views/HomeView.js

define([
  'jquery',
  'underscore',
  'backbone',
  'models/App',
  'collections/Apps',
  'text!templates/home.html'
], function($, _, Backbone, App, Apps, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#replace-me"),
    render: function(){
      console.log('HomeView rendered');

      this.$el.html(homeTemplate);

      var apps = new Apps();
      // var appListView = new AppListView({ collection: apps}); 
      // appListView.render();
    }
  });

  return HomeView;
});
