right_wrist_x=0;
left_wrist_x=0;
difference=0;
nose_x=0;
nose_y=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(450,400);
    canvas=createCanvas(450,400);
    canvas.position(800,150);
    video.position(100,150);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is loaded")
}
function draw(){
    background("white")
    textSize(difference);
    text("text",nose_x,nose_y);
}
function gotposes(results){
if (results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    right_wrist_x=results[0].pose.rightWrist.x;
    left_wrist_x=results[0].pose.leftWrist.x;
    difference=left_wrist_x-right_wrist_x;
}}