x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  loadImage("apple.png");
  //I am not sure if this is correct//
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    
    to_number = Number(content);
    if(Number.isInteger(to_number)){

      document.getElementById("status").innerHTML = "started drawing apple";
    }
    else{
      document.getElementById("status").innerHTML = "the speech has not recognised a number";
    }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 canvas = createCanvas(screen_width,screen_height-150);
 canvas.position(0,110);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
