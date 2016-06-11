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
    navigation : false
  }); 
 
});


function initialize() {
      var myLatLng = new google.maps.LatLng(51.84701, -8.33440);
      var myOptions ={
        zoom: 15,
        draggable: false,
        center: myLatLng,
      }
      var map = new google.maps.Map(
        document.getElementById('map-canvas'), myOptions);

      var panoramaOptions = {
        position: myLatLng,
        pov: {
          heading: 34,
          pitch: 10
        }
      };


       var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  map.setStreetView(panorama);



}
/**** Google Map listener ****/
google.maps.event.addDomListener(window, 'load', initialise);