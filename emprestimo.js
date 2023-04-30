import { question } from "readline-sync";

function main(){
    const renda_mensal = Number(question('Qual a sua renda mensal? R$ '))
    const valor_emprestimo = Number(question('Qual o valor do empréstimo? '))

    // caso emprestimo seja inferior a um salário mínimo = 1320
    while (valor_emprestimo < 1320){
        console.log('O valor do empréstimo deve ser igual ou superior a um salário mínimo(R$1320,00)!')
        prazo = Number(question('Qual o valor do empréstimo? '))
    }

    let prazo = Number(question('Prazo desesejado (mín 2x):'))

    //caso prazo seja menor que 2 ou maior que 24
    while (prazo < 2 || prazo > 24){
        console.log('Prazo inválido!')
        prazo = Number(question('Prazo desejado (mín. 2): '))
    }
    
    const iof = calcular_iof(valor_emprestimo,prazo)
    const juros = calcula_juros_selic(prazo)
    let emprestimo_iof = iof + valor_emprestimo
    
    let contador = 0
    let total
    while (contador < prazo){
        total = emprestimo_iof * (1+(juros/100))**prazo
        emprestimo_iof = total
        contador++
    }
       
    

    console.log(`>>> O valor pedido foi de R$${valor_emprestimo}`)
    console.log(`>>> O valor do IOF foi de R$${iof}`)
    console.log(`>>> O valor do juros foi de R$${(total-valor_emprestimo).toFixed(2)}`)
    console.log(`>>> O valor total a pagar é de R$${(total).toFixed(2)}`)
    console.log(`>>> O valor da parcela ficou em ${prazo}x de R$${(total/prazo).toFixed(2)}`)

    //comprometimento da renda
    if ((0.4*renda_mensal)<(total/prazo)){
        console.log(`>>> Empréstimo REPROVADO! O valor da parcela ficou superior a 40% da renda!`)
    }else{
        console.log(`>>> Empréstimo APROVADO! Comprometimento da renda foi de ${(((total/prazo)/renda_mensal)*100).toFixed(0)}%`)        
    }
    
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