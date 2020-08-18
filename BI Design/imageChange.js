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
    id : 'circleCarbon' ,
    src : './images/products/twelveRound/twelveRoundCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'circleBlue' ,
    src : './images/products/twelveRound/twelveRoundBlue.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
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
    src : './images/products/nineRound/nineRoundMetal.jpg',
    caption : 'Here is the caption for image 2',
    color: "Gun Metal"
  },
  {
    id : 'circleSilverNine' ,
    src : './images/products/nineRound/nineRoundSilver.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Silver'
  },
  {
    id : 'circleGoldNine',
    src : './images/products/nineRound/nineRoundGold.jpg',
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
    id : 'circleCarbonNine' ,
    src : './images/products/nineRound/nineRoundCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'circleBlueNine' ,
    src : './images/products/nineRound/nineRoundCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
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
    id : 'squareCarbon' ,
    src : './images/products/twelveSquare/twelveSquareCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'squareBlue' ,
    src : './images/products/twelveSquare/twelveSquareBlue.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
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
    src : './images/products/nineSquare/nineSquareMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'squareSilverNine',
    src : './images/products/nineSquare/nineSquareSilver.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'squareGoldNine',
    src : './images/products/nineSquare/nineSquareGold.jpg',
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
    src : './images/products/nineSquare/nineSquareTeal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'squareCarbonNine',
    src : './images/products/nineSquare/nineSquareCarbon.jpg',
    color: 'Carbon'
  },
  {
    id : 'squareBlueNine',
    src : './images/products/nineSquare/nineSquareBlue.jpg',
    color: 'Classic Blue'
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
    src : './images/products/rectangle/rectangleMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'rectangleSilver',
    src : './images/products/rectangle/rectangleSilver.jpg',
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
    src : './images/products/rectangle/rectangleOrange.jpg',
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
    id : 'rectangleCarbon' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'rectangleBlue' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
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
    id : 'softSquareCarbon' ,
    src : './images/products/twelveSoft/twelveSoftCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'softSquareBlue' ,
    src : './images/products/twelveSoft/twelveSoftBlue.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
  },
  //Start Nine Inch Soft Square
  {
    id : 'softSquareNineWhite',
    src : './images/products/nineSoft/nineSoftWhite.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'softSquareNineDarkGray',
    src : './images/products/nineSoft/nineSoftMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'softSquareNineSilver',
    src : './images/products/nineSoft/nineSoftSilver.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'softSquareNineGold',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'softSquareNineOrange',
    src : './images/products/nineSoft/nineSoftOrange.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'softSquareNineTeal',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'softSquareNineCarbon' ,
    src : './images/products/nineSoft/nineSoftCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'softSquareNineBlue' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
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
    id : 'triangleCarbon' ,
    src : './images/products/nineTriangle/nineTriangleCarbon.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Carbon'
  },
  {
    id : 'triangleBlue' ,
    src : './images/products/nineTriangle/nineTriangleBlue.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Classic Blue'
  },
  //Start Hexagon Products
  {
    id : 'hexWhite',
    src : './images/products/twelveHex/twelveHexWhite.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'hexDarkGray',
    src : './images/products/twelveHex/twelveHexMetal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gun Metal'
  },
  {
    id : 'hexSilver',
    src : './images/products/twelveHex/twelveHexSilver.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'hexGold',
    src : './images/products/twelveHex/twelveHexGold.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'hexOrange',
    src : './images/products/twelveHex/twelveHexOrange.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'hexTeal',
    src : './images/products/twelveHex/twelveHexTeal.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'hexCarbon',
    src : './images/products/twelveHex/twelveHexCarbon.jpg',
    caption : 'Here is the caption for desk image',
    color: 'Carbon'
  },
  {
    id : 'hexBlue',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Classic Blue'
  },
];

//Takes the button clicked, adds border around that button to show that it's the current color, changes photo above and if there is no photo attached to the object (see above), then it hides the img and show's the image replacement of shape/color with text that reads image not available
function imageChange(choice, container) {
  let obj = options.find(o => o.id === choice.id)
  $("#" + container.id).find(".noImage").removeClass('silverBorder whiteBorder goldBorder orangeBorder darkGrayBorder tealBorder blueBorder carbonBorder');

  //changes image src to load image, can change text to represent what color it is.
  // $('#' + container.id + '> img').attr('src',obj.src);
  console.log($('#' + container.id + '>.productLink>.imageHolder> img').attr('src',obj.src));
  $('#' + container.id + '>.productLink>.imageHolder> img').attr('src',obj.src);
  $('#' + container.id + '>.imageCaption>p>.color').html(obj.color);
  //Adds current color to div, creating border around color.
  $('#' + container.id + '>.options>span.currentColor').removeClass('currentColor');

  ////////////////Edits for Shop pages////////////////////
    $('#' + container.id + '>.options>.colors>span.currentColor').removeClass('currentColor');

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
    console.log('border: ', border);
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
    // if (container.id === 'triangle'){
    //   $('#' + container.id).find('.noImage').css('border-color', 'transparent');
    //   $('#triangle >.productLink>.imageHolder>.noImage').css("border-bottom-color", obj.color.replace(' ', ''));
    //   $('#' + container.id + '>.productLink>.imageHolder>.noImage').css('background', 'none');
    // }
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

//////////////Edits for Shop pages////////////////////
$('.colorChoice').on('click', function(){
  $(this).addClass('selectedColor').siblings().removeClass('selectedColor');
  console.log($(this));
  console.log('adding selected');
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
  // let imgBefore = $('#fitBefore').prev();
  // let imgAfter = $('#fitAfter').next();
  $(window).on('load', function(){
    $('.fitBefore').each(function(){
      console.log('this: ', this);
      console.log('this height: ', this.height);
      let imgBefore = $(this).prev();
      console.log('imgBefore:', imgBefore[0]);
      console.log('imgBefore height: ', imgBefore[0].height);
      this.height = imgBefore[0].height;
      });
    $('.fitAfter').each(function(){
      let imgAfter = $(this).next();
      this.height = imgAfter[0].height;
    })
  });




  function resize(){
    // let imageHeightBefore = imgBefore[0].height
    // $('#fitBefore').height(imageHeightBefore);
    // let imageHeightAfter = imgAfter[0].height
    // $('#fitAfter').height(imageHeightAfter);
    $('.fitBefore').each(function(){
      let imgBefore;
      if ($(this).prev().hasClass('fitBefore')){
        imgBefore = $(this).prev().prev();
      }
      else{
        imgBefore = $(this).prev();
      }
      let imageHeightBefore = imgBefore[0].height;
      this.height = imageHeightBefore;
    })
    $('.fitAfter').each(function(){
      let imgAfter = $(this).next();
      let imageHeightAfter = imgAfter[0].height
      this.height = imageHeightAfter;
    })

  }

  //Change image size on resizing of window.
  // $(window).on('resize', function(){
  //   let timeout;
  //   clearTimeout(timeout);
  //   timeout = setTimeout(resize, 100);
  // });

  let globalResizeTimer = null;
  $(window).resize(function(){
    if(globalResizeTimer != null) window.clearTimeout(globalResizeTimer);
    globalResizeTimer = window.setTimeout(function(){
      resize();
    }, 400);
  })



  //Match image size to image before tagged image
  // $(imgBefore).on('load', function(){
  //   let imageHeightBefore = imgBefore[0].height
  //   $('#fitBefore').height(imageHeightBefore);
  // });
  //
  // //Match image size to image after tagged image
  // $(imgAfter).on('load',function(){
  //   console.log(imgAfter[0]);
  //   let imageHeightAfter = imgAfter[0].height
  //   console.log(imageHeightAfter);
  //   $('#fitAfter').height(imageHeightAfter);
  // })


  //Match image size to image after tagged image



  // $(document).ready(function(){
  //
  //   document.getElementById('fitBefore').height = imageHeightBefore
  //
  //   document.getElementById('fitAfter').height = imageHeightAfter
  // })
