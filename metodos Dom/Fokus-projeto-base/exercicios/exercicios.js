//1) Capturando elementos com JavaScript

/*O documento HTML, onde serão manipulados os elementos;
O elemento HTML em que irá aparecer o temporizador;
O elemento HTML no qual as imagens de cada contexto irão trocar de posição;
O elemento HTML onde as frases de cada contexto irão trocar de posição.
*/
const temporizador = document.querySelector('.app__card-timer') //errado
const img = document.querySelector('.app__image-figure')
const texto = document.querySelector('.app__title')
/*
2) Criando variáveis no JavaScript
Com os elementos selecionados (conforme visto no exercício anterior),
a próxima etapa é guardar cada um desses elementos em variáveis para
serem utilizados posteriormente no sistema que você está 
desenvolvendo. Para verificar se as variáveis estão corretas, 
utilize o console do navegador, por exemplo:
 console.log(nome-da-variável).
*/
console.log(temporizador)//errado
console.log(img)//errado
console.log(texto)//errado
/*
3) Criando botões da aplicação
Já definimos vários elementos que serão modificados no projeto “Fokus”,
porém essas mudanças irão acontecer a partir do click em botões. Nesta
etapa do projeto, crie as variáveis dos 4 (quatro) botões que vamos
utilizar:

Botão que servirá para iniciar e pausar o temporizador;
Botão para escolher o temporizador de “Foco”;
Botão para escolher o temporizador de “Descanso curto”;
Botão para escolher o temporizador de “Descanso longo”.
*/ 

const focoBtn = 1500;//errado
const descansoCurtoBtn = 300;//errado
const descansoLongoBtn= 900;//errado
/*
4) Selecionando botões com JavaScript
Até essa etapa, você já selecionou diversos elementos e os guardou
 em variáveis. Agora, crie variáveis com o tempo de cada tipo de
  temporizador:

Temporizador de foco com valor 1500;
Temporizador de descanso curto com valor 300;
Temporizador de descanso longo com valor 900.
Esses valores serão convertidos em segundos posteriormente.
*/
// era para por o 3 no 4

console.log(focoBtn)//Errado
console.log(descansoCurtoBtn)//Errado
console.log(descansoCurtoBtn)//Errado
/*
1) Criando funções no JavaScript
Na construção do projeto Fokus,
 crie uma função chamada alterarContexto() que altera o caminho 
 da imagem e a cor de fundo, de acordo com o contexto de cada um 
 dos três temporizadores: “Foco”, “Descanso curto” e “Descanso longo”.
*/
function alterarContexto(){
html.setAttribute('data-contexto', contexto)
}
/*
2) Alterando imagens e estilos dinamicamente
A próxima etapa da construção do projeto Fokus é a seguinte:
 utilize a função alterarContexto(), criada anteriormente, para 
 adicionar um evento de click, alterando o contexto de imagem e cor 
 de fundo, de acordo com o clique em cada um dos botões de foco.
*/

/*
3) Alterando textos dinamicamente
Até esta etapa de desenvolvimento do projeto Fokus, o código teve algumas repetições que podem ser melhoradas. Vamos corrigir isso? Assim, refatore o código, passando os valores de cada contexto dinamicamente na forma de parâmetro para a função alterarContexto(). Além disso, insira frases de acordo com cada contexto, através da variável titulo (já criada):

O contexto de foco terá a frase: “Otimize sua produtividade, mergulhe no que importa.”
O contexto de descanso curto terá a frase: “Que tal dar uma respirada? Faça uma pausa curta!”
O contexto de descanso longo terá a frase: “Hora de voltar à superfície. Faça uma pausa longa.”
*/

