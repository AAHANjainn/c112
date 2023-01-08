//https://teachablemachine.withgoogle.com/models/_pwlu0VKl/

Webcam.set({
    width:300,
    height:300,
    image_format : "png",
    png_quality : 100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>";
    });
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/_pwlu0VKl/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    else{
        cosnole.log(results);
        document.getElementById("emoji").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "thumbs up")
        {
            document.getElementById("emoji_name").innerHTML = "thumbs up";

        }
        if(results[0].label == "ok")
        {
            document.getElementById("emoji_name").innerHTML = "ok";

        }
        if(results[0].label == "peace")
        {
            document.getElementById("emoji_name").innerHTML = "peace";

        }
        
    }
}