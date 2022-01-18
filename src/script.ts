let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
let playerTurn = 'x';
let warning = '';
let playing = false;

reset();

// Events
document.querySelector('.reset').addEventListener('click', reset); // Adicionando uma ação no botão reset

document.querySelectorAll('.item').forEach((item) =>{ //Percorre todos os itens
    item.addEventListener('click', (e) => {
        let loc = e.target.getAttribute('data-item');
        if(playing && square[loc] === ''){
            square[loc] = playerTurn;
            renderSquare();
            togglePlayer();
        }
    });
}); // Adicionando evento de click em todos os itens

// Functions

function reset(){
    warning = '';

    let random = Math.floor(Math.random() * 2); //Random player
    playerTurn = random === 0 ? 'x' : 'o'; // 'x'  or  'o'
   
    for(let i in square){ // Cleaning the square
        square[i] = '';
    }


    renderSquare();
    renderInfo();

    playing = true;

    
}

function renderSquare(){

    for(let i in square){
        let item = document.querySelector(`div[data-item=${i}]`)
        if(square[i] !== ''){
            item.innerHTML = square[i];
        } else {
            item.innerHTML= '';
        }
        
    } 
}
function renderInfo(){
    document.querySelector('.vez').innerHTML = playerTurn;
    document.querySelector('.resultado').innerHTML = warning;
}

function togglePlayer(){
    
    playerTurn = (playerTurn === 'x') ? 'o' : 'x';
    renderInfo();
}