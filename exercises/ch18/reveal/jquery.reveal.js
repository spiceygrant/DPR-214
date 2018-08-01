(function($){
    $.fn.reveal = function() {
        return this.each(function() {
          // setting up the click event handler for the h2 elements
          $(this).click(function(evt) {
              $(this).toggleClass("minus");
              if ($(this).attr("class") !== "minus") {
                  $(this).next().hide();
              } else {
                  $(this).next().show();
              }
          evt.preventDefault();
          }); // end click
        });
    };
})(jQuery);
