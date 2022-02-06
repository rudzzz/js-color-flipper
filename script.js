// criando array de cores
const colors = ['green', 'red', 'blue', 'yellow', 'orange', 'purple', 'black'];

// pegando o botão que vai mudar a cor
const btn = document.getElementById('btn');

// pegando o botao que vai abrir o menu mobile
const btnMobile = document.querySelector('.btn-mobile');

// aonde irá aparecer o nome da cor
const color = document.querySelector('.color');

// adicionando evento de clique, onde será executada a lógica
btn.addEventListener('click', function(){

    // pegando numero aleatorio
    const randomNumber = getrandomNumber();

    // mudando a cor do body pela cor do indice do array
    document.body.style.backgroundColor = colors[randomNumber];

    // atribuindo o nome da cor conforme a cor do indice do array
    color.textContent = colors[randomNumber];
});

// função pra pegar um numero aleatorio e multiplicar pelo tamanho do array de cores
function getrandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// Mobile Menu

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
