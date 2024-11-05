document.getElementById('colorToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const volumeControl = document.getElementById('volumeControl');
volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    console.log(`Volume: ${volume}`);
    // Simula uma animação de volume (pode adicionar sons)
});
