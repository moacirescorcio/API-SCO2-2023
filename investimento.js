import { question } from "readline-sync";

function main(){
    const objetivo = question('Qual o seu objetivo? ')
    const valor_necessário = question('Qual o valor necessário para realizar esse objetivo? ')

    const salario = question('Qual o valor do seu salário? ')
    const investimento_mensal = question('Quantos % pretende investir por mês? ')
    const taxa_de_juros = question('Qual da taxa de juros escolhida?(0,01 até 1,00) ')
}

main()