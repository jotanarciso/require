(function(undefined) {
  "use strict";
  requirejs.config({
    name: "garagem",
    baseUrl: "./",
    urlArgs: function(id, url) {
      return (url.indexOf("?") === -1 ? "?" : "&") + "v=23";
    }, // Debug Cache,
    deps: ["js/config/base"],
    map: {
      "*": {
        jQuery: "jquery"
      }
    },

    paths: {
      // Core libs
      jquery: [
        "https://code.jquery.com/jquery-3.4.1.min",
        "js/vendor/jquery-3.4.1.min"
      ],
      "jquery.bootstrap": "js/vendor/bootstrap.min",

      main: "js/main",

    },

    shim: {
      "jquery.bootstrap": {
        deps: ["jquery"]
      }
    },
    waitSeconds: 15
  });

  define([
    "jquery",
    "jquery.bootstrap",
  ], function($, _) {
    require(["main"]);
  });
  requirejs.onError = function(err) {
    console.log(err.requireType);
    console.log("modules: " + err.requireModules);
    throw err;
  };
})();
