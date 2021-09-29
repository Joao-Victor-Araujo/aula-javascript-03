/*
1)Cria variável para armazenar a resposta da pergunta: você é maior de 18 anos?
a)Se for maior ou igual a 18 anos, escreva a mensagem no console: Que legal! Você já pode ter a carteira de habilitação.
b)Se for menor de 18 anos, escreva a mensagem no console: Poxa, que pena! Você ainda não pode ter a carteira de habilitação.
*/

function idade(){   
    let maiorIdade = prompt("Você é maior de idade? (sim ou não)")
    
      if(maiorIdade == "sim" || maiorIdade == "Sim"){
        console.log("Que legal! Você já pode ter a carteira de habilitação.")
      } else if(maiorIdade == 'não' || maiorIdade == 'Não'){
        console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.")
      } else {
        console.log("Responda APENAS com sim ou não... ")
      }
    }

/*
2)Cria variável para armazenar a resposta da pergunta: você já terminou o ensino médio?
a)Se for verdade, escreva a mensagem no console: Poxa, que legal!.
b)Se for mentira, escreva a mensagem no console: Falta pouco! Logo você termina.*/

function ensino(){
    let ensinoMedio = prompt("você já terminou o ensino médio?(sim ou não)")
    if(ensinoMedio=="sim" || ensinoMedio=='Sim'){
      console.log("Poxa, que legal!")
    }else if(ensinoMedio=='não' || ensinoMedio=='não'){
      console.log("Falta pouco! Logo você termina.")
    }
  }


