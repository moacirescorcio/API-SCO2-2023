import { question } from "readline-sync";

// caso não esteja negativado, apresentando um valor entre 0 e 1000. 
//entrada a,b e c
//saída pontuação no score 1.0 e 2.0 junto com a categoria

function main(){
    const a = Number(question('Porcentagem no critério A: '))
    const b = Number(question('Porcentagem no critério B: '))
    const c = Number(question('Porcentagem no critério C: '))

    //calculando os scores de a
    const resultado_score1_a = (a/100)*260
    const resultado_score2_a = (a/100)*620

    
    //calculando os scores de b
    const resultado_score1_b = (b/100)*570
    const resultado_score2_b = (b/100)*190

    
    //calculando os scores de c
    const resultado_score1_c = (c/100)*170
    const resultado_score2_c = (c/100)*190

    //somatório
    const soma_antigo = resultado_score1_a+resultado_score1_b+resultado_score1_c
    const soma_novo = resultado_score2_a+resultado_score2_b+resultado_score2_c

    //classificações
    const classificacao_score1 = score_antigo(soma_antigo)
    console.log(`>>> Score antigo: ${soma_antigo} - ${classificacao_score1} `)
    const classificacao_score2 = score_novo(soma_novo)
    console.log(`>>> Score antigo: ${soma_novo} - ${classificacao_score2} `)
}

function score_antigo(soma_antigo){
    let resultado
    if (soma_antigo <= 400){
        resultado = 'BAIXO'
    }else if(soma_antigo <= 600){
        resultado = 'REGULAR'
    }else if(soma_antigo <= 800){
        resultado = 'BOM'
    }else if (soma_antigo <= 1000){
        resultado = 'MUITO BOM'
    }

    return resultado
}

function score_novo(soma_novo){
    let resultado
    if (soma_novo<= 300){
        resultado = 'BAIXO'
    }else if(soma_novo <= 500){
        resultado = 'REGULAR'
    }else if(soma_novo <= 700){
        resultado = 'BOM'
    }else if (soma_novo <= 1000){
        resultado = 'MUITO BOM'
    }

    return resultado
}

main()