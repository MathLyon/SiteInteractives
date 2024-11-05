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
    score += 10; // Aumenta a pontuação em 10 em vez de 1
    document.getElementById('score').textContent = `Pontuação: ${score}`;
    hole.classList.remove('mole');
    
    // Chama a função para soltar confetes a cada 100 pontos
    if (score % 100 === 0) {
      celebrate();
    }
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

// Função para criar confetes
function celebrate() {
  const confettiCount = 100; // Número de confetes
  for (let i = 0; i < confettiCount; i++) {
    createConfetti();
  }
}

// Função para criar um único confete
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  document.body.appendChild(confetti);

  // Define posições aleatórias e animações
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  // Remove o confete após 1 segundo
  setTimeout(() => {
    confetti.remove();
  }, 1000);
}
