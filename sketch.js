let shahrukh_img;
let capture;

function setup(){
    createCanvas(800, 500);
    shahrukh_img=loadImage('images/shahrukh.png');
    capture=createCapture(VIDEO)
    capture.hide();
}

function getRandomArbitrary(min, max){
    return Math.random() *(max-min)+min;
}

function draw(){
    // background(200);

    // point(200,200);

    // line(200,200,300,300);

    // triangle(100,200,300,400,150,450);

    // rect(500,200, 100,100);

    // // stroke(255,0,0,255);
    // // strockWeight(5);
    // fill(132,100,34,200);
    // ellipse(600,300,100,100);



    // r=getRandomArbitrary(0,255);
    // g=getRandomArbitrary(0,255);
    // b=getRandomArbitrary(0,255);

    // fill(r,g,b);
    // ellipse(mouseX, mouseY, 50,50);



    // image(shahrukh_img, mouseX, mouseY, 100, 100)


    image(capture, 0, 0, 800, 600);

}