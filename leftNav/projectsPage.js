$('.text').hide();

$('img').hover(function(){
  $(this).next().show();
});
$('.projectsRow').mouseleave(function(){
  $('.text').hide();
})
