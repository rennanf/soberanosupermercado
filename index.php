<?php
session_start(); 
if (isset($_SESSION['usuario'])) {
    // echo 'Bem-vindo, ' . $_SESSION['usuario'];
} else {
    // echo 'Você não está logado';
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supermercado Soberano - Loja Online</title>
    <link rel="icon" href="imagens/favico.ico"/>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>
<body>

    <div class="top-bar">
        <a href="#">Institucional</a>
        <a href="#">Nossas Lojas</a>
        <a href="#">Blog</a>
        <a href="#">Atendimento</a>
        <a href="#">Trabalhe com a Gente</a>
    </div>

    <header class="main-header">
        <div class="header-logo">
            <a href="#">
                <img src="imagens/photo_2023-07-06_20-47-18.jpg" alt="Supermercado Soberano" />
            </a>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Buscar um ou mais produtos (ex.: arroz, feijão...)" />
            <button>Buscar</button>
        </div>
        <div class="header-buttons">
        <?php if (isset($_SESSION['usuario'])): ?>
        
            <span class="user-name"><?php echo $_SESSION['usuario']; ?></span>
            <a href="logout.php" class="button">Logout</a>
        <?php else: ?>
            
            <a href="loginform.php" class="button login">
                <span class="material-icons">login</span> Entrar
            </a>
            <a href="cadastroform.php" class="button register">
                <span class="material-icons">person_add</span> Criar uma conta
            </a>
        <?php endif; ?>
    </div>


        
        
    </header>
    <hr class="stripe">
    <nav class="navbar-categories">
        <ul>
            <li><a href="#">Departamentos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Receitas</a></li>
            <li><a href="#">Mais Vendidos</a></li>
        </ul>
    </nav>

    <section class="category-highlights">
        <button class="scroll-btn left" onclick="scrollLeft()">
            <i class="bi bi-chevron-left"></i>
        </button>
        <div class="content" id="scrollContainer">
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
            <!-- Mais categorias aqui... -->
        </div>
        <button class="scroll-btn right" onclick="scrollRight()">
            <i class="bi bi-chevron-right"></i>
        </button>
    </section>

    <section class="main-banner">
        <div class="carousel-container">
            <div class="carousel-track">
                <div class="carousel-slide"><img src="imagens/banner.jpg" alt="Promoção 1"></div>
                <div class="carousel-slide"><img src="imagens/banner.png" alt="Promoção 2"></div>
                <div class="carousel-slide"><img src="imagens/banner3.jpg" alt="Promoção 3"></div>
            </div>
        </div>
    </section>

    <section class="product-listing">
        <div class="container">
            <div class="product-item">
                <img src="imagens/banana.jpg" alt="Produto 1">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 6,79 un.</p>
                    <p class="price">Por apenas <strong>R$ 4,69 un.</strong></p>
                    <p class="product-name">Banana Prata 700g</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>
            <!-- Mais produtos aqui... -->
            <div class="product-item">
                <img src="imagens/leite.jpg" alt="Produto 2">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 8,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 6,69 un.</strong></p>
                    <p class="product-name">Leite Betânia Longa Vida Integral </p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/pizza.png" alt="Produto 3">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 17,49 un.</p>
                    <p class="price">Por apenas <strong>R$ 15,89 un.</strong></p>
                    <p class="product-name">Pizza frango catupiry Sadia 460g</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/requeijao.png" alt="Produto 4">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 8,89 un.</p>
                    <p class="price">Por apenas <strong>R$ 7,99 un.</strong></p>
                    <p class="product-name">Requeijão Vigor Cremoso Light 200g</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/acucar.png" alt="Produto 5">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 4,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 3,99 un.</strong></p>
                    <p class="product-name">Açucar Triturado Dumel 1kg</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/chocolate-em-pó.png" alt="Produto 6">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 15,79 un.</p>
                    <p class="price">Por apenas <strong>R$ 13,99 un.</strong></p>
                    <p class="product-name">Achocolatado em Pó Instantâneo Chocolatto 3 Corações</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/asa.png" alt="Produto 7">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 25,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 18,89 un.</strong></p>
                    <p class="product-name">Asa De Frango Congelada Orgânico Korin 700g</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/frango-congelado.png" alt="Produto 8">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 18,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 17,99 un.</strong></p>
                    <p class="product-name">Peito Frango Bom Todo Bandeja 1kg</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/pernil.png" alt="Produto 9">
                <div class="product-info">
                    <p class="price">R$ 20,49 Kg.</p>
                    <p class="price">Por apenas <strong>R$ 127,04 un.</strong></p>
                    <p class="product-name">Pernil Suino Sadia In Natura 6,200 Kg</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/cerveja.png" alt="Produto 10">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 149,90 un.</p>
                    <p class="price">Por apenas <strong>R$ 124,90 un.</strong></p>
                    <p class="product-name">Whisky Chivas Regal 12 anos Escocês  - 1 litro</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/heineken.png" alt="Produto 11">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 119,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 105,90 un.</strong></p>
                    <p class="product-name">Cerveja Heineken Keg 5L</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/kit-coca.jpg" alt="Produto 12">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 15,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 14,99 un.</strong></p>
                    <p class="product-name">Kit Coca-Fanta 2L</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

        </div>
    </section>

<!-- Botão expansível do carrinho -->
<div class="cart-button-container">
    <button id="cart-button">🛒 Carrinho (<span id="cart-count">0</span>)</button>
    <div id="cart-modal" class="cart-modal">
        <div id="cart-items">
            <!-- Lista de produtos -->
        </div>
        <div class="cart-summary">
            <p>Total: <span id="total-price">R$ 0,00</span></p>
            <button id="checkout-btn" class="checkout-btn" disabled>Finalizar Compra</button>
        </div>
    </div>
</div>


    <footer class="footer-container">
        <div class="footer-top">
            <p class="relationship-text">RELACIONAMENTO COM O CLIENTE</p>
            <div class="contact-box"> 
                <p><span class="material-icons">call</span><i class="fas fa-phone"></i> 0800 084 0120</p>
                <p><span class="material-icons">smartphone</span> <i class="fas fa-whatsapp" ></i> (84) 98896-9814</p>
                <p><span class="material-icons">mail</span> <i class="fas fa-envelope"></i> fale-com-a-gente@lojaexemplo.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-column">
                <h4>Quem Somos</h4>
                <p>Somos a família Loja Exemplo.<br> <a href="#">Clique aqui e saiba mais</a></p>
            </div>
            <div class="footer-column">
                <h4>Institucional</h4>
                <ul>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Como comprar</a></li>
                    <li><a href="#">Entregas</a></li>
                    <li><a href="#">Formas de Pagamento</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Fale com a gente</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Regiões Disponíveis</a></li>
                    <li><a href="#">Política de Cookies</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4> Endereço </h4>
                <p><a href="https://maps.app.goo.gl/U28k5QJhcKwY7gZK8" target="_blank" rel="external">Endereço: Av. Angelo Varela, 19 - Centro, <br> Alto do Rodrigues - RN, 59507-000</a></p>
            </div>
          
            <div class="footer-column">
                <h4>Siga-nos</h4>
                <div class="social-icons">
                    <a href="#"><img src="imagens/facebook-square.png" alt="Facebook"></a> 
                    <a href="#"><img src="imagens/instagram-square.png" alt="Instagram"></a>
                    <a href="#"><img src="imagens/twitter-square.png" alt="Twitter"></a>
                </div>
            </div>
        </div>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>
