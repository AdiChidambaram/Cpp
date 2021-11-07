function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    pn = ml5.poseNet(video, modelLoaded);
}

function draw() {

    image(video, 0, 0, 400, 400);
}

function modelLoaded() {
	console.log("Model Loaded");
}