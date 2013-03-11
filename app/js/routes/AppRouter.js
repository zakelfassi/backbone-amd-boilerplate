// Filename: routes/AppRouter.js

define([
  'jquery',
  'underscore',
  'backbone',
  'views/HomeView',
], function($, _, Backbone, HomeView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'home': 'showHome',
      // Default route
      '*actions': 'default'
    }
  });
  
  var initialize = function(){
    console.log('Router initialized');

    var appRouter = new AppRouter;
    
    appRouter.on('route:showHome', function(){
      var homeView = new HomeView();
      homeView.render();
    });

    appRouter.on('route:default', function (actions) {     
      var homeView = new HomeView();
      homeView.render();
    });

    Backbone.history.start({ pushState: true});
  };

  return { 
    initialize: initialize
  };
});
