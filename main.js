function setup(){
    video=createCapture(VIDEO);
    video.size(450,400);
    canvas=createCanvas(450,400);
    canvas.position(100,150);
    video.position(100,150);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is loaded")
}
function draw(){
    
}
function gotposes(results){
if (results.length>0){
    console.log(results);
}}