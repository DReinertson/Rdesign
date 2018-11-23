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
  $('.nav').css('width', '100%');
  $('.generalTab').css({
    'width' : '70vw',
    'transition' : '1s'
  });
  for (x in tabs){
    console.log(tabs[x]);
    $('#' + tabs[x]).hide();;
  }
  $('.generalContainer').css({
    'width' : '25vw',
    'height' : '25vw',
    'margin-right' : 'auto',
  });
}

function closeHome(){

  $('.generalTab').css({
    'width' : '0',
    'transition' : 'fast'
  });
  $('.generalContainer').css({
    'width' : 'initial',
    'height' : 'initial',
    'margin' : 'initial',
    'align-self' : 'initial'
  });
  for (x in tabs){
    $('#' + tabs[x]).show();
  }
}
