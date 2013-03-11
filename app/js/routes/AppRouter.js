// Filename: routes/AppRouter.js

define([
  'jquery',
  'underscore',
  'backbone',
  'views/HomeView',
], function($, _, Backbone, HomeView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'home': 'showHome',
      
      // Default
      '*actions': 'default'
    }
  });
  
  var initialize = function(){

    console.log('Router initialized');

    var appRouter = new AppRouter;
    
    appRouter.on('route:showHome', function(){
   
        // Call render on the module we loaded in via the dependency array
        var homeView = new HomeView();
        homeView.render();

    });

    appRouter.on('route:default', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start({ pushState: true});
  };

  return { 
    initialize: initialize
  };
});
