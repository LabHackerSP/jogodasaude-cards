# Jogo da Saúde


## Objetivo

Cada jogador deve cuidar a sua cidade tentando ter o menor numero possível de tokens de **insatisfação** e **morte** e a maior quantidade
de tokens de **satisfação** ao final do jogo.

Não existe uma métrica unica para avaliar os "vencedores" ou "perdedores" do jogo.

## Modo de jogar

Cada jogador recebe uma **carta de cidade** nela vai estar indicado o tamanho da cidade, a quantidade de dinheiro e a quantidade de cidadãos que ingressam no sistema de saúde por turno.

O jogo dura um mandato de 4 anos, sendo que cada ano é composto por 4 rodadas (trimestres), totalizando 16 rodadas por jogo.


## Layout do ano

No começo do ano cada jogador recebe o número de dinheiros marcado na cidade x 4 aplicado então qualquer modificador e pagas eventuais dividas contraídas.


## Layout da rodada (trimestre)

No fim  da rodada acontece a reunião dos municipios.
Nessa reunião os municipios podem decidir - conjunta ou individualmente - comprar novas tecnologias para a rede.
O custo precisa ser pago na integralidade, porém a divisão de como vai ser feito o pagamento é de livre discussão entre os munícipios.

Após a reunião dos municipios o primeiro jogador saca uma carta de evento e lê em voz alta. Os efeitos do evento duram uma rodada completa a não ser que a carta diga o contrario.

## Layout do turno

1. O jogador compra n cartas básicas viradas para baixo.
2. Jogador coloca tokens de saúde e resolve pacientes que tiveram alta.
3. Jogador pode usar os equipamentos ociosos para fazer diagnóstico de cartas viradas para baixo.
  1. Caso a carta indique Diangóstico saque uma carta avançada e vire ela pra cima.
4. Jogador pode alocar pacientes nos equipamentos respectivos (baixa, alta e  média complexidade)
5. Jogador remove os pacientes que tenham atingido o seu limite de insatisfação e troca por tokens de **morte**.
6. Cada paciente alocado recebe um token de saúde.
7. Cada paciente não alocado recebe um token de insatisfação.
8. Jogador paga o custo de manutenção dos equipamentos, equipamentos que não tenham seu custo pago são desabilitados (virados para baixo).
9. Cada equipamento desligado gera 1 token de insatisfação. Equipamentos desligado por falta de pagamento acumulam a divida do custo de manutenção.
10. Jogador pode comprar novos equipamentos pagando seu custo de implementação. Os equipamentos passam a funcionar no inicio do próximo turno.
11. Jogador pode escolher desabilitar equipamentos por falta de verbas. Equipamentos desligados voluntariamente param de consumir recursos.


## Cartas e efeitos


### Contagiosa

Uma carta de doença contagiosa vai se espalhando pela população caso não seja tratada a tempo.
Quando diagnosticar (virar pra cima) uma carta contagiosa, verifique quantos tokens de insatisfação ela tem.
Quando ela tiver alcançado mais de 50% de insatisfação (arredondado pra cima) coloque uma outra carta com a mesma doença em jogo.
A carta deixa de ser contagiosa no momento em que começar a ser tratada.

Caso a tecnologia "Campanha de Vacinação" esteja em jogo as cartas contagiosas se comportam como cartas normais.


## Sobreexame

Sobreexame é um problema comum no nosso sistema de saúde, em parte por falta de educação para saúde os pacientes muitas vezes **querem** um exame para confirmar que não estão doentes. Por outro lado, médicos com pouca formação também requisitam exames de maneira exagerada.

Então caso você tenha um caso de sobreexame será obrigado a analisar o caso mesmo assim - ou vai ficar juntando tokens de insatisfação.

Caso tenha a tecnologia "Educação para saúde" essa carta pode ser descartada imediatamente.

## Parto Humanizado

O Brasil é recordista mundial de cesarianas - tornando um processo natural e humano em uma questão cirurgica. Assim boa parte dos partos torna-se um caso de média complexidade, sendo necessário hospital, anestesistas, etc

Caso tenha a tecnologia "Parto Humanizado" o parto passa a ser tratado como uma questão de baixa complexidade.
