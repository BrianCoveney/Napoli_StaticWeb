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
        center: myLatLng,
      }
      var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

      var contentString = 
      'Napoli Italian Delicatessen<br/>5 Castle Terrace,<br/>Monkstown, Cork, Ireland.<br/>tel: 021 4841002';

      var infowindow = new google.maps.InfoWindow({
       content: contentString,
       maxWidth: 200
     });

  //Marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,

  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}
/**** Google Map listener ****/
// google.maps.event.addDomListener(window, 'load', initialise);