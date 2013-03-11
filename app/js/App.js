// Filename: App.js

define([
  'jquery', 
  'underscore', 
  'backbone',
  'routes/AppRouter',
], function($, _, Backbone, AppRouter){
  var initialize = function() {

    AppRouter.initialize();
    // new HomeView;
    // console.log('ztot');
  };

  return { 
    initialize: initialize
  };
});
