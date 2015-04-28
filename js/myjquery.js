
$(document).ready(function() {

		//Function for hide/show menu on small screens
	    $( ".hamburger-menu" ).click(function() 
	    {
	        $(".hamburger-menu:not('first-child')").next().slideToggle(1000)
	    }
    );


});