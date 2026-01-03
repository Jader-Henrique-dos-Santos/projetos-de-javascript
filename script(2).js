// Variáveis iniciais (vazias)
let primeiro_valor = ''
let segundo_valor = ''

// Inputs
let inputvalor1 = document.getElementById('valor-1')
let inputvalor2 = document.getElementById('valor-2')
let botao = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

// Ao clicar no botão
botao.addEventListener('click', function() {
    primeiro_valor = Number(inputvalor1.value)
    segundo_valor = Number(inputvalor2.value)

    let soma = primeiro_valor + segundo_valor
    resultado.value = soma
})
