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

document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.querySelector('.content');

    // Itens de "Departamentos"
    const departmentItems = `
    <link rel="stylesheet" href="css/style.css">
        <div class="category">
                <img src="imagens/açougue-n.png" alt="Açougue">
                <p>Açougue</p>
                <div class="submenu">
                    <strong>Açougue</strong>
                    <ul>
                        <li><a href="#">Carnes bovinas</a></li>
                        <li><a href="#">Carnes suínas</a></li>
                        <li><a href="#">Frango</a></li>
                        <li><a href="#">Outros</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/alimentos-n.png" alt="Alimentos">
                <p>Alimentos</p>
                <div class="submenu">
                    <strong>Alimentos</strong>
                    <ul>
                        <li><a href="#">Arroz</a></li>
                        <li><a href="#">Feijão</a></li>
                        <li><a href="#">Açucar</a></li>
                        <li><a href="#">Sal</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/bazar-n.png" alt="Bazar">
                <p>Bazar</p>
                <div class="submenu">
                    <strong>Bazar</strong>
                    <ul>
                        <li><a href="#">Cozinha</a></li>
                        <li><a href="#">Churrasco</a></li>
                        <li><a href="#">Descartáveis</a></li>
                        <li><a href="#">Papelaria</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/baby-n.png" alt="Baby">
                <p>Bebês e crianças</p>
                <div class="submenu">
                    <strong>Bebês e crianças</strong>
                    <ul>
                        <li><a href="#">Fraldas</a></li>
                        <li><a href="#">Higiene</a></li>
                        <li><a href="#">Mamadeira</a></li>
                        <li><a href="#">Outros</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/bedidas-n.png" alt="Bebidas">
                <p>Bebidas</p>
                <div class="submenu">
                    <strong>Bebidas</strong>
                    <ul>
                        <li><a href="#">Água mineral</a></li>
                        <li><a href="#">Água de coco</a></li>
                        <li><a href="#">Refrigerantes</a></li>
                        <li><a href="#">Sucos</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/bebidas_alcolicas-n.png" alt="Bebidas alcoólicas">
                <p>Bebidas alcoólicas</p>
                <div class="submenu">
                    <strong>Bebidas alcoólicas</strong>
                    <ul>
                        <li><a href="#">Aguardentes e cachaça</a></li>
                        <li><a href="#">Cervejas</a></li>
                        <li><a href="#">Run e gin e saquê</a></li>
                        <li><a href="#">Whisky</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/congelado-n.png" alt="Congelado">
                <p>Congelados</p>
                <div class="submenu">
                    <strong>Congelados</strong>
                    <ul>
                        <li><a href="#">Polpas e fruta</a></li>
                        <li><a href="#">Hambúguer</a></li>
                        <li><a href="#">Sorvete</a></li>
                        <li><a href="#">Lanche</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/frios-n.png" alt="Frios">
                <p>Frios</p>
                <div class="submenu">
                    <strong>Frios</strong>
                    <ul>
                        <li><a href="#">Bacon</a></li>
                        <li><a href="#">Linguiça</a></li>
                        <li><a href="#">Presunto</a></li>
                        <li><a href="#">Salame</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/higiene-n.png" alt="Higiene e beleza">
                <p>Higiene e beleza</p>
                <div class="submenu">
                    <strong>Higiene e beleza</strong>
                    <ul>
                        <li><a href="#">Absorvente</a></li>
                        <li><a href="#">Desodorante</a></li>
                        <li><a href="#">Sabonete</a></li>
                        <li><a href="#">Shampoo e condicionadores</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/hortifruti-n.png" alt="Hortifruti">
                <p>Hortifruti</p>
                <div class="submenu">
                    <strong>hortifruti</strong>
                    <ul>
                        <li><a href="#">Frutas</a></li>
                        <li><a href="#">Ovos</a></li>
                        <li><a href="#">Folhagens</a></li>
                        <li><a href="#">Legumes e tuberculos</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/leites-e-laticionios-n.png" alt="Leites e lacticínios">
                <p>Leites e lacticínios</p>
                <div class="submenu">
                    <strong>leites e lacticínios</strong>
                    <ul>
                        <li><a href="#">Iorgute e fermentados</a></li>
                        <li><a href="#">Leite</a></li>
                        <li><a href="#">Manteiga e margarina</a></li>
                        <li><a href="#">Queijo</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/limpeza-n.png" alt="Limpeza">
                <p>Limpeza</p>
                <div class="submenu">
                    <strong>Limpeza</strong>
                    <ul>
                        <li><a href="#">Acessórios de limpeza</a></li>
                        <li><a href="#">Água sanitaria e alvejante</a></li>
                        <li><a href="#">Desinfetantes</a></li>
                        <li><a href="#">Lavanderia</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/padaria-n.png" alt="Padaria e confeitaria">
                <p>Padaria e confeitaria</p>
                <div class="submenu">
                    <strong>Padaria e confeitaria</strong>
                    <ul>
                        <li><a href="#">Biscoitos e torradas</a></li>
                        <li><a href="#">Pães</a></li>
                        <li><a href="#">Pizza</a></li>
                        <li><a href="#">Bolos e doces</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/pet-n.png" alt="Pet">
                <p>Petshop</p>
                <div class="submenu">
                    <strong>Petshop</strong>
                    <ul>
                        <li><a href="#">Alimento para cães</a></li>
                        <li><a href="#">Alimento para gatos</a></li>
                        <li><a href="#">Alimento para passaros</a></li>
                        <li><a href="#">Acessórios</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/saudaveis-n.png" alt="Saudáveis">
                <p>Saudáveis</p>
                <div class="submenu">
                    <strong>Saudáveis</strong>
                    <ul>
                        <li><a href="#">Comida fit</a></li>
                        <li><a href="#">Suplemento alimentar</a></li>
                        <li><a href="#">Farinácios</a></li>
                        <li><a href="#">Grãos e sementes</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/sazonal-n.png" alt="Sazonal">
                <p>Sazonal</p>
                <div class="submenu">
                    <strong>Sazonal</strong>
                    <ul>
                        <li><a href="#">Natal</a></li>
                        <li><a href="#">Páscoa</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/snacks-n.png" alt="Snacks">
                <p>Snacks</p>
                <div class="submenu">
                    <strong>Snacks</strong>
                    <ul>
                        <li><a href="#">Aperitivos</a></li>
                        <li><a href="#">Salgadinhos</a></li>
                        <li><a href="#">Biscoitos e bolachas</a></li>
                        <li><a href="#">Doces e sobremesas</a></li>
                    </ul>
                </div>
            </div>
    `;

    // Itens de "Ofertas"
    const offerItems = `
    <link rel="stylesheet" href="css/style.css">
        <div class="category">
                <img src="imagens/açougue-n.png" alt="Açougue">
                <p>Açougue</p>
                <div class="submenu">
                    <strong>Açougue</strong>
                    <ul>
                        <li><a href="#">Carnes bovinas</a></li>
                        <li><a href="#">Carnes suínas</a></li>
                        <li><a href="#">Frango</a></li>
                        <li><a href="#">Outros</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/alimentos-n.png" alt="Alimentos">
                <p>Alimentos</p>
                <div class="submenu">
                    <strong>Alimentos</strong>
                    <ul>
                        <li><a href="#">Arroz</a></li>
                        <li><a href="#">Feijão</a></li>
                        <li><a href="#">Açucar</a></li>
                        <li><a href="#">Sal</a></li>
                    </ul>
                </div>
            </div>

        <div class="category">
                <img src="imagens/bedidas-n.png" alt="Bebidas">
                <p>Bebidas</p>
                <div class="submenu">
                    <strong>Bebidas</strong>
                    <ul>
                        <li><a href="#">Água mineral</a></li>
                        <li><a href="#">Água de coco</a></li>
                        <li><a href="#">Refrigerantes</a></li>
                        <li><a href="#">Sucos</a></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <img src="imagens/bebidas_alcolicas-n.png" alt="Bebidas alcoólicas">
                <p>Bebidas alcoólicas</p>
                <div class="submenu">
                    <strong>Bebidas alcoólicas</strong>
                    <ul>
                        <li><a href="#">Aguardentes e cachaça</a></li>
                        <li><a href="#">Cervejas</a></li>
                        <li><a href="#">Run e gin e saquê</a></li>
                        <li><a href="#">Whisky</a></li>
                    </ul>
                </div>
            </div>

        <div class="category">
                <img src="imagens/leites-e-laticionios-n.png" alt="Leites e lacticínios">
                <p>Leites e lacticínios</p>
                <div class="submenu">
                    <strong>leites e lacticínios</strong>
                    <ul>
                        <li><a href="#">Iorgute e fermentados</a></li>
                        <li><a href="#">Leite</a></li>
                        <li><a href="#">Manteiga e margarina</a></li>
                        <li><a href="#">Queijo</a></li>
                    </ul>
                </div>
            </div>
    `;

    // Itens de "Receitas"
    const recipeItems = `
    <link rel="stylesheet" href="css/style.css">
        <div class="category">
                <img src="imagens/alimentos-n.png" alt="Alimentos">
                <p>Alimentos</p>
                <div class="submenu">
                    <strong>Alimentos</strong>
                    <ul>
                        <li><a href="#">Arroz</a></li>
                        <li><a href="#">Feijão</a></li>
                        <li><a href="#">Açucar</a></li>
                        <li><a href="#">Sal</a></li>
                    </ul>
                </div>
            </div>

        <div class="category">
                <img src="imagens/congelado-n.png" alt="Congelado">
                <p>Congelados</p>
                <div class="submenu">
                    <strong>Congelados</strong>
                    <ul>
                        <li><a href="#">Polpas e fruta</a></li>
                        <li><a href="#">Hambúguer</a></li>
                        <li><a href="#">Sorvete</a></li>
                        <li><a href="#">Lanche</a></li>
                    </ul>
                </div>
            </div>

        <div class="category">
                <img src="imagens/padaria-n.png" alt="Padaria e confeitaria">
                <p>Padaria e confeitaria</p>
                <div class="submenu">
                    <strong>Padaria e confeitaria</strong>
                    <ul>
                        <li><a href="#">Biscoitos e torradas</a></li>
                        <li><a href="#">Pães</a></li>
                        <li><a href="#">Pizza</a></li>
                        <li><a href="#">Bolos e doces</a></li>
                    </ul>
                </div>
            </div>

        <div class="category">
                <img src="imagens/saudaveis-n.png" alt="Saudáveis">
                <p>Saudáveis</p>
                <div class="submenu">
                    <strong>Saudáveis</strong>
                    <ul>
                        <li><a href="#">Comida fit</a></li>
                        <li><a href="#">Suplemento alimentar</a></li>
                        <li><a href="#">Farinácios</a></li>
                        <li><a href="#">Grãos e sementes</a></li>
                    </ul>
                </div>
            </div>
    `;

    // Itens de "Mais Vendidos"
    const bestSellersItems = `
    <link rel="stylesheet" href="css/style.css">
        <div class="category">
            <img src="imagens/açougue-n.png" alt="Açougue">
            <p>Açougue</p>
            <div class="submenu">
                <strong>Açougue</strong>
                <ul>
                    <li><a href="#">Carnes bovinas</a></li>
                    <li><a href="#">Carnes suínas</a></li>
                    <li><a href="#">Frango</a></li>
                    <li><a href="#">Outros</a></li>
                </ul>
            </div>
        </div>
        <div class="category">
            <img src="imagens/bazar-n.png" alt="Bazar">
            <p>Bazar</p>
            <div class="submenu">
                <strong>Bazar</strong>
                <ul>
                    <li><a href="#">Cozinha</a></li>
                    <li><a href="#">Churrasco</a></li>
                    <li><a href="#">Descartáveis</a></li>
                    <li><a href="#">Papelaria</a></li>
                </ul>
            </div>
        </div>
        <div class="category">
            <img src="imagens/higiene-n.png" alt="Higiene e beleza">
            <p>Higiene e beleza</p>
            <div class="submenu">
                <strong>Higiene e beleza</strong>
                <ul>
                    <li><a href="#">Absorvente</a></li>
                    <li><a href="#">Desodorante</a></li>
                    <li><a href="#">Sabonete</a></li>
                    <li><a href="#">Shampoo e condicionadores</a></li>
                </ul>
            </div>
        </div>
        <div class="category">
            <img src="imagens/saudaveis-n.png" alt="Saudáveis">
            <p>Saudáveis</p>
            <div class="submenu">
                <strong>Saudáveis</strong>
                <ul>
                    <li><a href="#">Comida fit</a></li>
                    <li><a href="#">Suplemento alimentar</a></li>
                    <li><a href="#">Farinácios</a></li>
                    <li><a href="#">Grãos e sementes</a></li>
                </ul>
            </div>
        </div>
        <div class="category">
            <img src="imagens/sazonal-n.png" alt="Sazonal">
            <p>Sazonal</p>
            <div class="submenu">
                <strong>Sazonal</strong>
                <ul>
                    <li><a href="#">Natal</a></li>
                    <li><a href="#">Páscoa</a></li>
                </ul>
            </div>
        </div>
        <div class="category">
            <img src="imagens/snacks-n.png" alt="Snacks">
            <p>Snacks</p>
            <div class="submenu">
                <strong>Snacks</strong>
                <ul>
                    <li><a href="#">Aperitivos</a></li>
                    <li><a href="#">Salgadinhos</a></li>
                    <li><a href="#">Biscoitos e bolachas</a></li>
                    <li><a href="#">Doces e sobremesas</a></li>
                </ul>
            </div>
        </div>
    `;

    // Função para atualizar o conteúdo
    function updateContent(items) {
        contentContainer.innerHTML = items;
    }

    // Adicionar eventos aos botões
    const departmentButton = document.querySelector('.navbar-categories a[data-category="departamentos"]');
    const offerButton = document.querySelector('.navbar-categories a[data-category="ofertas"]');
    const recipeButton = document.querySelector('.navbar-categories a[data-category="receitas"]');
    const bestSellersButton = document.querySelector('.navbar-categories a[data-category="mais-vendidos"]');

    if (departmentButton) {
        departmentButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateContent(departmentItems);
        });
    }

    if (offerButton) {
        offerButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateContent(offerItems);
        });
    }

    if (recipeButton) {
        recipeButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateContent(recipeItems);
        });
    }

    if (bestSellersButton) {
        bestSellersButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateContent(bestSellersItems);
        });
    }
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
