import { question } from "readline-sync";

//água com no máximo 85% da capacidade
//piscina estilo quadrada.
//o valor é cobrado por cada 1000 litros de água, em partes inteiras. Ou seja, se usar 1 litro já paga por 1000, ao usar 1002 já paga 2 mil litros

function main(){
    const largura = Number(question('Largura da pscina (cm): '))
    const comprimento = Number(question('Comprimento da pscina (cm): '))
    const profundidade = Number(question('Profundidade da pscina (cm): '))

    const volume = (largura*comprimento*profundidade)/1000
    const litros_recomendado = volume * 0.85
    console.log(`>> Capacidade máxima da psicina é de ${volume} litros`)
    console.log(`>> É recomendado encher a psicina em ${litros_recomendado} litros`)
    console.log('\n')

    const valor = Number(question('Qual o valor a pagar por cada 1000 litros? '))
    let contador = 0
    let total_a_pagar = 0
    while(contador < litros_recomendado){
        total_a_pagar = total_a_pagar + valor
        contador = contador + 1000
        
    }

    console.log(`Total a pagar seria de R$${total_a_pagar.toFixed(2)}`)
}

main()