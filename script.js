document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showNextImage() {
        // Remove a classe 'active' de todas as imagens
        images.forEach(img => img.classList.remove('active'));

        // Calcula o próximo índice
        currentIndex = (currentIndex + 1) % totalImages;

        // Adiciona a classe 'active' à imagem atual
        images[currentIndex].classList.add('active');

        // Move o carrossel para a imagem atual
        const offset = -currentIndex * 100; // Move a largura de uma imagem para a esquerda
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    // Inicializa o carrossel
    showNextImage(); // Mostra a primeira imagem
    setInterval(showNextImage, 3000); // Alterna as imagens a cada 3 segundos
});

// Mostra ou esconde o botão ao rolar a página
window.onscroll = function() {
    const btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Função para rolar a página de volta ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a rolagem suave
    });
}

