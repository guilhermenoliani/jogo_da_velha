var square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
var playerTurn = '';
var warning = '';
var playing = false;
// Events
document.querySelector('.reset').addEventListener('click', reset); // Adicionando uma ação no botão reset
document.querySelectorAll('.item').forEach(function (item) {
    item.addEventListener('click', itemClick);
}); // Adicionando evento de click em todos os itens
// Functions
function itemClick(event) {
    var item = event.target.getAtrribute('data-item');
    if (square[item] === '') {
        square[item] = playerTurn;
    }
}
function reset() {
    warning = '';
    var random = Math.floor(Math.random() * 2); //Random player
    playerTurn = (random === 0) ? 'x' : 'o'; // 'x'  or  'o'
    for (var i in square) { // Cleaning the square
        square[i] = '';
    }
    playing = true;
    renderSquare();
    renderInfo();
}
function renderSquare() {
    for (var i in square) {
        var item = document.querySelector("div[data-item=".concat(i, "]"));
        item.innerHTML = square[i];
    }
}
function renderInfo() {
    document.querySelector('.vez').innerHTML = playerTurn;
    document.querySelector('.resultado').innerHTML = warning;
}
