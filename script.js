$('.tab').hide();
$('.homePage').show();

// $('.navbar-item, #read-more').on('click', function(){
//   let id = this.id;
//   $('.tab').fadeOut();
//   $('.' + id + 'Page').fadeIn();
// })

$('.aboutContainer').mouseover(function(){
  $('.' + this.id + 'Overlay').css({
    'opacity' : '0.7'
  });
}).mouseleave(function(){
  $('.' + this.id + 'Overlay').css({
    'opacity' : '0'
  });
})

//$('.tab').hide();
//$('.homePage').show();

//$('.navbar-item').on('click', function(){
  //$('.tab').hide();
  //$('.' + this.id + "Page").show();
//})
