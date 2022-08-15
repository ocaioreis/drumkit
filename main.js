'use strict';

const sons = {
    'A': './sounds/bass-drum.mp3',
    'S': './sounds/clap.mp3',
    'D': './sounds/hihat.mp3',
    'F': './sounds/rapaz.wav',
    'G': './sounds/ratinho.mp3'
}


const criarDiv = (texto) => {
    const div = document.createElement('div')
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv)

const tocarSom = (letra)=>{
    const audio = new Audio(`./${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra)=> document.getElementById(letra).classList.add('active');

const removerEfeito = (letra)=> {
    const div = document.getElementById(letra);
    const removeActive = ()=> div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const ativarDiv = (evento)=>{
    
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

    const letraOK = sons.hasOwnProperty(letra);
    if (letraOK){
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
    }
}


exibir(sons);

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv)