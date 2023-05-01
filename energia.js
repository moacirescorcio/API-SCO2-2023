import { question } from "readline-sync";

//Consumo de até 30KWh isento de tarifa. 
//Até 100 KWh será cobrado R$ 0,59 por cada um cada de todo os KWh consumidos;
//acima de 100KWh o valor de R$ 0,75 por cada um de todos os KWh consumidos. 

//25% de ICMS
//15% pis

//iluminação publica - 6% do valor ANTES DOS IMPOSTO para quem passar de 80kw

function main(){
    const leitura_antiga = Number(question('Leitura antiga: '))
    const leitura_atual = Number(question('Leitura atual: '))

    let consumo = leitura_atual - leitura_antiga
    let valor_faturado = 0
    let bandeira = 0 
    let icms = 0
    let pis = 0
    let taxa_iluminação = 0

    if (consumo <= 30){
        console.log('>>>>> ISENTO DE TARIFA')
    }else if (consumo <= 100){
        bandeira = consumo * 0.59
        icms = 0.25 * bandeira
        pis = 0.15 * bandeira
        if (consumo >= 80){
            taxa_iluminação = 0.06 * bandeira
            valor_faturado = bandeira+icms+taxa_iluminação+pis
        }else{
            valor_faturado = bandeira+icms+pis
        }
    }else if (consumo > 100){
        bandeira = consumo * 0.75
        icms = 0.25 * bandeira
        pis = 0.15 * bandeira
        taxa_iluminação = 0.06 * bandeira
        valor_faturado =  bandeira+icms+taxa_iluminação+pis
    }

    console.log('-----TALÃO DE ENRGIA-----')
    console.log(`>> Consumo: ${consumo}KWH`)
    console.log(`>> Valor Faturado: R$${valor_faturado.toFixed(2)}`)
    console.log(`>> Bandeira: R$${bandeira}`)
    console.log(`>> ICMS: R$${icms}`)
    console.log(`>> PIS/CONFIS: R$${pis}`)
    console.log(`>> Taxa de iluminação pública R$${taxa_iluminação}`)
}

main()

