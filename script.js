// Troca entre modo claro e escuro
document.getElementById('colorToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Controle de volume
const volumeControl = document.getElementById('volumeControl');
volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    console.log(`Volume: ${volume}`);
    // Expanda com lógica de volume real
});

// Controle de brilho
const brightnessControl = document.getElementById('brightnessControl');
brightnessControl.addEventListener('input', () => {
    const brightness = brightnessControl.value;
    document.body.style.filter = `brightness(${brightness}%)`;
});

// Animação de rotação do botão
const rotateButton = document.getElementById('rotateButton');
rotateButton.addEventListener('click', () => {
    rotateButton.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        rotateButton.style.transform = 'rotate(0deg)';
    }, 600);
});

// Botão que foge do mouse
const runAwayButton = document.getElementById('runAwayButton');
runAwayButton.addEventListener('mouseover', () => {
    const containerWidth = document.querySelector('.container').offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight;

    // Gera posições aleatórias dentro dos limites do container
    const randomX = Math.random() * (containerWidth - runAwayButton.offsetWidth);
    const randomY = Math.random() * (containerHeight - runAwayButton.offsetHeight);

    runAwayButton.style.position = 'absolute';
    runAwayButton.style.left = `${randomX}px`;
    runAwayButton.style.top = `${randomY}px`;
});