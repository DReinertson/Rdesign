var slideIndex = 1;
let open = false;
let preview = document.getElementById('previewImage');
let imageArr = document.getElementsByClassName("tileImage");
$('.thanks').hide();
showSlides(slideIndex);



var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


$('#services > section').mouseenter(function(){
  console.log($(this));
  $(this).children('.pictureHeading').fadeOut(300);
}).mouseleave(function(){
  $(this).children('.pictureHeading').fadeIn(300);
})

$('#services > section').on('click', function(){
  console.log($(this));
})


// Next/previous controls
function changeSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  $(slides[slideIndex-1]).fadeIn(800);
}



function changePhoto(img){
  preview.src = img.src;
  console.log(img);
  // console.log(imageArr);
  console.log(img.className);
  console.log($(img).hasClass('regular'));
  if ($(img).hasClass('regular')){
    $('#previewImage').addClass('regular');
  }
  else{
    $('#previewImage').removeClass('regular');
  }
  for (let x = 0; x < imageArr.length; x++){
    if(imageArr[x].src === img.src){
      slideIndex = x+1;
      break;
    }
  }
}

function changeImage(n) {
  showImage(slideIndex += n);
}

function showImage(n) {
  var i;
  var slides = document.getElementsByClassName("tileImage");
  // console.log(slides[0].src);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (slides[slideIndex-1].classList.contains('regular')){
    $('#previewImage').addClass('regular');
  }
  else{
    $('#previewImage').removeClass('regular');
  }
  preview.src = slides[slideIndex-1].src;
}


if ($(window).width() >= 1024){
  $('.navItem').hover(function(){
    $(this).toggleClass('underline');
  });
  $('.fa-bars').hide();
};

function openNav(){
  console.log('opening nav');
  $('.nav').addClass('fullscreen');
  open = true;
};

function closeNav(){
  console.log('closing nav');
  $('.nav').removeClass('fullscreen');
  open = false;
}



$('.fa-bars').on('click', function(){
  if (open === false){
    openNav();
    $('body').addClass('noscroll');
  }
  else {
    closeNav();
    $('body').removeClass('noscroll');
  }
});

$('.close').on('click', function(){
  $('.thanks').hide();
})

$(document).ready(function(){

  if($('#artCoverage')){


    $(window).on('scroll', function(){
      let top = $('#pictureFade').offset().top;
      let bottomElement = $('#pictureFade').offset().top + $('#pictureFade').outerHeight();
      let bottomScreen = $(window).scrollTop() + $(window).innerHeight();
      let topScreen = $(window).scrollTop();
      console.log('top: ', top);
      console.log('bottomElement: ', bottomElement);
      console.log('bottomScreen: ', bottomScreen);
      console.log('topScreen: ', topScreen);

      if ((bottomScreen > top) && (topScreen < bottomElement)){
        console.log('starting');
        setImageOne();
      }else{
        console.log('stopping');
        stopSwap();
      }
    })

    setImageOne();
    function setImageOne(){
      $('#img1').animate({
        opacity : 1,
      }, 2000).delay(2000);
      $('#img2').animate({
        opacity : 0,
      },2000).delay(2000);
      setImageTwo();

    }

    function setImageTwo(){
        $('#img2').animate({
          opacity : 1,
        }, 2000).delay(2000);
        $('#img1').animate({
          opacity : 0,
        }, 2000).delay(2000);
        setImageOne();
    }

    function stopSwap(){
      $('#img1').css('opacity', 1);
      $('#img2').css('opacity', 0);
    }
  }

const offset = 100;
let xDown, yDown

window.addEventListener('touchstart', e => {
  const firstTouch = getTouch(e);

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
});

window.addEventListener('touchend', e => {
  if (!xDown || !yDown) {
    return;
  }

  const {
    clientX: xUp,
    clientY: yUp
  } = getTouch(e);
  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  const xDiffAbs = Math.abs(xDown - xUp);
  const yDiffAbs = Math.abs(yDown - yUp);

  // at least <offset> are a swipe
  if (Math.max(xDiffAbs, yDiffAbs) < offset ) {
    return;
  }

  if (xDiffAbs > yDiffAbs) {
    if ( xDiff > 0 ) {
      changeSlides(1);
    } else {
      changeSlides(-1);
      console.log('right');
    }
  } else {
    if ( yDiff > 0 ) {
      console.log('up');
    } else {
      console.log('down');
    }
  }
});

function getTouch (e) {
  return e.changedTouches[0]
}


    /* reset values */
  //   xDo
  //
  // $('.slide').on('swipeleft', swipeHandlerLeft);
  // $('.slide').on('swiperight', swipeHandlerRight);
  //
  // function swipeHandlerLeft(event){
  //   event.preventDefault();
  //   changeSlides(1);
  // };
  // function swipeHandlerRight(event){
  //   event.preventDefault();
  //   changeSlides(-1);
  // }

  // $('.slide').on('swipeleft', function(e){
  //   e.preventDefault()
  //   changeSlides(1);
  // })
  // $('.slide').on('swiperight', function(e){
  //   e.preventDefault()
  //   changeSlides(-1);
  // })

  //Position the words on the main image based upon the height of the image.
  //For Desktops / computers
  if ($('.newHomeTwoImage').length !== 0){

    let homeTwoHeight = $('.newHomeTwoImage').height();
    console.log('height: ', homeTwoHeight)
    let mahPosition = (homeTwoHeight / 2) - (homeTwoHeight * .15);

    console.log('mahPosition: ', mahPosition);
    if($(window).width() < 1024){
      mahPosition = (homeTwoHeight * .35);
      console.log('mahPosition inside: ', mahPosition);
    }
    if ($(window).width() < 750){
      mahPosition = (homeTwoHeight * .31);
    }
    $('.mahProducts').css('top', mahPosition);

    let intPosition = (homeTwoHeight * .35) - (homeTwoHeight * 0.06);
    //For Tablets
    if($(window).width() < 1024){
      intPosition = (homeTwoHeight * .27);
    }
    //For Mobile
    if ($(window).width() < 750){
      intPosition = (homeTwoHeight * .25);
    }
    $('.intServices').css('top', intPosition);

  }

});



if($(window).width()>1024){
  $('.fa-bars').hide();
}

$(window).on('load', function(){
  if ($('.getHeight') && $(window).width()>1024){

    let height = $('.getHeight').height();
    console.log('height: ', height);
    $('.matchHeight').height(height);
  }
})

$('#contactForm').submit(function(e){

        // Prevent the default submit
        e.preventDefault();

        // Collect the data from the form
        var formData =  $('.form-contact').serialize();

        //Send the from
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: formData,
            timeout: 5000,

            success: function(msg){
              console.log('success!!');
                $('.thanks').show();
                $('.form-contact').each(function(){
                  this.reset();
                })
            },
            fail: function(xhr, testStatus, errorThrown){
              alert('request failed');
            }
        });
    });

    $('#customerSupport').submit(function(e){

            // Prevent the default submit
            e.preventDefault();

            // Collect the data from the form
            var formData =  $('.form-contact').serialize();

            //Send the from
            $.ajax({
                type: "POST",
                url: "support.php",
                data: formData,
                timeout: 5000,

                success: function(msg){
                  console.log('success!!');
                    $('.thanks').show();
                    $('.form-contact').each(function(){
                      this.reset();
                    })
                },
                fail: function(xhr, testStatus, errorThrown){
                  alert('request failed');
                }
            });
        });
