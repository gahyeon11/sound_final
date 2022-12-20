let permission = false; //허가를 위한 변수 (기본은 허가 안남)
let osc;
var wave;
let button;

//let isOn = true;
function setup() {
  createCanvas(800, 400);
  if( typeof DeviceMotionEvent.requestPermission == "function"){
    background(255, 0, 0);
    button = createButton("Click to ios sensor")
    button.mousePressed(iosAccess); 
  }else{
    background(0, 255, 0);
    text ("is not a ios",100,100);

  }
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.amp(0);
  
 
}

function iosAccess() {
  DeviceOrientationEvent.requestPermission()
.then((response) => {
if (response === "granted"){
  permission = true;
                          
}}).catch (console.error);
}

function draw() {
  if (!permission) return;
  background(220);
  fill(255,0,0);
  rect(0,0,100,250);
  fill(255,255,0);
  rect(100,0,100,250);
  fill(0,255,0);
  rect(200,0,100,250);
  fill(0,255,255);
  rect(300,0,100,250);
  fill(0,0,255);
  rect(400,0,100,250);
  fill(255,0,255);
  rect(500,0,100,250);
  fill(255,0,100);
  rect(600,0,100,250);
  fill(255,0,20);
  rect(700,0,100,250);

  

  if(mouseIsPressed){
    if(mouseX>0 && mouseX<100 ){
      wave.freq(261);
      wave.start();
      wave.amp(0.5,1);

   }else if(mouseX>101 && mouseX<200 ){
    wave.freq(293);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(mouseX>201 && mouseX<300 ){
    wave.freq(329);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(mouseX>301 && mouseX<400 ){
    wave.freq(349);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(mouseX>401 && mouseX<500 ){
    wave.freq(391);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(mouseX>501 && mouseX<600 ){
    wave.freq(440);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(mouseX>601 && mouseX<700 ){
    wave.freq(493);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(mouseX>701 && mouseX<800 ){
    wave.freq(523);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }
  
  }else{wave.amp(0, 1);}

  textSize(72); //텍스트 픽셀 크기 72
  text(rotationX, 400, 300);
  
}

///function mousePressed(){

///    if(isOn == true) isOn = false;
///    else isOn = true;
  
///}
///function toggle() {
///if (!playing) 
///{
///wave.start();
///wave.amp(0.5, 1);
///playing = true
///;
///} else
///{
///wave.amp(0, 1);
///playing = false;
///}
///}
