import { question } from "readline-sync";

function main(){
    const renda_mensal = Number(question('Qual a sua renda mensal? R$ '))
    const valor_emprestimo = Number(question('Qual o valor do empréstimo? '))
    let prazo = Number(question('Prazo desesejado (mín 2x):'))

    //caso prazo seja menor que 2 ou maior que 24
    while (prazo < 2 || prazo > 24){
        console.log('Prazo inválido!')
        prazo = Number(question('Prazo desejado (mín. 2): '))
    }
    
    const iof = calcular_iof(valor_emprestimo,prazo)
    const juros = calcula_juros_selic(prazo)
}

function calcular_iof(v,p){
    let resultado
    resultado = (0.38/100)*v + (0.0082/100)*(p*30)
    return (Math.floor(resultado))
}

function calcula_juros_selic(p){
    let resultado
    if (p <= 6){
        resultado = 0.50 * (13.75/100)
    }else if (p <= 12){
        resultado = 0.75 * (13.75/100)
    }else if (p <= 18){
        resultado = 13.75
    }else if (p > 18){
        resultado = 1.3* (13.75/100)
    }

    return resultado
}

main()