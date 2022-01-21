var drawn_sketch="";
var timer_counter=0;
  var score=0;
  var answer_holder="";
  var timer_check="";
  var sketch="";
function setup() {
  canvas = createCanvas(280, 280);
  canvas.position(450, 200);
  background("white");
}
  function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
  }
  
  function clear_canvas(){
  background=("white")
  }
  function update_canvas(){
clear_canvas();
random_no=Math.floor((Math.random()*array_1.length));
console.log(random_no);
sketch=array_1[random_no];
console.log(array_1[random_no]);
document.getElementById("sketch_name").innerHTML=array_1[random_no];
  }
  function check_sketch(){}
function draw(){
check_sketch();
if(drawn_sketch==sketch){
answer_holder="set";
score++;
document.getElementById("score").innerHTML="score: "+score;
}
}
function check_sketch(){
  if(drawn_sketch==sketch){
   timer_counter++;
   score++;
  console.log(timer_counter);
  }
  if(timer_counter<400){
   timer_counter=0;
   timer_check="completed";
  }
}
if((timer_check=="completed")||(answer_holder==set)){
  timer_check="";
  answer_holder="" 
  update_canvas();
}

  function gotResults(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML = "label: " + results[0].label;
    document.getElementById("confidence").innerHTML = "confidence: " + Math.round(results[0].confidence * 100) + " %";
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }
var array_1=['pen','paper','skull','camera','book','bottle'];