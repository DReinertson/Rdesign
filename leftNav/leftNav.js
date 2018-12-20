$('.navMax').hide();

function highlightActive(div){
  console.log('div: ', div);
  console.log(document.title);
  $("#" + div).addClass('active');
}
let title = document.title.toLowerCase();
highlightActive(title);


//page will be a string, id, div, identifier.
// function showPage(page){
//   let url = './' + page + 'Page.html';
//   if (moved === false){
//     console.log(url);
//     $('.page').load(url).hide(250).fadeIn({duration: 250});
//     $('.page').addClass('pageSpecs');
//   }
//   else{
//     console.log('else statement showPage');
//     $('.page').load(url).hide().delay(250).fadeIn({duration: 250});
//   }
// };

// function moveNav(div){
//   if (moved === false){
//     console.log(div.id);
//     let id = '#' + div.id;
//     console.log(id);
//     $('.navItem').animate({fontSize: '2vw', height: '5%', 'max-width':'100%', margin:'0', paddingRight:'4%'}, 500);
//
//     $('.nav').animate({height: '100%', backgroundColor:'#808080', width: '12%'}, {duration: 500, complete:function(){
//       console.log('going into animate function');
//       $('.nav').addClass('fixed');
//       //$('.businessName').animate({width:'88%'});
//     }});
//     showPage(div.id);
//     moved = true;
//   }
//   else{
//     console.log('else statement moveNav');
//     showPage(div.id);
//   }
// }


// $('.navItem').on('click mouseover', function(){
//     moveNav(this);
//     highlightActive(this);
//
// });





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
