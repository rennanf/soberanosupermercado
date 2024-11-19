<?php
session_start();


$usuario_valido = 'admin';
$senha_valida = '12345';


$erro = '';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $usuario = $_POST['username'];
    $senha = $_POST['password'];

   
    if ($usuario === $usuario_valido && $senha === $senha_valida) {
       
        $_SESSION['usuario'] = $usuario;
       
        header('Location: index.php');
        exit;
    } else {
        
        $erro = 'Usuário ou senha incorretos.';
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            height: 100%;
            font-family: 'Roboto', sans-serif;
        }

        .container {
            display: flex;
            height: 100%;
        }

        .login-section {
            width: 50%;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .login-section img {
            width: 120px;
            margin-bottom: 20px;
        }

        .login-form {
            width: 80%;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .login-form input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        .login-form button {
            width: 100%;
            padding: 12px;
            background-color: #ff8d8d;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .login-form button:hover {
            background-color: #e36e6e;
        }

        .image-section {
            width: 50%;
            height: 100%;
            background-image: url('imagens/soberano.gif');
            background-size: cover;
            background-position: center;
        }

        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }

            .login-section, .image-section {
                width: 100%;
                height: auto;
            }

            .image-section {
                height: 200px;
            }
        }

        .error-message {
            color: red;
            font-size: 14px;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="login-section">
        <img src="imagens/photo_2023-07-06_20-47-18.jpg" alt="Logo">
        <form class="login-form" method="POST" action="loginform.php">
            <input type="text" name="username" placeholder="Usuário" required>
            <input type="password" name="password" placeholder="Senha" required>
            <button type="submit">Entrar</button>
            <?php if (!empty($erro)): ?>
                <p class="error-message"><?php echo $erro; ?></p>
            <?php endif; ?>
        </form>
    </div>

    <div class="image-section"></div>
</div>

</body>
</html>
