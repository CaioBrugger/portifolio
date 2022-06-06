function calculate() {

    //Pegando info do DOM

    let height = Number(document.getElementById('height').value) / 100
    let weight = Number(document.getElementById('weight').value)
    let age = Number(document.getElementById('age').value)
    let exercicioFisicoSemanal = document.querySelector("select[name='exercicio_semanal'] option:checked").value
    let genero = document.querySelector("input[name='genero']:checked").value
    let objetivo = document.querySelector("input[name='objetivo']:checked").value
    

    // IMC
    let imc = weight / height ** 2
    let msg_imc = ''

    if (imc < 18.5) {
        msg_imc = "Você esta magro demais"
    } else if (imc < 24.9) {
        msg_imc = "Você está normal"
    } else if (imc < 29.9) {
        msg_imc = "Você está com sobrepeso"
    } else if (imc < 39.9) {
        msg_imc = "Você está com obesidade"
    }  else if (imc > 39.9) {
        msg_imc = "Melhor já deixar o plano funerário em dia"
    }

    //Gasto Calórico
    let gastoCalorico = 0
    let fatorAtividade = 0
    let caloriasTotais = 0

    //Gasto Calórico - Exercício Físico Semanal
    if (exercicioFisicoSemanal == 'sedentario') {
        fatorAtividade = 1
    } else if (exercicioFisicoSemanal == 'pouco_exercicio') {
        fatorAtividade = 1.2
    } else if (exercicioFisicoSemanal == 'medio_exercicio') {
        fatorAtividade = 1.5
    } else if (exercicioFisicoSemanal == 'alto_exercicio') {
        fatorAtividade = 1.7
    } else if (exercicioFisicoSemanal == 'atleta_exercicio') {
        fatorAtividade = 2
    }

    //Gasto Calórico - Gênero
    if (genero == 'masculino') {
        gastoCalorico = Math.round(fatorAtividade * (66.47 + (13.75 * weight) + (5 * height * 100) - (6.8 * age)))
    } else if (genero == 'feminino') {
        gastoCalorico = Math.round(fatorAtividade * (65.5 + (9.6 * weight) + (1.8 * height * 100) - (4.7 * age)))
    }

    //Gasto Calórico - Objetivo
    if (objetivo == 'perder') {
        caloriasTotais = gastoCalorico - 500
    } else if (objetivo == 'manter') {
        caloriasTotais = gastoCalorico
    } else if (objetivo == 'ganhar') {
        caloriasTotais = gastoCalorico + 500
    }

    //Dietinha
    let proteina = Math.round((caloriasTotais * 0.3) / 4)
    let gordura = Math.round((caloriasTotais * 0.35) / 9)
    let carboidrato = Math.round((caloriasTotais * 0.35) / 4)


    //Mensagem Final
    document.getElementById('text_area').innerText = 'Seu IMC é de: ' + Math.round(imc) + ' (' + msg_imc + ')' +    
                                                    '\n-------------------------------------------------------' + 
                                                    '\nSeu Gasto calórico diário é: ' + gastoCalorico + 'Kcal' +
                                                    '\n-------------------------------------------------------' + 
                                                    '\nSua dieta baseada no seu objetivo será: \n\n' +
                                                    '- ' + carboidrato + 'g de Carboidrato\n' +
                                                    '- ' + proteina + 'g de Proteína\n' + 
                                                    '- ' + gordura + 'g de Gordura'
}