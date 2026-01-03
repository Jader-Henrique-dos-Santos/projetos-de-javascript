let inputvalor1 = document.getElementById('valor-1')
let inputvalor2 = document.getElementById('valor-2')
let botao = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

botao.addEventListener('click', function() {
    let primeiro_valor = Number(inputvalor1.value)
    let segundo_valor = Number(inputvalor2.value)
    let soma = primeiro_valor + segundo_valor
    resultado.value = soma
})
