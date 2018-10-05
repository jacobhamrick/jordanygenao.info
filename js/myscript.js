$(document).ready(function() {
  //isotope init
  var $grid = $('.grid');
  $grid.isotope({
    percentPosition: true,
    layoutMode : 'packery',
    itemSelector: '.grid-item',
    percentPosition: true,
    packery: {
      gutter: '.gutter-sizer'
    },
    animationOptions: {
      duration: 750,
      easing: 'swipe',
      queue: false
    },
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  //fade in divs on load - note that css init settings hide divs
  $grid.css('display', 'flex').hide().fadeIn(600);
  $('div#aboutDiv').fadeIn(600);
  $('div#cvDiv').hide().fadeIn(600);

  //highlights active art filter links
  $('.btn').on('click', function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
  });

  //fancybox init and options//
    $('.fancybox').attr('data-fancybox','gallery').fancybox({
      thumbs          : false,
      loop            : true,
      keyboard        : true,
      toolbar         : true,
      animationEffect : true,
      arrows          : true,
      clickContent    : false
    });

  //apply isotope to filtered galleries
  $('#artFilters button').on('click', function() {
    var selector = $(this).attr('data-filter');
    if(selector == '*') {
      $('.fancybox').attr('data-fancybox','gallery');
    } else {
      $(selector).find('.fancybox').attr('data-fancybox', selector);
    }
    $('.grid').isotope({ filter: selector });
     return false;
  });

  //scroll to top after clicking filter
  $('.btn').on("click", function(){
      $('.portfolio').scrollTop(0);
  });

});
