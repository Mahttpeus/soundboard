function tocaEfeito(seletorEfeito) {
    const elemento = document.querySelector(seletorEfeito);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();

    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idEfeito = `#efeito_${efeito}`

    tecla.onclick = function () {
        tocaEfeito(idEfeito);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}