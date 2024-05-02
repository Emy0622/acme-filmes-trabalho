const botaoEntrar = document.getElementById('botao-entrar');

// Função para obter administradores
const getAdministradores = async function () {
    try {
        const url = 'http://localhost:8080/v2/AcmeFilmes/admnistradores'; // URL da API
        const response = await fetch(url); // Requisição à API
        const data = await response.json(); // Extrair dados JSON da resposta
        console.log(data); // Exibir dados no console (opcional)
        return data.admnistradores; // Retornar lista de administradores
    } catch (error) {
        console.error(error); // Exibir erros no console
        return false; // Retornar falso em caso de erro
    }
};

// Função para realizar o login
const logar = async function () {
    const administradores = await getAdministradores(); // Obter lista de administradores
    let loginValido = false; // Variável para indicar se o login é válido

    const email = document.getElementById('email').value; // Obter email digitado pelo usuário
    const senha = document.getElementById('senha').value; // Obter senha digitada pelo usuário

    console.log(email, senha); // Exibir email e senha no console (opcional)

    // Iterar sobre a lista de administradores
    administradores.forEach((administrador) => {
        const { login: administradorLogin, senha: administradorSenha, id: administradorId } = administrador; // Desestruturar objeto administrador
        
        // Verificar se o email e senha digitados correspondem a um administrador
        if (administradorLogin === email && administradorSenha === senha) {
            localStorage.setItem('idAdministrador', administradorId); // Armazenar o ID do administrador no localStorage
            loginValido = true; // Indicar que o login é válido
        }
    });

    // Redirecionar para a página de dashboard se o login for válido, caso contrário, exibir uma mensagem de erro
    if (loginValido) {
        window.location.assign('/src/pages/dashboard.html'); // Redirecionar para a página de dashboard
    } else {
        alert('Usuário ou senha incorretos'); // Exibir mensagem de erro
    }
};

// Adicionar evento de clique ao botão de entrar
buttonEntrar.addEventListener('click', logar);
