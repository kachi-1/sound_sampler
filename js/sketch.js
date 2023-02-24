// let godzilla = new Tone.Player('sounds/godzilla.mp3');
// let drums = new Tone.Player('sounds/drums.mp3');
// let dandelion = new Tone.Player('sounds/dandelion.mp3');
// let kong = new Tone.Player('sounds/kong.flac');
// let cthulhu = new Tone.Player('sounds/cthulhu.wav');
// let piano = new Tone.Player('sounds/piano.wav');
const sounds = new Tone.Players({
  'godzilla': 'sounds/godzilla.mp3',
  'drums': 'sounds/drums.mp3',
  'dandelion': 'sounds/dandelion.mp3',
  'kong': 'sounds/kong.flac',
  'cthulhu': 'sounds/cthulhu.wav',
  'piano': 'sounds/piano.wav',
})
let pbRate = 1;
const Titles = ['godzilla', 'drums', 'dandelion', 'kong', 'cthulhu', 'piano'];

let button, button2, button4, button5, button6, button7, button8;

const delay = new Tone.FeedbackDelay("8n",0.5);
let dSlider;

function setup() {
  createCanvas(400, 400);

  sounds.connect(delay);
  delay.toDestination();

  button = createButton(Titles[0]);
  button.position(0, 0);
  button.mousePressed(()=>playSound(Titles[0]));

  button2 = createButton(Titles[1]);
  button2.position(100, 0);
  button2.mousePressed(()=>playSound(Titles[1]));

  button3 = createButton(Titles[2]);
  button3.position(200, 0);
  button3.mousePressed(()=>playSound(Titles[2]));

  button4 = createButton(Titles[3]);
  button4.position(300, 0);
  button4.mousePressed(()=>playSound(Titles[3]));
  
  button5 = createButton(Titles[4]);
  button5.position(0, 50);
  button5.mousePressed(()=>playSound(Titles[4]));

  button6 = createButton(Titles[5]);
  button6.position(100, 50);
  button6.mousePressed(()=>playSound(Titles[5]));

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value=dSlider.value();
  })

}

function draw() {
  background(220);
  
}

function playSound(soundName) {
  if (soundName === 'godzilla') {
    sounds.player('godzilla').start();
  }else if (soundName === 'drums') {
    sounds.player('drums').start();
  }else if (soundName === 'dandelion') {
    sounds.player('dandelion').start();
  }else if (soundName === 'kong') {
    sounds.player('kong').start();
  }else if (soundName === 'cthulhu') {
    sounds.player('cthulhu').start();
  }else if (soundName === 'piano') {
    sounds.player('piano').start();
  }
}



