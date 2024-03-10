let shahrukh_img;
let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose, skeleton;
let actor_img;
let specs, smoke;
function setup(){
    createCanvas(800, 500);
    // shahrukh_img=loadImage('images/shahrukh.png');
    capture=createCapture(VIDEO)
    capture.hide();

    posenet=ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses)

    actor_img=loadImage('images/shahrukh.png')
    specs=loadImage('images/spects.png')
    smoke=loadImage('images/cigar.png')
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
    }
}

function modelLoaded(){
      console.log('Model has loaded');
}

function draw(){

    image(capture, 0, 0, 640, 500);

    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20)
        }
        stroke(255,255,255);
        strokeWeight(4)
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
        // image(actor_img, singlePose.nose.x-45, singlePose.nose.y-55, 100, 100)
        image(specs, singlePose.nose.x-45, singlePose.nose.y-55, 100, 100)
        image(smoke, singlePose.nose.x-45, singlePose.nose.y+45, 40, 40)
    }


}