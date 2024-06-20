const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const descansoBt = document.querySelector('.app__card-button--longo') // o problema era na class eu  tava colocando tudo quando so era um pouco
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const imgPause = document.querySelector('.app__card-primary-butto-icon')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const tempoNaTela = document.querySelector('#timer')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')

const musicaInicar = new Audio('sons/play.wav')
const musicaPausar = new Audio('sons/pause.mp3')
const musicaFim = new Audio('sons/beep.mp3')

let intervaloId = null

let tempoDecorridoEmSegundos = 1500 

musica.loop = true;

musicaFocoInput.addEventListener('change', () => { //change serve para input tipos checkbox
    if(musica.paused) {
            musica.play()
        } else {
            musica.pause()
        }
})

focoBt.addEventListener('click', () => { //html.setAttribute('data-contexto', 'foco') //para troca elementos// banner.setAttribute('src', './imagens/foco.png')// para trocar imagens
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {//html.setAttribute('data-contexto', 'descanso-curto')// banner.setAttribute('src','./imagens/descanso-curto.png')
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
   curtoBt.classList.add('active')
})
descansoBt.addEventListener('click', () => { // html.setAttribute('data-contexto', 'descanso-longo')// banner.setAttribute('src', './imagens/descanso-longo.png')
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
   descansoBt.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
})
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        //para trocar o texto o ineer serve para adicionar texxto
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){  
        musicaFim.play();
        alert('Tempo finalizado!')
         zerar()
        return musicaFim.pause();
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo() 
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    
    if(intervaloId){
        
        musicaPausar.play();
        zerar()
        return
    }
    musicaInicar.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
     iniciarOuPausarBt.textContent = "Pausar"
      imgPause.setAttribute('src', './imagens/pause.png')
}
function zerar() {
    clearInterval(intervaloId)
     iniciarOuPausarBt.textContent = "Começar"
     imgPause.setAttribute('src', './imagens/play_arrow.png')
    intervaloId = null
}
function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
     tempoNaTela.innerHTML = `${tempoFormatado}`
}
mostrarTempo()
    