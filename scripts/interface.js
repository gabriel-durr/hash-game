document.addEventListener("DOMContentLoaded", () => {
    // 4. evento será executado quando o documento for carregado, e irá executar nossa função

    let squares = document.querySelectorAll(".square");
    // 5. pega todos elementos com a classe .square e atribui a variável squares.

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
        // 5.5. Na variável que possui os elementos, utilizamos o método forEach, que irá percorrer todos os elementos, e a cada elemento irá adicionar um evento click, que irá chamar a função handleClick ao ser clicado.
    });
});

function handleClick(event) {
    // 6. Função q irá pegar o elemento que foi clicado e atribuir a variável square, e ele irá pegar o id do elemento dessa variável e atribuir a variável position

    let square = event.target;
    let position = square.id;

    if (
        // 30. Condição que pega o return gameOver da função, handleMove e cria um alerta (se for true), mostrando o jogador vencedor na tela, utilizando o setTimeOut pra disparar depois de um tempo, pois o alert acaba executando antes de atualizar a tela.

        handleMove(position)
        // 10. Chama a função handleMove e passa como valor o id do elemento clicado.
    ) {
        setTimeout(() => {
            alert(` O Jogo acabou! Vencedor: ${playerTime}`);
        }, 10);
    }

    updateSquare(position); // 11. Irá chamar a função para atualizar o square com a posição.
}

function updateSquare(position) {
    // 12. função para atualizar o square

    let square = document.getElementById(position.toString());
    // 13. variável que pega a posição do square,  e transforma o número em string.

    let symbol = board[position];
    // 14. Variável que define qual é o simbolo na posição do board,

    square.innerHTML = `<div class="${symbol}"></div>`;
    //15. E colocamos esse simbolo dentro desse square. no HTML da page, que terá o efeito aplicado no css através da classe.
}
