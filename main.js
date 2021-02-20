Canvas = document.getElementById('myCanvas');
ctx= Canvas.getContext("2d"); 

background_image="download.jpg";

car1_width= 140;
car1_height= 100;
car1_image = "car-1.png";
car1_x= 10;
car1_y=10;

car2_width= 140;
car2_height= 100;
car2_image = "car_2.png";
car2_x= 10;
car2_y=110;

function add() {

background_imgTag = new Image();
background_imgTag.onload = uploadbackground;
background_imgTag.src= background_image;




car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src= car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src= car2_image;

}

function uploadcar1(){

        ctx.drawImage( car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadcar2(){

        ctx.drawImage( car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}

function uploadbackground(){

      ctx.drawImage( background_imgTag, 0, 0, Canvas.width , Canvas.height);

}

window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{


keyPressed = e.keyCode;

console.log(keyPressed);
   if (keyPressed == '38')
{
   up();
   console.log("up");
}

if(keyPressed = '40')
 {
    down();
    console.log("down");
 }

if(keyPressed == '37')
{
     Left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
if (keyPressed == '87')
{
   up2();
   console.log("up");
}

if(keyPressed == '83')
 {  alert("2")
    down2();
    console.log("down");
 }

if(keyPressed == '65')
{
     Left2();
    console.log("left");
}
if(keyPressed == '68')
{
    right2();
    console.log("right");


}



}


function up()
{
if(car1_y >= 0);
{
   car1_y= car1_y, - 10;
console.log("upressed",car1_y,car1_x);
uploadcar1();
}
}

function down()
{
if(car1_y <= 800);
{
car1_y= car1_y + 100;
console.log("downpressed",car1_y,car1_x);
uploadcar1();
}
}

function Left()
{
if(car1_x >= 0);
{
car1_x= car1_x - 10;
console.log("leftpressed",car1_y,car1_x);
uploadcar1();
}
}

function right()
{
if(car1_x <= 800);
{
car1_x= car1_x + 10;
console.log("rightpressed",car1_y,car1_x);
uploadcar1();
}
}

function down2()
{
if(car2_y <= 800);
{
car2_y= car2_y + 100;
console.log("downpressed2",car2_y,car2_x);
uploadcar2();
}
}