(function() {
  // Usando jQuery como um módulo nomeado em RequireJS
  define(["jquery"], function() {
    (function($) {
      console.info("Verificando Global jQuery...");
      if (typeof window === "object" && typeof window.document === "object") {
        if (!!window && !!!window.$) {
          window.jQuery = window.$ = jQuery;
        }
        console.log([$, jQuery]);
      }
      var version = $().jquery;
      if (typeof define === "function" && define.amd && define.amd.jQuery) {
        console.info("jQuery: " + version + " $.fn.jquery: " + $.fn.jquery);
        return window.jQuery;
      }
    })(jQuery);
  });
})();
