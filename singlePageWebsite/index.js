let open = false;
function openNav(){
  $('.nav').css({
    height: '5vh'
  });
  open = true;
}

function closeNav(){
  $('.nav').css({
    height: 0
  });
  open = false;
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
  closeNav();
});

$(document).ready(function(){
  openNav();
})

