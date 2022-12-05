/* https://medium.com/swinginc/playing-with-midi-in-javascript-b6999f2913c3 */

var context = null;
var oscillator = null;
function getOrCreateContext() {
  if (!context) {
    context = new AudioContext();
    oscillator = context.createOscillator();
    oscillator.connect(context.destination);
  }
  return context;
  
}

        var isStarted = false;
        function playSound(frequency, type) {
          getOrCreateContext();
          oscillator.frequency.setTargetAtTime(frequency, context.currentTime, 0);
          if (!isStarted) {
            oscillator.start(0);
            isStarted = true;
          } else {
            context.resume();
          }
        }

        function stopSound() {
          context.suspend();
        }

        document.getElementById('basic').addEventListener('click', playSound.bind(null, 440, 'square'));
        document.getElementById('basic2').addEventListener('click', playSound.bind(null, 800, 'square'));
        document.getElementById('basic3').addEventListener('click', playSound.bind(null, 1000, 'square'));
        document.getElementById('stop').addEventListener('click', stopSound);

