function spinRoulette() {
    const roulette = document.querySelector('.roulette');
    roulette.style.animation = 'none';
    void roulette.offsetWidth; // Trigger reflow para reiniciar a animação
    roulette.style.animation = 'spin 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
}
