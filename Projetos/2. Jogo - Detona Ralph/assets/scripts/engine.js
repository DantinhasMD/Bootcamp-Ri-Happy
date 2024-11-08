const state = {
    view: { //alterar elementos visuais
      squares: document.querySelectorAll(".square"),
      enemy: document.querySelector(".enemy"),
      timeLeft: document.querySelector("#time-left"),
      score: document.querySelector("#score"),
      life: document.querySelector("#life")
    },
    values: { //definindo VALORES
      gameVelocity: 700,  
      hitPosition: 0,
      result: 0,
      currentTime: 60,
      misses: 0,
    },
    actions: {
      timerId: setInterval(randomSquare, 700), //executa a função e faz ele trocar de lugar
      countDownTimerId: setInterval(countDown, 1000), //'' e reduz o tempo em 1s
    },
};
  
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime; 
  
    if (state.values.currentTime <= 0) { // Quando o tempo acabar
      endGame("Game Over! O seu resultado foi: " + state.values.result);
    }
}
  
function playSound(audioName) {
    let audio = new Audio(`./assets/audios/${audioName}.m4a`);
    audio.volume = 0.1;
    audio.play();
}
  
function randomSquare() { //para selecionar quadrados ao Ralph
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy"); //remove a class = "... enemy"
});
  
    let randomNumber = Math.floor(Math.random() * 9); //escolher um n° aleatório de 1 a 9
    let randomSquare = state.view.squares[randomNumber]; //guardo o número
    randomSquare.classList.add("enemy"); //adiciono o inimigo
    state.values.hitPosition = randomSquare.id;
}

function checkMisses() {
    if (state.values.misses >= 3) { 
        endGame("Game Over! Você errou 3 vezes.");
    } else {
        state.view.life.textContent = 3 - state.values.misses; // Atualiza a exibição das vidas
    }
}
  
function addListenerHitBox() { //
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => { //clicado 
        if (square.id === state.values.hitPosition) {
          state.values.result++;
          state.view.score.textContent = state.values.result;
          state.values.hitPosition = null;
          playSound("hit");
        } else {
            state.values.misses++; 
            playSound("miss"); 
            checkMisses(); // Verifica se o jogador já errou 3 vezes
        }
      });
    });
}

function endGame(message) {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    alert(message);
}
  
function main() {
    addListenerHitBox();
}
  
main();