    

document.addEventListener("DOMContentLoaded", () => {
    // Função de adicionar ao carrinho
    function adicionarAoCarrinho(nomeProduto) {
        alert(nomeProduto + " foi adicionado ao carrinho!");
    }

    // Adicionar evento aos botões "Adicionar ao Carrinho"
    const buttons = document.querySelectorAll(".buy-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productInfo = button.closest('.product-info');
            const productNameElement = productInfo ? productInfo.querySelector('.product-name') : null;

            if (productNameElement) {
                const nomeProduto = productNameElement.textContent;
                adicionarAoCarrinho(nomeProduto);
            } else {
                console.warn("Elemento 'product-name' não encontrado.");
            }
        });
    });

    // Configuração de rolagem para a seção de destaques de categoria
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollAmount = 200; // Ajuste a quantidade de rolagem conforme necessário

    if (scrollContainer) {
        // Função para rolar para a esquerda
        function scrollLeft() {
            scrollContainer.scrollLeft -= scrollAmount;
        }

        // Função para rolar para a direita
        function scrollRight() {
            scrollContainer.scrollLeft += scrollAmount;
        }

        // Atribuir eventos de clique nos botões de rolagem
        const leftButton = document.querySelector(".scroll-btn.left");
        const rightButton = document.querySelector(".scroll-btn.right");

        if (leftButton) leftButton.addEventListener("click", scrollLeft);
        if (rightButton) rightButton.addEventListener("click", scrollRight);
    } else {
        console.warn("Elemento 'scrollContainer' não encontrado.");
    }

    // Configuração do carrossel de imagens
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        function moveToNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            const amountToMove = -slideWidth * currentIndex;
            track.style.transform = `translateX(${amountToMove}px)`;
        }

        setInterval(moveToNextSlide, 4000);
    }
});