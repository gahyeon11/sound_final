let permission = false; //허가를 위한 변수 (기본은 허가 안남)
let osc;
var wave;
var wave2;
var wave3;

let button;
let freq;
var waves = [];

//let isOn = true;
function setup() {
  createCanvas(800, 400);
//   if( typeof DeviceMotionEvent.requestPermission == "function"){
//     background(255, 0, 0);
//     button = createButton("Click to ios sensor")
//     button.mousePressed(iosAccess); 
//   }else{
//     background(0, 255, 0);
//     text ("is not a ios",100,100);

//   }
  
  // for (var i = 0; i < touches.length; i++){
  //   waves[i] = new p5.Oscillator();
  //   wave[i].setType('sine');
  //   wave[i].amp(0);
  // }
  wave = new p5.Oscillator();
  wave2 = new p5.Oscillator();
  wave3 = new p5.Oscillator();
  
  
  wave.setType('sine');
  wave2.setType('sine');
  wave3.setType('sine');
  
  wave.amp(0);
  wave2.amp(0);
  wave3.amp(0);

  
  
 
}



function draw() {
//  // if (!permission) return;
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

}
function touchStarted() {
  getAudioContext().resume(); //강제로 사운드 허용하는 문법(구글 및 애플 뚫기)
  freq = 0;
for (var i = 0; i < touches.length; i++){ 
  freq = 0;
  if(touches[i].x>0 && touches[i].x<100 ){
     freq = 261;
     if(freq != 261){
       wave2.freq(261);
    
      wave2.start();
     
      wave2.amp(0.5, 1);
     }else wave.freq(261);
    
      wave.start();
     
      wave.amp(0.5, 1);
   
   }else wave.amp(0,1);
  if(touches[i].x>101 && touches[i].x<200 ){
       freq = 293;
     if(freq != 293){
       wave2.freq(293);
    
      wave2.start();
     
      wave2.amp(0.5, 1);
     }else wave.freq(293);
    
      wave.start();
     
      wave.amp(0.5, 1);
   
   }else wave.amp(0,1);
  if(touches[i].x>201 && touches[i].x<300 ){
    wave.freq(329);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(touches[i].x>301 && touches[i].x<400 ){
    wave.freq(349);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(touches[i].x>401 && touches[i].x<500 ){
    wave.freq(391);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(touches[i].x>501 && touches[i].x<600 ){
    wave.freq(440);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(touches[i].x>601 && touches[i].x<700 ){
    wave.freq(493);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }else if(touches[i].x>701 && touches[i].x<800 ){
    wave.freq(523);
    
      wave.start();
     
      wave.amp(0.5, 1);
   }//else wave.amp(0, 1);
}
  
}
function touchEnded(){
  if(touchStarted()){
    
  }
  
}