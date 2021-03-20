canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_image = ["racing.jpg"]
random_number = Math.floor(Math.random()*4)



carimg="car1.png";
carheight=100;
carwidth=100;
carx=10;
cary=10;

function add()
{
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = backgroundimg;  2

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = carimg;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0 , 0, canvas.width , canvas.height);
}


function uploadcar() {
  ctx.drawImage(car_imgTag, carx , cary, carwidth , carheight);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
  keyPressed = e.keyCode;
  console.log(keyPressed);

  if (keyPressed == '38') //arrow up
  {
      up();
      console.log("up");   
  }
  if (keyPressed == '40') //arrow down
  { 
      down();
      console.log("down");
  }
  if (keyPressed == '37') //arrow left
  {
      left();
      console.log("left");
  }
  if (keyPressed == '39') //arrow right
  {
      right();
      console.log("right");
  }
}
function up()// up
{
if(cary >=0)
{
cary -=10;
console.log("When up arrow is pressed =" + carx + "-" +cary)
uploadBackground();
uploadcar();
}}




function down()// down
{
if(cary <=500)
{
cary +=10;
console.log("When  down is pressed x =" + carx + "  | y = " +cary)
uploadBackground();
uploadcar();
}}




function  left()// left
{
if(carx >=0)
{
carx -=10;
console.log("When  left is pressed =" + carx + "-" +cary)
uploadBackground();
uploadcar();
}}




function right()// right
{
if(carx <=700)
{
carx +=10;
console.log("When up arrow is pressed x =" + carx + "  | y = " +cary)
uploadBackground();
uploadrover();
}}