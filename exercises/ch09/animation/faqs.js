$(document).ready(function() {

	// runs when an h2 heading is clicked
    $("#faqs h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
		//   	$(this).next().fadeOut(5000);
				$(this).next().slideUp(400, "easeOutBounce");
	   	}
	   	else {
	  //      $(this).next().fadeIn(5000);
					$(this).next().slideDown(600, "easeInSine");
	   	}
    }); // end click

    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )
		         .animate( { fontSize: "175%", left: "-=200" }, 1000,  "easeInOutCirc" );

	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )
			   .animate( { fontSize: "175%", left: "0" }, 1000, "easeInOutExpo");
	}); // end click

}); // end ready
