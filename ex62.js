let resposta = document.getElementById('resposta')

function verificar(){
    let dia = Number(document.getElementById('dia').value)

    num = [dia]

    switch (dia) {
        case 1:
            resposta.innerHTML = "O dia da semana é domingo!"
            
            break;
        case 2:
            resposta.innerHTML = "O dia da semana é segunda!"
                
            break;
        case 3:
            resposta.innerHTML = "O dia da semana é terça!"
            
            break;
        case 4:
            resposta.innerHTML = "O dia da semana é quarta!"
                
            break;
        case 5:
            esposta.innerHTML = "O dia da semana é quinta!"
                    
            break;
        case 6:
            resposta.innerHTML = "O dia da semana é sexta!"
                
            break;
        case 7:
            resposta.innerHTML = "O dia da semana é sábado!"
                    
            break;
    
        default:
            resposta.innerHTML = "O dia da semana está inválido!"
            break;
    }
}