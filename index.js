let pos = $(window).scrollTop();
let open = false;
let page;


function underline(id){
  $(id).addClass('underline');
};
function openNav(){
  console.log('opening nav');
  if($(window).width() > 1024){
    $('.nav').removeClass('fullscreen').addClass('navHeight');
    open = true;
  }
  else{
    $('.nav').removeClass('navHeight').addClass('fullscreen');
    open = true;
  }
};

function closeNav(){
  console.log('closing nav');
  if($(window).width() > 1024){
    $('.nav').removeClass('navHeight');
    $('.nav').removeClass('fullscreen');
    open = false;
  }
  else{
    $('.nav').removeClass('fullscreen navHeight');
    open = false;
  };
}
function openPage(id){
  if (page === id){
    return;
  }
  $('.innerPage').fadeOut(100);
  $('.' + id +'Page').delay(100).fadeIn(100);
  page = id;
}



$('i').on('click', function(){
  if (open === false){
    openNav();
  }
  else {
    closeNav();
  }
});

$(document).ready(function(){
  if($(window).width() > 1024){
      console.log('large screen, hiding i opening nav');
      $('i').hide();
      openNav();
      $('.caption').hide();
    }
  else{
      console.log('smaller screen, showing caption, hiding overlay');
      $('.caption').show();
      $('.overlay').hide();
    }
});

$(window).scroll(function(){
  if($(window).width() > 1024){
    let scroll = $(window).scrollTop();
    if (scroll > pos){
      console.log('Scroll Down');
      closeNav();
    }
    else{
      console.log('Scroll Up');
      openNav();
    }
    pos = scroll;
  };
});
