document.addEventListener("DOMContentLoaded", () => {
    // 4. evento será executado quando o documento for carregado, e irá executar nossa função

    let squares = document.querySelectorAll(".square");
    // 5. pega todos elementos com a classe .square e atribui á variável squares.

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
        // 6. Na variável squares que possui os elementos, utilizamos o método forEach, que irá percorrer por todos elementos, e a cada elemento irá adicionar um evento click, que irá chamar a função handleClick ao ser clicado.
    });
});

function handleClick(event) {
    // 7. Função q irá ser chamada, quando elemento for clicado.

    let square = event.target;
    // 11. iremos pegar o target do evento, ou seja, o elemento que foi clicado individualmente e atribuir a variável square.
    let position = square.id;
    // 12. da variável square, pegamos apenas o id do elemento e atribuímos que a variável position, pois o id irá representar a posição do elemento.

    if (
        // 34. Condição que pega o return gameOver da função, handleMove e cria um alerta (se for true), mostrando o jogador vencedor na tela, utilizando o setTimeOut pra disparar depois de um tempo, pois o alert acaba executando antes de atualizar a tela.

        handleMove(position)
        // 13. Chama a função handleMove e passa como valor o id do elemento clicado.
    ) {
        setTimeout(() => {
            alert(` O Jogo acabou! Vencedor: ${playerTime}`);
        }, 10);
    }

    updateSquare(position); // 14. Irá chamar a função para atualizar o square com a posição.
}

function updateSquare(position) {
    // 15. função para atualizar o square

    let square = document.getElementById(position.toString());
    // 16. variável que pega a posição do square,  e transforma o número em string.

    let symbol = board[position];
    // 17. Variável que define qual é o simbolo na posição do board,

    square.innerHTML = `<div class="${symbol}"></div>`;
    // 18. E colocamos esse simbolo dentro desse square. no HTML da page, que terá o efeito aplicado no css através da classe..
}
