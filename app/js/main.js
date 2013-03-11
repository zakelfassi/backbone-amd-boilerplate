// Filename: main.js

require.config({
  paths: {
    "jquery": "vendor/jquery/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone",
    "text": "vendor/text/text",
  }
});

require([
  'App'
  ], function(App) {
    App.initialize();
  }
);