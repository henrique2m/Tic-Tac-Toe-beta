# Tic-Tac-Toe-beta
 **Tic-Tac-Toe-beta** was developed using **JavaScript**, **CSS3** and **HTML5**. The goal was to create an algorithm that would inform the winner regardless of the number of boards that were added.

Check out the result in  [Tic-Tac-Toe-beta](https://henrique2m.github.io/Tic-Tac-Toe-beta/).

A brief description
The tic-tac-toe game has some interesting mathematical patterns, if we take the traditional model where we have a matrix (3x3) and enumerate the cells from 0 to 8 all numbers in the first column are multiples of 3. This was the pattern I used as a basis for the algorithm, basically when the player makes his move is identified in which column the cell is, however, in JavaScript we only work with vectors, so how are we going to define columns?

See, all the numbers in the first column are multiples of 3, so the second column will be a multiple of 3 plus 1 (N + 1), so in the third column we have a multiple of 3 plus 2 (N + 2) . Now we can form abstract columns, they are important because each column has its own probabilities for the player to win the game. We know that the objective of the tic-tac-toe game is to form a line with the sum of three cells of the same player, horizontally, vertically or diagonally.

We already have the cell and column in which the player made the move, now we can check if there is a line on the board that satisfies our objective. From the current cell, we will have to go backwards and / or forward spaces. This was just a brief explanation, for a better understanding of the project, analyze code calmly and don't forget to leave your contribution. :)

Below are some screens:  
# 
# Tic-Tac-Toe-beta
 **Tic-Tac-Toe-beta** foi desenvolvido utilizando **JavaScript**, **CSS3** e **HTML5**. O objetivo era criar um algoritmo que informasse o vencedor independentemente do número de tabuleiro que fosse adicionado.  
 
 Confira o resultado em  [Tic-Tac-Toe-beta](https://henrique2m.github.io/Tic-Tac-Toe-beta/).  

## Uma breve descrição 
O jogo da velha tem alguns padrões matemáticos interessantes, se pegarmos o modelo tradicional onde temos uma matriz (3x3) e enumerarmos as células de 0 a 8 todos os números da primeira coluna são múltiplos de 3. Esse foi o padrão que utilizei como base para o algoritmo, basicamente quando o jogador realizar sua jogada é identificado em qual coluna a célula está, porém, em JavaScript só trabalhamos com vetores, logo, como iremos definir colunas?  

Veja bem, todos os números da primeira coluna são múltiplos de 3, sendo assim, a segunda coluna será um múltiplo de 3 mais 1 (N+1), logo, na terceira coluna temos um múltiplo de 3 mais 2 (N+2).  Agora já podemos formar colunas abstratas, elas são importantes pois cada coluna possui suas próprias probabilidades para o jogador ganhar a partida. Sabemos que o objetivo do jogo da velha é formamos uma reta com a soma de três células de um mesmo jogador, na horizontal, vertical ou diagonal.  

Já temos a célula e a coluna em que o jogador realizou a jogada, agora podemos verificar se existe uma reta no tabuleiro que satisfaça o nosso objetivo.  A partir da célula atual teremos que percorres o tabuleiro recuando e/ou avançando casas. 
Essa foi apenas uma breve explicação, para um melhor entendimento do projeto analise código com calma e não esqueça de deixar a sua contribuição. :)  

Abaixo temos algumas telas:  

![Tela 1](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela1.png)
![Tela 2](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela2.png) 
![Tela 3](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela2.png) 
![Tela 4](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela3.png) 
![Tela 5](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela5.png) 
![Tela 6](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela6.png) 
![Tela 7](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela7.png) 
![Tela 8](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela8.png) 
![Tela 9](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela9.png) 
![Tela 10](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela10.png)
![Tela 11](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela11.png) 
![Tela 12](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela12.png)
![Tela 13](https://henrique2m.github.io/Tic-Tac-Toe-beta/assets/Telas/Tela13.png) 