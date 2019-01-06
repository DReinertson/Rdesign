

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
  //$('.nav').toggle('slow', function(){
    //$('.nav').animate({
      //height: '5vh'
      //})
  //});
});

$(window).scroll(function(){
  closeNav();
});

$(document).ready(function(){
  openNav();
})

//Add underline on hover over picture. But only to specific image/title pair.
