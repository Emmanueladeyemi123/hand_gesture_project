
Webcam.set({
    height: 300,
    width: 400,
    image_format:"png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");


function cap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="captured_image">'
    });
}

console.log("ml5 version is:", ml5.version);
classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0MGq-9ya5/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model has loaded");
} 

function check() {
    img = document.getElementById("captured_image");
    classifer.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        document.getElementById("result").innerHTML = results[0].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
    }
}