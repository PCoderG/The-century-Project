var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult = function(event) { console.log(event); var Content = event.results[0][0].transcript;
    console.log(Content);

    if (Content == "selfie")
    {
        console.log("Selfie---");
        speak()
    }
;
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

image_id = 0

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
timeout()

}


function take_snap_one() {
    Webcam.snap(function(data_uri) {
        document.getElementById("resultone").src =  data_uri;
    });
}
function take_snap_two() {
    Webcam.snap(function(data_uri) {
        document.getElementById("resulttwo").src =  data_uri;
    });
}
function take_snap_three() {
    Webcam.snap(function(data_uri) {
        document.getElementById("resultthree").src =  data_uri;
    });
}
function timeout() {
    setTimeout(function () {

        take_snap_one();
    
    
        
    },5000)
    setTimeout(function () {

        take_snap_two();
    
    
        
    },5000)
    setTimeout(function () {


    take_snap_three();
    
    
        
    },5000)
            
}