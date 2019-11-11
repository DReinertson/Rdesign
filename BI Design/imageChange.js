$('.spacer').hide();
$(document).ready(function(){
  if($(window).width() <= 1023){
    $('.captionSize').hide();
    $('.optionsSize').show();
  }
  else{
    $('.captionSize').show();
    $('.optionsSize').hide();
  }
  $(window).resize(function(){
    if($(window).width() <= 1023){
      $('.captionSize').hide();
      $('.optionsSize').show();
    }
    else{
      $('.captionSize').show();
      $('.optionsSize').hide();
    }
  });
});

//Array of objects containing all the information of each product.
//Product img, caption (when i was using captions), and the color. These colors will be rgb when I figure out the proper name of the colors.
let options = [
  {
    id : 'circleWhite',
    src : './images/products/twelveRound/twelveRoundWhite.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'circleDarkGray',
    src : './images/products/twelveRound/twelveRoundMetal.jpg',
    caption : 'Here is the caption for image 2',
    color: "Gun Metal"
  },
  {
    id : 'circleSilver' ,
    src : './images/products/twelveRound/twelveRoundSilver.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Silver'
  },
  {
    id : 'circleGold',
    src : './images/products/twelveRound/twelveRoundGold.jpg',
    caption : 'Here is the caption for image 4',
    color: 'Gold'
  },
  {
    id : 'circleOrange' ,
    src : './images/products/twelveRound/twelveRoundOrange.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Orange'
  },
  {
    id : 'circleTeal' ,
    src : './images/products/twelveRound/twelveRoundTeal.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Teal'
  },
  {
    id : 'circleNavy' ,
    src : './images/products/twelveRound/twelveRoundNavy.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start Nine Circle objects
  {
    id : 'circleWhiteNine',
    src : './images/products/nineRound/nineRoundWhite.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'circleDarkGrayNine',
    // src : './images/products/nineRound/nineRoundMetal.jpg',
    src : '',
    caption : 'Here is the caption for image 2',
    color: "Gun Metal"
  },
  {
    id : 'circleSilverNine' ,
    // src : './images/products/nineRound/nineRoundSilver.jpg',
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Silver'
  },
  {
    id : 'circleGoldNine',
    // src : './images/products/nineRound/nineRoundGold.jpg',
    src : '',
    caption : 'Here is the caption for image 4',
    color: 'Gold'
  },
  {
    id : 'circleOrangeNine' ,
    src : './images/products/nineRound/nineRoundOrange.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Orange'
  },
  {
    id : 'circleTealNine' ,
    src : './images/products/nineRound/nineRoundTeal.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Teal'
  },
  {
    id : 'circleNavyNine' ,
    src : './images/products/nineRound/nineRoundNavy.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
//Start of Square objects
//For square planters
  {
    id : 'squareWhite' ,
    src : './images/products/twelveSquare/twelveSquareWhite.jpg',
    caption : 'Here is the caption for image 3',
    color: 'White'
  },
  {
    id : 'squareDarkGray',
    src : './images/products/twelveSquare/twelveSquareMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'squareSilver',
    src : './images/products/twelveSquare/twelveSquareSilver.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'squareGold',
    src : './images/products/twelveSquare/twelveSquareGold.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'squareOrange',
    src : './images/products/twelveSquare/twelveSquareOrange.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'squareTeal',
    src : './images/products/twelveSquare/twelveSquareTeal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'squareNavy' ,
    src : './images/products/twelveSquare/twelveSquareNavy.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start Nine Square objects
  {
    id : 'squareWhiteNine' ,
    src : './images/products/nineSquare/nineSquareWhite.jpg',
    caption : 'Here is the caption for image 3',
    color: 'White'
  },
  {
    id : 'squareDarkGrayNine',
    // src : './images/products/nineSquare/nineSquareMetal.jpg',
    src:"",
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'squareSilverNine',
    // src : './images/products/nineSquare/nineSquareSilver.jpg',
    src:"",
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'squareGoldNine',
    // src : './images/products/nineSquare/nineSquareGold.jpg',
    src:"",
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'squareOrangeNine',
    src : './images/products/nineSquare/nineSquareOrange.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'squareTealNine',
    // src : './images/products/nineSquare/nineSquareTeal.jpg',
    src:"",
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'squareNavyNine' ,
    src : './images/products/nineSquare/nineSquareNavy.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start Rectangle objects
  //For Rectangle Content
  {
    id : 'rectangleWhite',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'rectangleDarkGray',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'rectangleSilver',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'rectangleGold',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'rectangleOrange',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'rectangleTeal',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'rectangleNavy' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start SoftSqaure section
  //SoftSquare Products
  {
    id : 'softSquareWhite',
    src : './images/products/twelveSoft/twelveSoftWhite.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'softSquareDarkGray',
    src : './images/products/twelveSoft/twelveSoftMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'softSquareSilver',
    src : './images/products/twelveSoft/twelveSoftSilver.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'softSquareGold',
    src : './images/products/twelveSoft/twelveSoftGold.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'softSquareOrange',
    src : './images/products/twelveSoft/twelveSoftOrange.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'softSquareTeal',
    src : './images/products/twelveSoft/twelveSoftTeal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'softSquareNavy' ,
    src : './images/products/twelveSoft/twelveSoftNavy.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start Triangle section
  //Triangle Products
  {
    id : 'triangleWhite',
    src : './images/products/nineTriangle/nineTriangleWhite.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'triangleDarkGray',
    src : './images/products/nineTriangle/nineTriangleMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'triangleSilver',
    src : './images/products/nineTriangle/nineTriangleSilver.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'triangleGold',
    src : './images/products/nineTriangle/nineTriangleGold.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'triangleOrange',
    src : './images/products/nineTriangle/nineTriangleOrange.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'triangleTeal',
    src : './images/products/nineTriangle/nineTriangleTeal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'triangleNavy' ,
    src : './images/products/nineTriangle/nineTriangleNavy.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
];

//Takes the button clicked, adds border around that button to show that it's the current color, changes photo above and if there is no photo attached to the object (see above), then it hides the img and show's the image replacement of shape/color with text that reads image not available
function imageChange(choice, container) {
  let obj = options.find(o => o.id === choice.id)
  $("#" + container.id).find(".noImage").removeClass('silverBorder whiteBorder goldBorder orangeBorder darkGrayBorder tealBorder navyBorder');
  //changes image src to load image, can change text to represent what color it is.
  // $('#' + container.id + '> img').attr('src',obj.src);
  console.log($('#' + container.id + '>.productLink>.imageHolder> img').attr('src',obj.src));
  $('#' + container.id + '>.productLink>.imageHolder> img').attr('src',obj.src);
  $('#' + container.id + '>.imageCaption>p>.color').html(obj.color);
  //Adds current color to div, creating border around color.
  $('#' + container.id + '>.options>span.currentColor').removeClass('currentColor');

  // This is for when each shape was represented in the options section
  // if(container.id === 'triangle'){
  //   $(".options .choice").removeClass('border');
  //   $(choice).addClass('border');
  // }
  // else{$(choice).addClass('currentColor')};
  $(choice).addClass('currentColor');

  //Either hide img and show noImage div or show img and hide noImage.
  if(obj.src === ''){
    let border = $("#" + choice.id).attr('class').split(' ')[1] + 'Border';
    $("#" + container.id).find('.noImage').addClass(border);
    // $("#" + container.id).find('.noImage').css('border-color', obj.color.replace(' ', ''));
    // if (obj.color === 'Gun Metal'){
    //   // console.log('in gun metal');
    //   $("#" + container.id).find('.noImage').css('border-color', 'RGB(52,53,58)');
    // }
    // $('#' + container.id + '>.noImage').removeClass('hide');
    // $('#' + container.id + '>img').addClass('hide');
    $('#' + container.id + '>.productLink>.imageHolder>.noImage').removeClass('hide');
    $('#' + container.id + '>.productLink>.imageHolder>img').addClass('hide');
    //For triangle container, adds the correct border-bottom-color to make noImage representative of the product.
    if (container.id === 'triangle'){
      $('#' + container.id).find('.noImage').css('border-color', 'transparent');
      // $('#triangle >.noImage').css("border-bottom-color", obj.color.replace(' ', ''));
      // $('#' + container.id + '>.noImage').css('background', 'none');
      $('#triangle >.productLink>.imageHolder>.noImage').css("border-bottom-color", obj.color.replace(' ', ''));
      $('#' + container.id + '>.productLink>.imageHolder>.noImage').css('background', 'none');
    }
  }
  else{
    // $('#' + container.id + '>.noImage').addClass('hide');
    // $('#' + container.id + '>img').removeClass('hide');
    $('#' + container.id + '>.productLink>.imageHolder>.noImage').addClass('hide');
    $('#' + container.id + '>.productLink>.imageHolder>img').removeClass('hide');
  }

};
$('.choice').on('mouseover', function(){
  // let color = $(this).attr('class').split(' ')[1];
  let obj = options.find(o => o.id === this.id)
  let color = obj.color;
  let triangle = document.getElementById('triangle');
  if(triangle !== null){
    console.log(color);
    console.log($(this));
    $(this).html(color);
  }
  else{
    console.log(color);
    console.log($(this));
    $(this).html(color);
  }
}).on('mouseleave', function(){
  let triangle = document.getElementById('triangle');
  if(triangle !== null){
    console.log(this);
    $(this).html('');
  }
  else{
    $(this).html('');
  }
  // $(this).html('');
})

//Gallery, show larger images

$(document).keyup(function(e){
  if(e.key === 'Escape'){
    $('#galleryOverlay').fadeOut();
    $('body').css('overflow', 'auto');
  }
});

$('#galleryOverlay').hide();
if($(document).width() > 1023){
    $("#galleryImages img").on('click', function(){
      $('#galleryOverlay').fadeIn();
      $("#galleryOverlayImage").attr('src', this.src);
      // console.log($("#galleryOverlayImage").src;
      $('body').css('overflow', 'hidden');
      if(this.width > this.height){
        $('#galleryOverlayImage').addClass('changeWidth');
      }
      else{
        $('#galleryOverlayImage').removeClass('changeWidth');
      }
    });

    $('#close').on('click', function(){
      $('#galleryOverlay').fadeOut();
      $('body').css('overflow', 'auto');
    });
  };

  //Fit height of image to previous or next images
  let imgBefore = $('#fitBefore').prev();
  let imgAfter = $('#fitAfter').next();

  function resize(){
    let imageHeightBefore = imgBefore[0].height
    $('#fitBefore').height(imageHeightBefore);
    let imageHeightAfter = imgAfter[0].height
    $('#fitAfter').height(imageHeightAfter);
  }

  //Change image size on resizing of window.
  $(window).on('resize', function(){
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(resize, 100);
  });

  

  //Match image size to image before tagged image
  $(imgBefore).on('load', function(){
    let imageHeightBefore = imgBefore[0].height
    $('#fitBefore').height(imageHeightBefore);
  });

  //Match image size to image after tagged image
  $(imgAfter).on('load',function(){
    console.log(imgAfter[0]);
    let imageHeightAfter = imgAfter[0].height
    console.log(imageHeightAfter);
    $('#fitAfter').height(imageHeightAfter);
  })


  // $(document).ready(function(){
  //
  //   document.getElementById('fitBefore').height = imageHeightBefore
  //
  //   document.getElementById('fitAfter').height = imageHeightAfter
  // })
