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
    src : './images/MAH/MAHCircle1.jpg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'circleDarkGray',
    src : './images/MAH/MAHCircle2.jpg',
    caption : 'Here is the caption for image 2',
    color: "Dark Gray"
  },
  {
    id : 'circleSilver' ,
    src : './images/MAH/MAHCircle3.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Silver'
  },
  {
    id : 'circleGold',
    src : './images/MAH/MAH12.jpg',
    caption : 'Here is the caption for image 4',
    color: 'Gold'
  },
  {
    id : 'circleOrange' ,
    src : './images/MAH/MAH14.jpg',
    caption : 'Here is the caption for image 3',
    color: 'Orange'
  },
  {
    id : 'circleTeal' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Teal'
  },
  {
    id : 'circleNavy' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
//Start of Square objects
//For square planters
  {
    id : 'squareWhite' ,
    src : './images/MAH/MAHSquare1.jpeg',
    caption : 'Here is the caption for image 3',
    color: 'White'
  },
  {
    id : 'squareDarkGray',
    src : './images/MAH/MAHSquare2.jpeg',
    caption : 'Here is the caption for desk image',
    color: 'Dark Gray'
  },
  {
    id : 'squareSilver',
    src : './images/MAH/MAHSquare3.jpeg',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'squareGold',
    src : './images/MAH/MAHSquare4.jpeg',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'squareOrange',
    src : './images/MAH/MAHSquare5.jpeg',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'squareTeal',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'squareNavy' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start Rectangle objects
  //For Rectangle Content
  {
    id : 'rectangleWhite',
    src : './images/MAH/MAHRectangle1.jpeg',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'rectangleDarkGray',
    src : './images/MAH/MAHRectangle2.jpeg',
    caption : 'Here is the caption for desk image',
    color: 'Dark Gray'
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
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'softSquareDarkGray',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Dark Gray'
  },
  {
    id : 'softSquareSilver',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'softSquareGold',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'softSquareOrange',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'softSquareTeal',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'softSquareNavy' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
  //Start Triangle section
  //Triangle Products
  {
    id : 'triangleWhite',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'White'
  },
  {
    id : 'triangleDarkGray',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Dark Gray'
  },
  {
    id : 'triangleSilver',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Silver'
  },
  {
    id : 'triangleGold',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Gold'
  },
  {
    id : 'triangleOrange',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Orange'
  },
  {
    id : 'triangleTeal',
    src : '',
    caption : 'Here is the caption for desk image',
    color: 'Teal'
  },
  {
    id : 'triangleNavy' ,
    src : '',
    caption : 'Here is the caption for image 3',
    color: 'Navy'
  },
];

//Takes the button clicked, adds border around that button to show that it's the current color, changes photo above and if there is no photo attached to the object (see above), then it hides the img and show's the image replacement of shape/color with text that reads image not available
function imageChange(choice, container) {
  let obj = options.find(o => o.id === choice.id)
  //changes image src to load image, can change text to represent what color it is.
  // $('#' + container.id + '> img').attr('src',obj.src);
  $('#' + container.id + '>.imageHolder> img').attr('src',obj.src);
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
    $("#" + container.id).find('.noImage').css('border-color', obj.color.replace(' ', ''));
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
