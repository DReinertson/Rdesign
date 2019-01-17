let pos = $(window).scrollTop();
let open = false;
let page;


function underline(id){
  $(id).addClass('underline');
};
function openNav(){
  if($(window).innerWidth() > 992){
    $('.nav').css({
      height: '8vh'
    });
    open = true;
  }
  else{
    $('.nav').addClass('fullscreen');
    open = true;
  }
};

function closeNav(){
  if($(window).innerWidth() > 992){
    $('.nav').css({
      height: 0
    });
    open = false;
  }
  else{
    $('.nav').removeClass('fullscreen');
    open = false;
  };
}
function openPage(id){
  if (page === id){
    return;
  }
  console.log(id);
  console.log(id + 'Page');
  $('.innerPage').fadeOut(100);
  $('.' + id +'Page').delay(100).fadeIn(100);
  page = id;
  // $('.innerPage').hide(500);
  // $('.' + id + 'Page').show();
}



$('i').on('click', function(){
  if (open === false){
    openNav();
  }
  else {
    closeNav();
  }
});

if($(window).innerWidth() > 992){
  console.log('large screen');
  $(window).scroll(function(){
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
  });
  $(document).ready(function(){
    openNav();
    $('#devPage, #marketPage').hide();
  })
  $('.service').on('click', function(){
    openPage(this.id);
  })
}
