import { question } from "readline-sync";

function main(){
    const objetivo = question('Qual o seu objetivo? ')
    const valor_necessário = question('Qual o valor necessário para realizar esse objetivo? ')

    const salario = question('Qual o valor do seu salário? ')
    const investimento = question('Quantos % pretende investir por mês?(até 30%) ')
    const taxa_de_juros = question('Qual da taxa de juros escolhida?(0,01 até 1,00) ')

    //calculando investimento mensal
    let investimento_mensal = calcular_investimento(salario,investimento)

    let meses = 0
    let valor_objetivo = 0
    while (valor_objetivo < valor_necessário){
        investimento_mensal = investimento_mensal + investimento_mensal
        valor_objetivo = valor_objetivo + (investimento_mensal * (taxa_de_juros/100))
        meses++
    }

    let anos = 0
    let meses2 = 0
    if (meses > 12){
        anos = Math.floor(meses / 12)
        meses2 = meses % 12
        console.log(`Atingirá o valor em ${anos} anos e ${meses2} meses.`)
    }else{        
        console.log(`Atingirá o valor em ${meses} meses!`)
    }
}


function calcular_investimento(salario,investimento){
    let resultado = salario * (investimento/100)
    return resultado
}

main()