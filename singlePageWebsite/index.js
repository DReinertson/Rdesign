let pos = $(window).scrollTop();
let open = false;
function underline(id){
  $(id).addClass('underline');
};
function openNav(){
  $('.nav').css({
    height: '5vh'
  });
  open = true;
};

function closeNav(){
  $('.nav').css({
    height: 0
  });
  open = false;
};

$('i').on('click', function(){
  if (open === false){
    openNav();
  }
  else {
    closeNav();
  }
});

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
})
