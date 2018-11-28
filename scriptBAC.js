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
  $('.navItem').animate({left : '0'}, {duration:1500, queue:false});
  $('.navItem span').animate({'margin-left': '0'}, {duration: 1000, queue:false});
  $('.navItem').animate({top: '5%'}, {duration:1500, queue:false, complete:function(){
    $('.navItem').not(id).hide();
    $('.navItem').css({'width':'100%'});
    //document.getElementById('page').innerHTML = '<object type = "text/html" data = "./pageTemplate.html"></object>';
  }});
  $('.page').load('./pageTemplate.html').hide().delay(500).fadeIn({duration: 1500});
})
