function preload() {
    loadImage("chair.jpg");
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult() {
        if(error) {
            console.log(error);
        }
        else {
            console.log(results);
        }
}
function draw() {
    image(video,0,0,380,480);
    if(status != "") {
        for(i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#ffa500");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" ,objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ffa500");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
