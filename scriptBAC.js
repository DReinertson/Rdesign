$('.navBar').hide();


$(document).ready(function(){
  $('.navItem').animate({
    width: '50%'
  }, 1000);
  //$('.services').animate({left: '25%'}, 1500);
  //$('.projects').animate({left: '50%'}, 1500);
  //$('.contact').animate({left: '25%'}, 1500);
});


$('.navItem').on('click', function(){
  let id = "#" + this.id
  console.log(id);
  $('.businessName').hide(500);
  $('.navBar').show(1500);
  $('.navItem').animate({left : '0'}, 1500);
  $('.navItem span').animate({'margin-left': '0'}, {duration: 1000, queue:false});
  $('.navItem').animate({top: '6%'}, {duration:1500, queue:false, complete:function(){
    console.log('hidding all divs except', id);
    $('.navItem').hide();
    $(id).show();
  }});

})
