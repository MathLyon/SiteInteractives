let score = 0;
let activeHole;

function randomHole() {
  const holes = document.querySelectorAll('.hole');
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  if (activeHole) {
    activeHole.classList.remove('mole');
  }
  const hole = randomHole();
  hole.classList.add('mole');
  activeHole = hole;
}

function hitMole(hole) {
  if (hole.classList.contains('mole')) {
    score++;
    document.getElementById('score').textContent = `Pontuação: ${score}`;
    hole.classList.remove('mole');
  }
}

function restartGame() {
  score = 0;
  document.getElementById('score').textContent = `Pontuação: ${score}`;
  if (activeHole) {
    activeHole.classList.remove('mole');
  }
}

function goToMenu() {
  window.location.href = 'index.html';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

setInterval(showMole, 1000);
