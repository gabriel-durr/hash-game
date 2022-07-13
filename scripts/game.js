/* a lógica do game: Temos vários quadrados, na qual vai ser preenchida com duas figuras diferentes, e dependendo das posições dessa figura irá aparecer game over na tela. 

 Queremos também que a cada clique, a figura seja colocada no tabuleiro, mudando a vez do jogador e trocando de figura. */

// Iniciar variáveis.

let board = ["", "", "", "", "", "", "", "", ""];
// 1. Array com 9 posições vazias, que representa os espaços do nosso tabuleiro. Começam todas vazias, porém em alguns momentos podem ter como valor "O" ou "X"

let playerTime = 0;
// 2. representa a vez do jogador que pode ser 0 para o jogador 1, ou 1 para o jogador 2

let symbols = ["o", "x"];
// 3. Representa as figuras, que se o valor do playTime for 0 irá ser o "0", se for 1 será "x". (E esses valores serão inseridos nos espaços do array)

let gameOver = false;
// 19. Variável pra evitar que seja possível continuar colocando peças ao haver um player vencedor. Ela inicia como false, que indica que o jogo não acabou.

let winStates = [
    // 23. Variável que contém uma mapeação em forma de array, com sub-arrays que guarda os estados possíveis de jogadas que dão a vitória ao inserir os símbolos (array da variável board).
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {
    // 8. função q irá colocar o symbol no array,

    if (gameOver) {
        // 21. Condicional que verifica se o jogo acabou (true), e da um return pra finalizar o funcionamento da função.
        return;
    }

    if (board[position] == "") {
        // 20. Verifica se a posição do board é vazia, para atualizar o array, se não for vazia não permite.

        board[position] = symbols[playerTime];
        // 9. Essa função recebe como argumento o valor da posição que irá representar o index do array, que irá receber um dos símbolos 0 ou x, que tem como index o playerTime que é 0 ou 1

        gameOver = isWin();
        // 22.  Chamada da função que verifica se a jogada foi vencedora, e atribui o resultado da jogada para condicional que esta com o parâmetro gameOver, que finaliza o game caso tenha um vencedor.

        if (!gameOver) {
            // 33. Condicional que verifica se houve um game over (true) não passa mais a vez para o próximo jogador, interrompendo assim as jogadas. Se for (false) as jogadas continuam.

            playerTime = playerTime == 0 ? 1 : 0;
            /* 10. Condição ternário para quando um symbol for colocado, passar a vez para o próximo jogador:

            Se o playerTime for igual a 0 ele irá adicionar 1 a variável, se não irá atribuir 0, fazendo assim um switch entre os jogadores. 
                
             */
        }
    }
    return gameOver;
    // 32. Tendo um vencedor a variável gameOver,  que recebe o retorno da função isWin (true ou false), irá passar o parâmetro pra condicional que encerra função e então retornamos esse valor.
}

function isWin() {
    // 24. Função que verifica a vez do jogador

    for (let i = 0; i < winStates.length; i++) {
        // 25. loop for que irá percorrer por cada item (sub-array) do array winStates

        let seq = winStates[i];
        // 26. variável que recebe os valores de cada item (array) a cada sequência do looping

        let pos1 = seq[0];
        // 27. variável pega os valores do item(array) do looping atual, e pega apenas o primeiro número

        let pos2 = seq[1];
        // 28. variável pega os valores do item(array) do looping atual, e pega apenas o segundo número

        let pos3 = seq[2];
        // 29. variável pega os valores do item(array) do looping atual, e pega apenas o terceiro número

        if (
            /*  30. Condição que irá verificar
             se a jogada no board, é igual as posições de vitória que foi mapeada(winStates), verificando:

             -Se posição1 é igual a posição2 e a posição1 é igual a posição3 também, formando uma linha completa da velha. 
             
             Além disso, verifica:
             
             -Se o board da posição1 é diferente de vazio(descartando as outras sequências), que serve para ter vencedor apenas  se não houver espaços vazios no board. retornando true se todas as condições estiverem de acordo, tendo assim um vencedor, ou false se não houver.

            */
            board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ""
        ) {
            return true;
            // 31.
        }
    }
    return false;
    // 32.
}
