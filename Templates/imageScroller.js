let x, y, left, down;

$('.imageContainer').mousedown(function(e){
  e.preventDefault();
  down = true;
  x = e.pageX;
  left = $(this).scrollLeft();
});

$('body').mousemove(function(e){
  if(down){
    let newX = e.pageX;

    $(e.target).parent().scrollLeft(left-newX+x);
  }
});

$('body').mouseup(function(e){
  down=false;
});
