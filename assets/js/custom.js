$(document).ready(function () {
	$(".my-menu-list").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [900,2],
      itemsTablet: [767,1],
      itemsMobile : false
	});
	$("#owl-demo").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
	$(".cart-view").owlCarousel({
      items : 3,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [900,2],
      itemsTablet: [767,2],
      itemsMobile : [500,1]
  });
});