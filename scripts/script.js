function spin() {
    const elementos = document.querySelector('.roleta .elementos');
    const elementHeight = 200; // Altura de cada elemento
    const totalElements = document.querySelectorAll('.elemento-box').length;
    const spinAmount = (Math.floor(Math.random() * totalElements) + 1) * elementHeight;
    
    elementos.style.top = `-${spinAmount}px`;
}
