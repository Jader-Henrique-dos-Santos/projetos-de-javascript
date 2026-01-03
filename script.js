window.onload = function() {
    // Valores corretos do site
    let login_do_site = 'test@gmail.com'
    let senha_do_site = '12345'

    // Inputs do usuário
    let inputLogin = document.getElementById('login')
    let inputSenha = document.getElementById('senha')
    let botao = document.querySelector('button')

    // Ao clicar no botão
    botao.addEventListener('click', function() {
        let login_do_usuario = inputLogin.value
        let senha_do_usuario = inputSenha.value

        if (login_do_usuario === login_do_site && senha_do_usuario === senha_do_site) {
            window.alert('Seja Bem-vindo, espere que goste do nosso site')
        } else {
            window.alert('Login ou senha incorretos')
        }
    })
}
