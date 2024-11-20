<?php
session_start(); 
if (isset($_SESSION['usuario'])) {
    
} else {
    
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
            <a href="index.php">
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

    <section class="product-listing">
    <div class="container">
            <div class="product-item">
                <img src="imagens/arroz1.jpeg" alt="Produto 1">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 6,79 un.</p>
                    <p class="price">Por apenas <strong>R$ 4,69 un.</strong></p>
                    <p class="product-name">Arroz parborizado</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>
            <!-- Mais produtos aqui... -->
            <div class="product-item">
                <img src="imagens/feijao1.png" alt="Produto 2">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 8,99 un.</p>
                    <p class="price">Por apenas <strong>R$ 6,69 un.</strong></p>
                    <p class="product-name">Feijão preto </p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="product-item">
                <img src="imagens/lentilha.png" alt="Produto 3">
                <div class="product-info">
                    <span class="offer-tag">Oferta do Dia</span>
                    <p class="old-price">R$ 17,49 un.</p>
                    <p class="price">Por apenas <strong>R$ 15,89 un.</strong></p>
                    <p class="product-name">Lentilha</p>
                    <div class="product-controls">
                        <input type="number" value="1" min="1">
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
        </section>

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