const envelopeContainer = document.getElementById('envelopeContainer');
const topEnvelopeText = document.getElementById('topEnvelopeText');
const letterCard = document.getElementById('letterCard');
const btnCloseLetter = document.getElementById('btnCloseLetter');
const btnGift = document.getElementById('btnGift');
const giftModal = document.getElementById('giftModal');
const closeModal = document.getElementById('closeModal');

const cakeBox = document.getElementById('cakeBox');
const cakeInstruction = document.getElementById('cakeInstruction');
const cakeMessage = document.getElementById('cakeMessage');
const candles = document.querySelectorAll('.candle');

let candlesBlown = false;

// Función para lanzar confeti
function launchConfetti() {
    confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.6 }
    });
}

// Interacción del pastel y los deseos
// Interacción del pastel y los deseos
cakeBox.addEventListener('click', () => {
    if (candlesBlown) return;

    cakeInstruction.textContent = '🌠 ¡Pide un deseo antes de spawnear tu nuevo año...';
    cakeMessage.textContent = 'Soplando velas... 🌬️';

    setTimeout(() => {
        candles.forEach(candle => candle.classList.add('extinguished'));
        candlesBlown = true;
        
        cakeInstruction.textContent = '✨ ¡DESEO CONCEDIDO! ✨';
        cakeMessage.textContent = '¡Nivel de felicidad aumentado al 100%! 💎🎮';
        
        launchConfetti();
    }, 2500); // Mantiene el tiempo que te gustó
});

// Al hacer clic en el sobre
envelopeContainer.addEventListener('click', () => {
    topEnvelopeText.classList.add('hide');
    envelopeContainer.classList.add('hide');
    letterCard.classList.add('show');
    setTimeout(launchConfetti, 400);
});

// Volver a guardar en el sobre
btnCloseLetter.addEventListener('click', () => {
    letterCard.classList.remove('show');
    envelopeContainer.classList.remove('hide');
    topEnvelopeText.classList.remove('hide');
});

// Abrir modal de regalo
btnGift.addEventListener('click', () => {
    giftModal.classList.add('active');
    launchConfetti();
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    giftModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === giftModal) {
        giftModal.classList.remove('active');
    }
});