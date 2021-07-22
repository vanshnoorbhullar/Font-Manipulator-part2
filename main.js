function preload(){

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550, 500);
    canvas.position(560 , 150);
    PoseNet= ml5.poseNet( video , modelLoaded);
    PoseNet.on("pose" , gotPoses);
}
  
function draw(){
    background('rgb(0,255,0)');
}

function modelLoaded(){
    console.log("Pose Net is Initialized!")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}