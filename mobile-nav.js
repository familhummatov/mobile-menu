(function($) {
  $.fn.menumaker = function(options) {
    var cssmenu = $(this),
      settings = $.extend(
        {
          format: "dropdown",
          sticky: false
        },
        options
      );
    return this.each(function() {
      cssmenu
        .find("li ul")
        .parent()
        .addClass("has-sub");
      multiTg = function() {
        cssmenu
          .find(".has-sub")
          .prepend('<span class="submenu-button"></span>');
        cssmenu.find(".submenu-button").on("click", function() {
          $(this).toggleClass("submenu-opened");
          if (
            $(this)
              .siblings("ul")
              .hasClass("open")
          ) {
            $(this)
              .siblings("ul")
              .removeClass("open")
              .slideToggle();
          } else {
            $(this)
              .siblings("ul")
              .addClass("open")
              .slideToggle();
          }
        });
      };
      if (settings.format === "multitoggle") multiTg();
      else cssmenu.addClass("dropdown");
      if (settings.sticky === true) cssmenu.css("position", "fixed");
      resizeFix = function() {
        var mediasize = 1000;
        if ($(window).width() > mediasize) {
          cssmenu.find("ul").show();
        }
        if ($(window).width() <= mediasize) {
          cssmenu
            .find("ul")
            .hide()
            .removeClass("open");
        }
      };
      resizeFix();
      return $(window).on("resize", resizeFix);
    });
  };
})(jQuery);

(function($) {
  $(document).ready(function() {
    $("#cssmenu").menumaker({
      format: "multitoggle"
    });
  });
})(jQuery);

$(document).ready(function() {
  $("#open-menu").click(function() {
    $("#cssmenu").toggleClass("cssmenu-open");
  });
});
