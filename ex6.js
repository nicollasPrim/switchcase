let resposta = document.getElementById('resposta')

function verificar(){
    let dia = Number(document.getElementById('dia').value)

    num = [dia]
    if (dia ==1)
        resposta.innerHTML = "O dia da semana é domingo!"
    else if (dia ==2)
        resposta.innerHTML = "O dia da semana é segunda!"
    else if (dia ==3)
        resposta.innerHTML = "O dia da semana é terça!"
    else if (dia ==4)
        resposta.innerHTML = "O dia da semana é quarta!"
    else if (dia ==5)
        resposta.innerHTML = "O dia da semana é quinta!"
    else if (dia ==6)
        resposta.innerHTML = "O dia da semana é sexta!"
    else if (dia ==7)
        resposta.innerHTML = "O dia da semana é sábado!"
    else
        resposta.innerHTML = "Dia inválido"

    resposta.style.fontSize = "1.25rem"
    resposta.style.transition = "0.6s"
}