    

    function adicionarAoCarrinho(nomeProduto) {
        alert(nomeProduto + " foi adicionado ao carrinho!");
    }

    // Adicionar evento aos botões "Adicionar ao Carrinho"
    const buttons = document.querySelectorAll(".buy-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const nomeProduto = button.closest('.product-info').querySelector('.product-name').textContent;
            adicionarAoCarrinho(nomeProduto);
        });
    });

  


