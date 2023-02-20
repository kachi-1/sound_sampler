// let godzilla = new Tone.Player('sounds/godzilla.mp3');
// let drums = new Tone.Player('sounds/drums.mp3');
// let dandelion = new Tone.Player('sounds/dandelion.mp3');
// let kong = new Tone.Player('sounds/kong.flac');
// let cthulhu = new Tone.Player('sounds/cthulhu.wav');
// let piano = new Tone.Player('sounds/piano.wav');
let sounds = new Tone.Players({
  'godzilla': 'sounds/godzilla.mp3',
  'drums': 'sounds/drums.mp3',
  'dandelion': 'sounds/dandelion.mp3',
  'kong': 'sounds/kong.flac',
  'cthulhu': 'sounds/cthulhu.wav',
  'piano': 'sounds/piano.wav',
})
let sound;
let titles = ['godzilla', 'drums', 'dandelion', 'kong', 'cthulhu', 'piano'];

function setup() {
  createCanvas(400, 400);

  sounds.toDestination();

  let button = createButton(titles[0]);
  button.position(0, 0);
  button.mousePressed(()=>playSound(titles[0]));

  let button2 = createButton(titles[1]);
  button2.position(100, 0);
  button2.mousePressed(()=>playSound(titles[1]));

  let button3 = createButton(titles[2]);
  button3.position(200, 0);
  button3.mousePressed(()=>playSound(titles[2]));

  let button4 = createButton(titles[3]);
  button4.position(300, 0);
  button4.mousePressed(()=>playSound(titles[3]));
  
  let button5 = createButton(titles[4]);
  button5.position(0, 50);
  button5.mousePressed(()=>playSound(titles[4]));

  let button6 = createButton(titles[5]);
  button6.position(100, 50);
  button6.mousePressed(()=>playSound(titles[5]));
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
function keyPressed() {
  for (let i=0; i<sounds.length; i++) {
    sounds[i].start();
  }
}