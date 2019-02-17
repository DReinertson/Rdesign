let pos = $(window).scrollTop();
let open = false;
let page;


function underline(id){
  $(id).addClass('underline');
};
function openNav(){
  console.log('opening nav');
  if($(window).width() > 992){
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
  if($(window).width() > 992){
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

    $(window).scroll(function(){
      if($(window).width() > 992){
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
    if($(window).width() > 992){
    $(document).ready(function(){
      openNav();
      $('#devPage, #marketPage').hide();
    })
    $('.service').on('click', function(){
      openPage(this.id);
    });
  };

// if($(window).innerWidth() > 992){
//   $(window).scroll(function(){
//     let scroll = $(window).scrollTop();
//     if (scroll > pos){
//       console.log('Scroll Down');
//       closeNav();
//     }
//     else{
//       console.log('Scroll Up');
//       openNav();
//     }
//     pos = scroll;
//   });
//   $(document).ready(function(){
//     openNav();
//     $('#devPage, #marketPage').hide();
//   })
//   $('.service').on('click', function(){
//     openPage(this.id);
//   })
// }
