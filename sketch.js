let permission = false; 
let osc;
var wave = [];
let button;



//let isOn = true;
function setup() {
  createCanvas(500, 500);
  if( typeof DeviceMotionEvent.requestPermission == "function"){
    background(255,255,153);
    button = createButton("Click to ios sensor")
    button.mousePressed(iosAccess); 
  }else{
    background(153,153,255);
    textSize(72);
    text ("is not a ios",70,200);

  }
  
  for (var i = 0; i < 11; i++){
    wave[i] = new p5.Oscillator();
    wave[i].setType('sine');
    wave[i].amp(0);
  }

  
 
}

function iosAccess() {  //버튼 누르면 동작하는 함수(그냥 따라하기)
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response === "granted") { //granted를 받으면
        permission = true; //허가가 true (허가남)
      }
    })
    .catch(console.error);
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
  fill(255,102,102);
  rect(0,250,100,250);
  fill(255,255,153);
  rect(100,250,100,250);
  fill(153,255,153);
  rect(200,250,100,250);
  fill(153,153,255);
  rect(300,250,100,250);
  fill(051,051,153);
  rect(400,250,100,250);

  // textSize(72);
  // text(rotationX/100, 100, 100);
}
function touchStarted() {
  getAudioContext().resume();

for (var i = 0; i < touches.length; i++){ 

  if(touches[i].y>0 && touches[i].y<250 )
  {if(touches[i].x>0 && touches[i].x<100 ){
      wave[0].freq(261);
      wave[0].start();
      wave[0].amp(rotationX/100, 1);
      wave[0].amp(0,1);
  }
  if(touches[i].x>101 && touches[i].x<200 ){
      wave[1].freq(293);
      wave[1].start();
     wave[1].amp(rotationX/100, 1);
      wave[1].amp(0,1);
   }    
  if(touches[i].x>201 && touches[i].x<300 ){
      wave[2].freq(329);
      wave[2].start();
      wave[2].amp(rotationX/100, 1);
      wave[2].amp(0,1);

   }else if(touches[i].x>301 && touches[i].x<400 ){
      wave[3].freq(349);
      wave[3].start();
      wave[3].amp(rotationX/100, 1);
      wave[3].amp(0,1);
   }else if(touches[i].x>401 && touches[i].x<500 ){
      wave[4].freq(391);
      wave[4].start();
      wave[4].amp(rotationX/100, 1);
      wave[4].amp(0,1);
   }
  }else
  {if(touches[i].x>0 && touches[i].x<100  ){
      wave[5].freq(523);
      wave[5].start();
      wave[5].amp(rotationX/100, 1);
      wave[5].amp(0,1);
   }else if(touches[i].x>101 && touches[i].x<200  ){
      wave[6].freq(587);
      wave[6].start();
      wave[6].amp(rotationX/100, 1);
      wave[6].amp(0,1);
   } if(touches[i].x>201 && touches[i].x<300 ){
      wave[7].freq(659);
      wave[7].start();
      wave[7].amp(rotationX/100, 1);
      wave[7].amp(0,1);

   }else if(touches[i].x>301 && touches[i].x<400 ){
      wave[8].freq(698);
      wave[8].start();
      wave[8].amp(rotationX/100, 1);
      wave[8].amp(0,1);
   }else if(touches[i].x>401 && touches[i].x<500 ){
      wave[9].freq(783);
      wave[9].start();
      wave[9].amp(rotationX/100, 1);
      wave[9].amp(0,1);
   }
  
  
  }
 
}
  
}
