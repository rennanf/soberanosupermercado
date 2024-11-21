<?php
session_start(); 
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supermercado Soberano - FINALIZAR COMPRA</title>
    <link rel="icon" href="imagens/favico.ico"/>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        h1 {
            text-align: center;
            margin-top: 20px;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .cart-item {
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .item-name {
            font-weight: bold;
        }

        .item-price,
        .quantity {
            margin-left: 10px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="tel"],
        select {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 16px;
        }

        button {
            background-color: #28a745;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            margin-top: 20px;
        }

        button:hover {
            background-color: #218838;
        }

        #pix-qr-code {
            margin-top: 15px;
            text-align: center;
            display: none;
        }

        #pix-qr-code img {
            max-width: 200px;
        }

        .payment-options {
            margin-top: 15px;
            display: none;
        }

        .payment-options input[type="radio"] {
            margin-right: 10px;
        }

        .payment-options label {
            display: inline-block;
            margin-right: 10px;
        }

        #credit-cards {
            margin-top: 10px;
            display: none;
        }

        .credit-card-option {
            display: inline-block;
            margin-right: 15px;
            cursor: pointer;
            padding: 10px;
            background-color: #f8f8f8;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-weight: bold;
        }

        .credit-card-option:hover {
            background-color: #e0e0e0;
        }

        .header-logo {
            text-align: center; /* Centraliza a logo */
        }
    </style>
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
        <div class="header-buttons">
        <?php if (isset($_SESSION['usuario'])): ?>
            
            
            <span class="button" style="background-color:#d0c116;" >
            <span class="material-icons">account_circle</span><?php echo $_SESSION['usuario']; ?>
            </span>
            <a href="logout.php" class="button">
            <span class="material-icons">logout</span>Logout
            </a>
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

    <div class="container">
        <h1>Finalizar Compra</h1>

        <!-- Carrinho de compras -->
        <div id="cart-items"></div>
        <div id="total-price"></div>

        <!-- Formulário de informações -->
        <form id="checkout-form">
            <div class="form-group">
                <label for="name">Nome Completo</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
                <label for="address">Endereço</label>
                <input type="text" id="address" name="address" required>
            </div>

            <div class="form-group">
                <label for="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" required>
            </div>

            <div class="form-group">
                <label for="payment-method">Forma de Pagamento</label>
                <select id="payment-method" name="payment-method" required>
                    <option value="">Selecione...</option>
                    <option value="cartao">Cartão de Crédito/Débito</option>
                    <option value="pix">Pix</option>
                </select>
            </div>

            <div class="payment-options" id="payment-options">
                <div id="cartao-options" class="form-group" style="display: none;">
                    <label for="credit-cards">Selecione o(s) Cartão(ões)</label>
                    <div id="credit-cards">
                        <label>
                            <input type="checkbox" name="credit-cards[]" value="Visa"> Visa
                        </label>
                        <label>
                            <input type="checkbox" name="credit-cards[]" value="MasterCard"> MasterCard
                        </label>
                        <label>
                            <input type="checkbox" name="credit-cards[]" value="Elo"> Elo
                        </label>
                        <label>
                            <input type="checkbox" name="credit-cards[]" value="Hipercard"> Hipercard
                        </label>
                    </div>
                </div>

                <div id="pix-qr-code" style="display: none;">
                    <label>QR Code do Pix:</label>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png" alt="QR Code Pix">
                    <p>Escaneie o QR Code para pagar via Pix.</p>
                </div>
            </div>

            <button type="submit" id="confirm-purchase-btn">Confirmar Compra</button>
        </form>
    </div>

    <script>
        window.addEventListener('DOMContentLoaded', () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartItemsContainer = document.getElementById('cart-items');
            const totalPriceElement = document.getElementById('total-price');
            const paymentMethodSelect = document.getElementById('payment-method');
            const cartaoOptions = document.getElementById('cartao-options');
            const pixQrCode = document.getElementById('pix-qr-code');
            const creditCardsContainer = document.getElementById('credit-cards');

            // Exibe itens do carrinho e o total
            if (cart.length > 0) {
                cartItemsContainer.innerHTML = '';
                cart.forEach(item => {
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.classList.add('cart-item');
                    cartItemDiv.innerHTML = `
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">R$ ${item.price}</div>
                    `;
                    cartItemsContainer.appendChild(cartItemDiv);
                });

                const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
                totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
            } else {
                cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            }

            // Exibir opções de pagamento
            paymentMethodSelect.addEventListener('change', (e) => {
                const paymentMethod = e.target.value;
                if (paymentMethod === 'cartao') {
                    cartaoOptions.style.display = 'block';
                    pixQrCode.style.display = 'none';
                    creditCardsContainer.style.display = 'block';
                } else if (paymentMethod === 'pix') {
                    pixQrCode.style.display = 'block';
                    cartaoOptions.style.display = 'none';
                    creditCardsContainer.style.display = 'none';
                } else {
                    cartaoOptions.style.display = 'none';
                    pixQrCode.style.display = 'none';
                }
            });

            // Finalizar compra
            const checkoutForm = document.getElementById('checkout-form');
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const address = e.target.address.value;
                const phone = e.target.phone.value;
                const paymentMethod = e.target['payment-method'].value;

                if (paymentMethod === '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Selecione uma forma de pagamento!',
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Compra Confirmada!',
                        text: `Obrigado pela compra, ${name}. Sua compra será enviada para ${address}.`,
                    }).then(() => {
                        localStorage.removeItem('cart');
                        window.location.href = "index.php"; // Redireciona para index.php após confirmação
                    });
                }
            });
        });
    </script>

</body>
</html>
