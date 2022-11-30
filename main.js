function setup() {
    canvas = createCanvas(560,500);
    canvas.position(560,80);

    video = createCapture(VIDEO);
    video.size(550,500)

    poseNet = ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    background("skyblue");
}

function ModelLoaded() {
    console.log("poseNet is initialized");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
    }
}