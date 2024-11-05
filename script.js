// Troca entre modo claro e escuro
document.getElementById('colorToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Controle de volume
const volumeControl = document.getElementById('volumeControl');
volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    console.log(`Volume: ${volume}`);
    // Animação de volume - expanda conforme necessário
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
