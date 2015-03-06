$(document).ready(function($) { // Start of Document Ready Javascript

  // Animate the scroll to top
  $('.totop').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 900)
  });

  // Smooth scrolling to sections
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 900);
          return false;
        }
      }
    });
  });

  //Fade In
  $(function() {
    var element = document.getElementById("js-fadeInElement");
    $(element).addClass('js-fade-element-hide');

    $(window).scroll(function() {
      if( $("#js-fadeInElement").length > 0 ) {
        var elementTopToPageTop = $(element).offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var windowInnerHeight = window.innerHeight;
        var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
        var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
        var distanceFromBottomToAppear = 300;

        if(elementTopToWindowBottom > distanceFromBottomToAppear) {
          $(element).addClass('js-fade-element-show');
        }
        else if(elementTopToWindowBottom < 0) {
          $(element).removeClass('js-fade-element-show');
          $(element).addClass('js-fade-element-hide');
        }
      }
    });
  });

  // Menu Toggle
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  // Parallax

  $(function() {
    if ($("#js-parallax-window").length) {
      parallax();
    }
  });

  $(window).scroll(function(e) {
    if ($("#js-parallax-window").length) {
      parallax();
    }
  });

  function parallax(){
    if( $("#js-parallax-window").length > 0 ) {
      var plxBackground = $("#js-parallax-background");
      var plxWindow = $("#js-parallax-window");

      var plxWindowTopToPageTop = $(plxWindow).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

      var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
      var windowInnerHeight = window.innerHeight;
      var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
      var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
      var plxSpeed = 0.35;

      plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
    }
  }

  // Map
  var bittersMap = (function () {
    var myLatlng = new google.maps.LatLng(46.7687250,-92.1293140),
        mapCenter = new google.maps.LatLng(46.7687150,-92.1293040),
        mapCanvas = document.getElementById('map_canvas'),
        mapOptions = {
          center: mapCenter,
          zoom: 13,
          scrollwheel: false,
          draggable: true,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(mapCanvas, mapOptions),
        contentString =
          '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>'+
          '<div id="bodyContent"'+
          '<p>Sveavägen 98</p>'+
          '</div>'+
          '</div>',
        infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
        }),
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'thoughtbot (Sweden)'
        });

    return {
      init: function () {
        map.set('styles', [{
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffff00' },
            { saturation: 30 },
            { lightness: 10}
          ]}
        ]);

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map,marker);
        });
      }
    };
  }());
  bittersMap.init();

}); // End of Document Ready Javascript

