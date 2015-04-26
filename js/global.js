  $(document).ready(function() {

  // $("#owl-demo").owlCarousel({
  	
  //     autoPlay: 5000, //Set AutoPlay to 3 seconds
      
  //     items : 4,
  //     itemsDesktop : [1199,3],
  //     itemsDesktopSmall : [979,3]
  // });

/*** Lazy Load ***/
  $("#owl-demo").owlCarousel({
    items : 3,
    lazyLoad : true,
    navigation : true
  }); 
 
});