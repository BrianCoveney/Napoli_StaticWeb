
$(document).ready(function() {

		//Click function to hide/show drop down menu on small screens
	    $( ".hamburger-menu" ).click(function() 
		    {
		        $(".hamburger-menu").next().slideToggle(500);
		    }
	    );
	    //Keep drop down meun visable on mouse over
	    $( "#dropDown" ).mouseenter(function() 
		    {
		        $(".hamburger-menu").next().show();
		    }
	    );
	    //Hide drop down on mouse leave
	    $( "#dropDown" ).mouseleave(function() 
		    {
		        $(".hamburger-menu").next().hide(500);
		    }
	    );
});