$('.generalContainer').mouseover(function(){
  $('.generalOverlay').css({
    'opacity' : '0.7'
  });
}).mouseleave(function(){
  $('.generalOverlay').css({
    'opacity' : '0'
  });
})

$('.navItem').mouseover(function(){
  $('.' + this.id + 'Overlay').css({
    'opacity' : '0.7'
  });
}).mouseleave(function(){
  $('.' + this.id + 'Overlay').css({
    'opacity' : '0'
  });
})

//$('.generalOverlay').on('click', function(){
  //$('.generalTab').css({
    //'width' : '70vw'
  //});
  //$('.')
//})

let tabs = ['about', 'services', 'projects', 'contact']

function openHome(){
  for (x in tabs){
    console.log(tabs[x]);
    $('#' + tabs[x]).hide();;
  }
  if ($(window).width() >= 1200){
    $('.generalTab').addClass('largetabGrow');
    $('.nav').addClass('navGrow');
    $('.generalContainer').addClass('largecontainerGrow');
  }
  else{
    $('.generalTab').addClass('tabGrow');

  $('.nav').addClass('navGrow');
  $('.generalContainer').addClass('containerGrow');
}
}

function closeHome(){
  for (x in tabs){
    $('#' + tabs[x]).show();
  }
  if ($(window).width() >= 1200){
    $('.generalTab').removeClass('largetabGrow');
    $('.nav').removeClass('navGrow');
    $('.generalContainer').removeClass('largecontainerGrow');
  }
  else{
  $('.generalTab').removeClass('tabGrow');
  $('.nav').removeClass('navGrow');
  $('.generalContainer').removeClass('containerGrow');
}
}

$('.generalOverlay').click(function(e){
  console.log('clicked overlay');
  e.stopPropagation();
  if($('.nav').hasClass('navGrow')){
    closeHome();
  }
  else{
    openHome();
  }
})
$(document.body).click(function(e){
  closeHome();
});
$('.generalTab').click(function(e){
  e.stopPropagation();
})
