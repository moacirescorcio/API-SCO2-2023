import { question } from "readline-sync";

function main(){
    const compras = Number(question('Quantas compras foram feitas? '))
    
    let contador = 1
    let soma = 0
    let total_cashback = 0
    const maior_valor_cashback = 0
    const menor_valor_cashback = 0
   
    //informar valores das compras
    
    while (contador <= compras){
        const nome = question(`Nome do cliente ${contador}: `)
        console.log(`>>>>> Compras do(a) cliente ${nome}:`)
        const valor = Number(question(`Valor da compra ${contador}: `))
        
        //calculando cashbacks
        const cashback = calcular_cashback(valor)
        console.log(`>>>>> O total em cashback do(a) cliente ${nome} foi de R$${cashback.toFixed(2)}`)
        console.log(`\n`)

        //somando as vendas
        soma = soma + valor

        //total cashback
        total_cashback = total_cashback + cashback

        //maior e menor valores
        const maior_valor = maior(cashback)
        const menor_valor_cashback = menor(cashback)

        contador++
    }

    console.log(`>>>>> O total investido em cashback foi de R$${total_cashback.toFixed(2)}`)
    console.log(`>>>>> Isso equivale a ${(soma/total_cashback).toFixed(2)}%`)
    console.log(`>>>>> O maior valor de cashback foi de R$${maior_valor_cashback.toFixed(2)}`)
    console.log(`>>>>> O menor valor de cashback foi de R$${menor_valor_cashback.toFixed(2)}`)


}

function calcular_cashback(s){
    let resultado
    let regra_maior_750 
    if (s <= 250){
        resultado = s * 0.05
    }else if(s <= 500){
        resultado = s * 0.07
    }else if(s <=750){
        resultado = s * 0.08
    }else if(s > 750){
        regra_maior_750 = s - 750
        resultado = (250 * 0.05) + (500 * 0.07) + (regra_maior_750 * 0.25)
    }
    return resultado
}

function maior(c){
    let r = c
    let maior
    if (c > r){
        maior = c
    }else{
        maior = maior
    }
    return maior
}

function menor(c){
    let menor = c
    if (c > menor){
        menor = c
    }else{
        menor = menor
    }
    return menor
}

main()