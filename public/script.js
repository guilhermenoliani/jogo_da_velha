// Dados iniciais
var quadro = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
var playing = false;
var vez = 'x';
var warning = '';
reset();
// Eventos
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(function (item) {
    item.addEventListener('click', function (e) {
        var loc = e.target.getAttribute('data-item');
        if (playing && quadro[loc] === '') {
            quadro[loc] = vez;
            renderQuadro();
            togglePlayer();
        }
    });
});
// Funções
function reset() {
    warning = '';
    // definir a vez
    var random = Math.floor(Math.random() * 2);
    vez = random === 0 ? 'x' : 'o';
    // resetar os quadros
    for (var i in quadro) {
        quadro[i] = '';
    }
    // renderizar tudo
    renderQuadro();
    renderInfo();
    playing = true;
}
function renderQuadro() {
    for (var i in quadro) {
        var item = document.querySelector("div[data-item=".concat(i, "]"));
        if (quadro[i] !== '') {
            item.innerHTML = quadro[i];
        }
        else {
            item.innerHTML = '';
        }
    }
    checkGame();
}
function renderInfo() {
    document.querySelector('.vez').innerHTML = vez;
    document.querySelector('.resultado').innerHTML = warning;
}
function togglePlayer() {
    vez = vez === 'x' ? 'o' : 'x';
    renderInfo();
}
function checkGame() {
    if (checkWinnerFor('x')) {
        warning = 'O "x" venceu';
        playing = false;
    }
    else if (checkWinnerFor('o')) {
        warning = 'O "o" venceu';
        playing = false;
    }
    else if (isFull()) {
        warning = 'Deu empate';
        playing = false;
    }
}
function checkWinnerFor(i) {
    var pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',
        'a1,b2,c3',
        'a3,b2,c1'
    ];
    for (var w in pos) {
        var pArray = pos[w].split(',');
        var hasWon = pArray.every(function (option) { return quadro[option] === i; });
        if (hasWon)
            return true;
    }
    return false;
}
function isFull() {
    for (var i in quadro) {
        if (quadro[i] === '') {
            return false;
        }
    }
    return true;
}
