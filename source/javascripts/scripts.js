$(document).ready(function() {
  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  $(window).hashchange( function(){
    var hash = location.hash || '#login1';

//    // Set the page title based on the hash.
//    document.title = ( hash.replace( /^#/, '' ) || 'blank' ) + ' | Hypothes.is';

    $('.page:visible').not(hash).fadeOut(function () {
      $('.page' + hash).fadeIn();
    });

    $('#navlist a[href!="' + hash + '"]').removeClass("hover")
    $('#navlist a[href="' + hash + '"]').addClass("hover")
  });
  // Hide the invisible things ASAP on page load.
  $('.page').not(location.hash || '#login1').hide()
});
