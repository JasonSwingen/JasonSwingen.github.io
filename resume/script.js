$(document).ready(function($) {
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
});