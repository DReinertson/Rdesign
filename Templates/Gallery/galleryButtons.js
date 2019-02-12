let x, y, left, down;

function scrollLeft(){
  console.log('click');
  console.log($(this.id));
  console.log($(this).next('div').innerHTML);
  console.log($(this).next('div').width());
  $(this).next('div').scrollLeft($('.imageContainer').width());
};

$('.imageContainer').mousedown(function(e){
  e.preventDefault();
  down = true;
  x = e.pageX;
  left = $(this).scrollLeft();
  console.log(left);
});

$('body').mousemove(function(e){
  if(down){
    let newX = e.pageX;
    console.log(e.pageX);
    console.log($(e.target).parent());
    $(e.target).parent().scrollLeft(left-newX+x);
  }
});

$('body').mouseup(function(e){
  down=false;
});

$('.next').on('click', function(e){
  e.preventDefault();
  left = $(this).closest('div').find('.imageContainer').scrollLeft();
  console.log(left);
  $(this).closest('div').find('.imageContainer').animate({scrollLeft: left + $('.image').width()*2});
  // scrollLeft(left + $('.image').width()*2)

});

$('.previous').on('click', function(e){
  e.preventDefault();
  left = $(this).closest('div').find('.imageContainer').scrollLeft();
  $(this).closest('div').find('.imageContainer').animate({scrollLeft: left - $('.image').width()*2});
  // $(this).closest('div').find('.imageContainer').scrollLeft(-($('.imageContainer').width()))
});
