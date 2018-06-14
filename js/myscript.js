$(document).ready(function() {
  //isotope init
  var $grid = $('.grid');
  $grid.isotope({
    layoutMode : 'masonry',
    itemSelector: '.grid-item',
    percentPosition: true,
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
  $grid.css('display', 'flex').hide().fadeIn(300);
  $('div#aboutDiv').fadeIn(300);
  $('div#cvDiv').hide().fadeIn(300);

  //highlights active art filter links
  $('.btn').on('click', function(){
      $('button').removeClass('selected');
      $(this).addClass('selected');
  });

  //mainMenu stick after scroll//
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (( $(window).width() > 739) && ( scroll > 269)) {
      $('.mainMenu').addClass('fixed')
      $grid.addClass('postfix');
    } else {
      $grid.removeClass('postfix')
      $('.mainMenu').removeClass('fixed');
    }
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
  $('.btn').on("click",function(){
      $('.portfolio').scrollTop(0);
  });

});
