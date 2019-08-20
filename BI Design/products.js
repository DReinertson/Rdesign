
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

function imageChange(choice, container) {
  // console.log('choice: ', choice);
  // console.log(container);
  let obj = options.find(o => o.id === choice.id)

  $('#productImage').attr('src',obj.src);
  $("#captionColor").html(obj.color);
  $('#' + container.id + '>.infoContainer>.colors>.options>span.currentColor').removeClass('currentColor');
  if(container.id === 'triangle'){
    // $(choice).css('border-bottom', '1.8vw solid black');
    $(".options .choice").removeClass('border');
    $(choice).addClass('border');
  }
  else{
    $(choice).addClass('currentColor');
  }
  if(obj.src === ''){
    console.log('noimage');
    console.log($("#" + container.id).find('.noImage'));
    // $("#" + container.id).find('.noImage').css('background', obj.color.replace(' ', ''));
    $("#" + container.id).find('.noImage').css('border-color', obj.color.replace(' ', ''));

    // $('#' + container.id + '>.imageSection>.noImage').css('background', obj.color);
    $('#noImage').removeClass('hide');
    $('#productImage').addClass('hide');
    if (container.id === 'triangle'){
      $('#' + container.id).find('.noImage').css('border-color', 'transparent');
      console.log("is triangle! changing color:", obj.color);
      $('#triangle >.imageContainer>.imageSection>.noImage').css("border-bottom-color", obj.color.replace(' ', ''));
      $('#' + container.id + '>.imageContainer>.imageSection>.noImage').css('background', 'none');
    }
  }
  else{
    $('#noImage').addClass('hide');
    $('#productImage').removeClass('hide');
  }

};
$('.choice').on('mouseover', function(){
  let color = $(this).attr('class').split(' ')[1];
  let triangle = document.getElementById('triangle');
  if(triangle !== null){
    console.log('entering triangle');
    console.log($("#" + this.id + ">p"));
    $("#" + this.id + ">p").html(color);
  }
  else{
    $(this).html(color);
  }
}).on('mouseleave', function(){
  let triangle = document.getElementById('triangle');
  if(triangle !== null){
    console.log(this);
    console.log($(this.id + '>p'));
    $("#" + this.id + ">p").html('');
  }
  else{
    $(this).html('');
  }
  // $(this).html('');
})
