// criando array de cores
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',];

// pegando o botão que vai mudar a cor
const btn = document.getElementById('btn');

// pegando o botao que vai abrir o menu mobile
const btnMobile = document.querySelector('.btn-mobile');

// aonde irá aparecer o nome da cor
const color = document.querySelector('.color');

// adicionando evento de clique, onde será executada a lógica
btn.addEventListener('click', function(){

    // atribuindo o # para o nome da cor
    let hexColor = '#';

    /* uma cor hexadecimal possui 6 caracteres, percorrendo o array até achar 6 caracteres
      e atribuindo o valor do array com numero aleatorio a variavel hexcolor, que começa com # no nome */ 
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    
    // dizendo o nome da cor na tela
    color.textContent = hexColor;

    // mudando de fato a cor de fundo do body
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

/* Mobile Menu*/

// habilita o menu mobile
btnMobile.addEventListener('click', toggleMenu);

// toda logica do menu é feita nessa função
function toggleMenu(event){

    // pegando a tag nav do HTML
   const nav = document.querySelector('#nav');

   // atribuindo classe active na nav
   nav.classList.toggle('active');

   //  verificando se a nav possui a classe active atribuindo a uma constante 
   const active = nav.classList.contains('active');
   
   // atribuindo a o atributo aria-exapanded para questões de acessibilidade 
   event.currentTarget.setAttribute('aria-expanded', active);
   
   // verificando se possui a classe active, ou seja, se o menu estiver expandido, muda o aria-label
   if(active){
       event.currentTarget.setAttribute('aria-label', 'Fechar menu');
   }
   // altera a mensagem do aria-label   
   else{
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
   }
}


