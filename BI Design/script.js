var slideIndex = 1;
let open = false;
showSlides(slideIndex);

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

$('.navItem').hover(function(){
  $(this).toggleClass('underline');
});

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



$('i').on('click', function(){
  if (open === false){
    openNav();
    $('body').addClass('noscroll');
  }
  else {
    closeNav();
    $('body').removeClass('noscroll');
  }
});

$(document).ready(function(){

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
});

if($(window).width()>1024){
  $('i').hide();
}
