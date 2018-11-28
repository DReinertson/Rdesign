let moved = false;

//page will be a string, id, div, identifier.
function showPage(page){
  if (moved === false){
    console.log('showing page');
    $('.page').load('./' + page + 'Template.html').hide().delay(500).fadeIn({duration: 500});
    $('.page').addClass('pageSpecs');
  }
  else{
    console.log('else statement showPage');
    $('.page').load('./' + page + 'Template.html').hide().delay(500).fadeIn({duration: 500});
  }
};

function moveNav(div){
  if (moved === false){
    let id = '#' + div.id;
    console.log(id);
    $('.navItem').animate({fontSize: '2vw', height: '5%', 'max-width':'100%', margin:'0', paddingRight:'4%'}, 1000);

    $('.nav').animate({height: '100%', backgroundColor:'gray', width: '12%'}, {duration: 1000, complete:function(){
      console.log('going into animate function');
      $('.nav').addClass('fixed');
      $('.businessName').animate({width:'88%'});
    }});
    showPage('page');
    moved = true;
  }
  else{
    console.log('else statement moveNav');
    showPage('page');
  }
}

$('.navItem').on('click', function(){
  moveNav(this);
});


// $(document).ready(function(){
//   //$('.services').animate({left: '25%'}, 1500);
//   //$('.projects').animate({left: '50%'}, 1500);
//   //$('.contact').animate({left: '25%'}, 1500);
// });






// $('.navItem').on('click', function(){
//   let id = "#" + this.id
//   console.log(id);
//   $('.businessName').hide(500);
//   $('.navBar').show(1500);
//   $('.navItem').animate({left : '0'}, {duration:1500, queue:false});
//   $('.navItem span').animate({'margin-left': '0'}, {duration: 1000, queue:false});
//   $('.navItem').animate({top: '5%'}, {duration:1500, queue:false, complete:function(){
//     $('.navItem').not(id).hide();
//     $('.navItem').css({'width':'100%'});
//     //document.getElementById('page').innerHTML = '<object type = "text/html" data = "./pageTemplate.html"></object>';
//   }});
//   $('.page').load('./pageTemplate.html').hide().delay(500).fadeIn({duration: 1500});
// })
