document.addEventListener("DOMContentLoaded", () => {
    // Função de adicionar ao carrinho
    function adicionarAoCarrinho(nomeProduto) {
        Swal.fire({
            icon: 'success',
            title: 'Adicionado ao carrinho!',
            text: `${nomeProduto} foi adicionado ao carrinho.`,
            confirmButtonColor: '#c9212e'
        });
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
    
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
    
            cartItem.innerHTML = `
                <span class="item-name">${item.name}</span>
                <div class="quantity-controls">
                    <button class="decrease-btn" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-btn" data-id="${item.id}">+</button>
                </div>
                <span class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</span>
                <span class="remove-btn" data-id="${item.id}">x</span>
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

    // Aumenta a quantidade de um item
    function increaseQuantity(productId) {
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity++;
            renderCart();
        }
    }

    // Diminui a quantidade de um item
    function decreaseQuantity(productId) {
        const product = cart.find(item => item.id === productId);
        if (product && product.quantity > 1) {
            product.quantity--;
            renderCart();
        }
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
            const quantity = parseInt(productInfo.querySelector('input[type="number"]').value, 10) || 1;

            const product = {
                id: productName,
                name: productName,
                price: productPrice
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

        if (e.target.classList.contains('increase-btn')) {
            const productId = e.target.dataset.id;
            increaseQuantity(productId);
        }

        if (e.target.classList.contains('decrease-btn')) {
            const productId = e.target.dataset.id;
            decreaseQuantity(productId);
        }
    });

    // Função para armazenar o carrinho e redirecionar para finalizar compra
    checkoutButton.addEventListener('click', () => {
        // Salva o carrinho no localStorage para ser acessado na página de finalização
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redireciona para a página de finalização de compra
        window.location.href = 'finalizarcompra.php';
    });
});

function searchProduct() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        window.location.href = `pesquisaexemplo.php?query=${encodeURIComponent(searchInput)}`;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Busca vazia',
            text: 'Por favor, insira um termo de busca.',
            confirmButtonColor: '#c9212e'
        });
    }
}
