let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
const pessoasInput = document.querySelector("#pessoas")
const gorjetaInput = document.querySelector("#outra")

const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
const strongTotal = document.querySelector(".total > strong")

const paragrafoErro = document.querySelector(".pessoas #erro")
const divErro = document.querySelector(".pessoas .input-box")

contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {

    if(evento.target.value === "0") {

        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")

        pessoas = 0

    } else {

        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")

        pessoas = Number(evento.target.value)

        calcular()
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")

botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

gorjetaInput.addEventListener("input", receberPorcentagem)

function receberPorcentagem(evento) {

    botoesGorjeta.forEach(botao => {

        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }

    })

    porcentagem = Number.parseFloat(evento.target.value) / 100 || 0

    calcular()
}

function calcular() {

    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {

        const gorjetaPorPessoa = (conta * porcentagem) / pessoas

        const totalPorPessoa = (conta + (conta * porcentagem)) / pessoas

        strongGorjetaTotal.innerHTML = `R$ ${gorjetaPorPessoa.toFixed(2)}`

        strongTotal.innerHTML = `R$ ${totalPorPessoa.toFixed(2)}`
    }
}

const botaoLimpar = document.querySelector(".resultados button")

botaoLimpar.addEventListener("click", limpar)

function limpar() {

    contaInput.value = ""
    pessoasInput.value = ""
    gorjetaInput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    strongGorjetaTotal.innerHTML = "R$ 0.00"
    strongTotal.innerHTML = "R$ 0.00"

    paragrafoErro.style.display = "none"
    divErro.setAttribute("id", "")

    conta = 0
    pessoas = 0
    porcentagem = 0
}