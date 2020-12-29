canvas = document.getElementById( 'myCanvas');
ctx = canvas.getcontext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "Screenshot 2020-12-28 at 5.17.50 PM";
car1_x = 10;
car1_y = 10;

car_width=120;
car1_height = 70;
car1_image = "Screenshot 2020-12-28 at 5.51.40 PM";
car1_x = 10;
car1_y = 100;

background_image = "Screenshot 2020-12-28 at 6.00.21 PM";

function add(){
backgroundd_imgTag =new Image(); //defining a varable with a new image
backgroundd_imgTag.onload = uploadBackground; //setting a funtion, onloading this variable
backgroundd_imgTag.src = background_image; //load image

car1_imgTag = new Image(); //defining a varable with a new image
car1_imgTag.onload = uploadcar1; //setting a funtion, onloading this variable
car1_imgTag.src = car1_image; //load image


car2_imgTag = new Image(); //defining a varable with a new image
car2_imgTag.onload = uploadcar2; //setting a funtion, onloading this variable
car2_imgTag.src = car2_image; //load image
}

function uploadBackground(){
    ctx.drawImage(backgroundd_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload(){

    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function upload(){

    ctx.drawImage(car2_imgTag, car2_x, car2_y, car1_width, car2_height);
}

window.addEventListener("keyup", my_keyup);
window.addEventListener("keydown", my_keydown);
window.addEventListener("keyleft", my_keyleft);
window.addEventListener("keyright", my_keyright);

window.addEventListener("w", my_keyright);
window.addEventListener("s", my_keyleft);
window.addEventListener("a", my_keydown);
window.addEventListener("d", my_keyleft);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
car1_up();
console.log("up arrow key");
    }
    if(keyPressed =='40')
    {
car1_down();
console.log("down arrow key");
    }
    if(keyPressed =='39')
    {
car1_left();
console.log("left arrow key");
    }
    if(keyPressed =='87')
    {
car1_right();
console.log("right arrow key");
    }
    if(keyPressed =='38')
    {
car2_up();
console.log("key w");
    }
    if(keyPressed =='40')
    {
car2_down();
console.log("key s");
    }
    if(keyPressed =='39')
    {
car2_left();
console.log("key a");
    }
    if(keyPressed =='87')
    {
car2_right();
console.log(" key d");
    }
}
}