function startClassification(){
navigator.mediaDevices.getUserMedia({
audio:true
});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/W7k5lFMK4/model.json", modelLoaded);

}

function modelLoaded(){
console.log("model is loaded");
classifier.classify(gotResults);
}

function gotResults(error, results){
if(error){
console.log(error);
}

else{
console.log(results);
random_color_r= Math.floor(Math.random()*255)+1;
random_color_g= Math.floor(Math.random()*255)+1;
random_color_b= Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence * 100).toFixed(2)+"%";
document.getElementById("result_label").style.color= "rgb(" +random_color_r+","+random_color_g+","+random_color_b+")";
document.getElementById("result_confidence").style.color= "rgb(" +random_color_r+","+random_color_g+","+random_color_b+")";

img1= document.getElementById("img1");


if(results[0].label== "cat"){
img1.src="cat-cats.gif";
}

else if(results[0].label== "lion"){
    img1.src="lion-king-lion.gif";
    }

    else {
        img1.src="cat-sky.gif";
        }   

}
}