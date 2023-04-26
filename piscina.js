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
    const arredondar_litros_recomendados = Math.ceil(litros_recomendado / 1000) * 1000
    console.log(`>> Capacidade máxima da psicina é de ${volume} litros`)
    console.log(`>> É recomendado encher a psicina em ${litros_recomendado} litros`)
    console.log('\n')

    const valor = Number(question('Qual o valor a pagar por cada 1000 litros? '))
    let contador = 0
    let total_a_pagar = 0
    while(contador < arredondar_litros_recomendados){
        total_a_pagar = total_a_pagar + valor
        contador = contador + 1000
        
    }

    console.log(`Total a pagar seria de R$${total_a_pagar.toFixed(2)}`)

    //repor os 10%
    const perda_de_agua = litros_recomendado * 0.1
    let valor_pagar_reposicao = 0
    if (perda_de_agua <= 1000){
        valor_pagar_reposicao = valor  
        console.log(`O total a pagar com a reposição de água mensalmente é de R$${valor_pagar_reposicao.toFixed(2)}`) 
    }else if(perda_de_agua > 1000 ){
        const arredondar_perda_agua = Math.ceil(perda_de_agua / 1000) * 1000
        let contador = 0
        let total_a_pagar_reposicao = 0
        while(contador < arredondar_perda_agua){
            total_a_pagar_reposicao = total_a_pagar_reposicao + valor
            contador = contador + 1000
            
        }
        console.log(`O total a pagar com a reposição de água mensalmente é de R$${total_a_pagar_reposicao.toFixed(2)}`)

    }
}

main()