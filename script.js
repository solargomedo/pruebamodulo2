const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
];
// variables globales
let time = 10;
let score = 0;
let palabraAleatoria;

let seguir_jugando = true

// etiquetas HTML
const h1 = document.querySelector("#randomWord");
const input = document.querySelector('#text');
const timeSpan = document.querySelector('#timeSpan')
const scoreSpan = document.querySelector('#score')
const end_game_container = document.querySelector("#end-game-container")

// funciones
function randomWords() {
  const indice = Math.floor(Math.random() * words.length);
  return words[indice];
}

function addToDOM() {
  palabraAleatoria = randomWords();
  h1.textContent = palabraAleatoria;
  timeSpan.textContent = time;
  scoreSpan.textContent = score;
}

addToDOM()
function updateScore() {
  score++
}



// inicio del juego

input.addEventListener('keyup', function (event) {
  if (seguir_jugando) { // condicion para seguir jugando
    if (event.keyCode == 13) {
      if (input.value == palabraAleatoria) {
        updateScore()
        time += 3;
        //tiempo aumente 3 segundos 
      }
      input.value = ""
      addToDOM()
    }
  }
});

// manipulación del tiempo
const timeInterval = setInterval(function () {
  //score++
  time--
  timeSpan.innerHTML = `${time}seg`
  if (time == 0) {
    clearInterval(timeInterval)
    gameOver()
  }
}, 1000)

//funcion gameOver se termina el juego
function gameOver() {
  seguir_jugando = false
  end_game_container.innerHTML = `
    <h1>Haz perdido,inténtalo otra vez</h1>
    
      <p>puntaje final: ${score}</p>
<button class= "btnReinicio" onclick="location.reload()">Volver a empezar</button>`

};















