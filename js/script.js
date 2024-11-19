    

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
    const scrollAmount = 85; // Ajuste a quantidade de rolagem conforme necessário

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


document.addEventListener("DOMContentLoaded", () => {
    const cartModal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');
    const cartCountElement = document.getElementById('cart-count');

    let cart = [];

    // Renderiza o carrinho
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const truncatedName = item.name.split(' ').slice(0, 3).join(' ');

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <span class="remove-btn" data-id="${item.id}">x</span>
                <span>${truncatedName}</span>
                <span>${item.quantity}</span>
                <span>R$ ${item.price.toFixed(2)}</span>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
        cartCountElement.textContent = cart.length;
        checkoutButton.disabled = cart.length === 0;
    }

    // Adiciona um produto ao carrinho
    function addToCart(product, quantity) {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        renderCart();
    }

    // Remove um produto do carrinho
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }

    // Alternar visibilidade do modal do carrinho
    cartButton.addEventListener('click', () => {
        cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    });

    // Adiciona eventos aos botões "COMPRAR"
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productInfo = button.closest('.product-item');
            const productName = productInfo.querySelector('.product-name').textContent;
            const productPrice = parseFloat(productInfo.querySelector('.price strong').textContent.replace('R$', ''));
            const productImage = productInfo.querySelector('img').src;
            const productQuantityInput = productInfo.querySelector('input[type="number"]');
            const quantity = parseInt(productQuantityInput.value, 10) || 1; // Pega a quantidade ou assume 1 como padrão

            const product = {
                id: productName, // Usando o nome como ID (único por produto)
                name: productName,
                price: productPrice,
                image: productImage
            };

            addToCart(product, quantity);
        });
    });

    // Eventos no modal do carrinho
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const productId = e.target.dataset.id;
            removeFromCart(productId);
        }
    });
});
