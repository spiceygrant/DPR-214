"use strict";
$(document).ready(function() {
    //pre load images
  $("#image_list a").each(function() {
     var swappedImage = new Image();
      swappedImage.src = $(this).attr("href");
     });
    // toggle minus class and show / hide list items
  $("h2").click(function() {
    $(this).toggleClass("minus");
    if($(this).attr("class") != "minus") {
      $(this).next().hide();
    } else {
      $(this).next().show();
    };
  });
    // prevent the default a action and show the image in aside
  $("li a").click(function(evt) {
    evt.preventDefault();
    $("#image").attr("src", $(this).attr("href"));
   });
});
