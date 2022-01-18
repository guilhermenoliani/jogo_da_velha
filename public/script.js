var square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
var playerTurn = 'x';
var warning = '';
var playing = false;
reset();
// Events
document.querySelector('.reset').addEventListener('click', reset); // Adicionando uma ação no botão reset
document.querySelectorAll('.item').forEach(function (item) {
    item.addEventListener('click', function (e) {
        var loc = e.target.getAttribute('data-item');
        if (playing && square[loc] === '') {
            square[loc] = playerTurn;
            renderSquare();
            togglePlayer();
        }
    });
}); // Adicionando evento de click em todos os itens
// Functions
function reset() {
    warning = '';
    var random = Math.floor(Math.random() * 2); //Random player
    playerTurn = random === 0 ? 'x' : 'o'; // 'x'  or  'o'
    for (var i in square) { // Cleaning the square
        square[i] = '';
    }
    renderSquare();
    renderInfo();
    playing = true;
}
function renderSquare() {
    for (var i in square) {
        var item = document.querySelector("div[data-item=".concat(i, "]"));
        if (square[i] !== '') {
            item.innerHTML = square[i];
        }
        else {
            item.innerHTML = '';
        }
    }
}
function renderInfo() {
    document.querySelector('.vez').innerHTML = playerTurn;
    document.querySelector('.resultado').innerHTML = warning;
}
function togglePlayer() {
    playerTurn = (playerTurn === 'x') ? 'o' : 'x';
    renderInfo();
}
