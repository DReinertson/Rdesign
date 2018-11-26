$(document.body).on('click', function(){
  console.log('click, moving items now');
  $('.navItem').addClass('slideIn', 1000);
  $('.about, .other').addClass('left', 2000);
  $('.services, .contact').addClass('center', 2000);
  $('.projects').addClass('right', 2000);
})

$('.navItem').on('click', function(e){
  e.stopPropagation();
  $('.services, .contact').removeClass('center', 1000);
  $('.projects').removeClass('right', 1000);
})
