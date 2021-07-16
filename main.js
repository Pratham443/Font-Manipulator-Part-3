var leftWristx;
var rightWristx;
var difference = 50;

function preload() {

}

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(800, 125);
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("gray");

    textSize(difference);
    fill("skyblue");
    text("Pratham", 190, 275);

    document.getElementById("font_size").innerHTML = "font size  will be " + difference + "px";
}

function modelLoaded() {
    console.log("Posenet Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx) - 50;
    }
}