    

document.addEventListener("DOMContentLoaded", () => {
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

    const scrollContainer = document.getElementById('scrollContainer');
    const scrollAmount = 200; // Ajuste para o quanto deve rolar cada vez

    if (scrollContainer) {
        function scrollLeft() {
            scrollContainer.scrollLeft -= scrollAmount;
        }

        function scrollRight() {
            scrollContainer.scrollLeft += scrollAmount;
        }

        // Atribua os eventos de rolagem aos botões se necessário
        document.querySelector(".scroll-btn.left").addEventListener("click", scrollLeft);
        document.querySelector(".scroll-btn.right").addEventListener("click", scrollRight);

        if (rightButton) {
            rightButton.addEventListener("click", scrollRight);
        } else {
            console.warn("Botão direito não encontrado.");
        }
    } else {
        console.warn("Elemento 'scrollContainer' não encontrado.");
    }
});


