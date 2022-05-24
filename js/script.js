// comando ativação dos links do menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
    const url = location.href
    const href = link.href 

    if (url.includes(href)) {
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink)

// comando ativação itens-orçamento

const parametros =  new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento) {
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto)

// perguntas

const perguntas = document.querySelectorAll(".perguntas button")

function abrirPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)

    resposta.classList.toggle("ativa")
    const ativado = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativado)
}

function perguntasAbertas(pergunta) {
    pergunta.addEventListener("click", abrirPergunta)
}

perguntas.forEach(perguntasAbertas)

// imagens-bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
    const img = event.currentTarget
    const media = matchMedia('(min-width: 1000px)').matches
    if (media) {
    galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

// animação

if  (window.SimpleAnime) {
    new SimpleAnime()
}