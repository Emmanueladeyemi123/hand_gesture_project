https://teachablemachine.withgoogle.com/models/0MGq-9ya5/


Webcam.set({
    height: 300,
    width: 400,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");


function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="captured_image">'
    });
}

console.log("ml5 version is:", ml5.version);
classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0MGq-9ya5/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model has loaded");
}