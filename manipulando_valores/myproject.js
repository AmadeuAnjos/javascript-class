function distribui() {

    //Selecionar o valor digitado
    var caracter = document.getElementById('entrada').value

    //Limpar o campo de digitação
    document.getElementById('entrada').value = ''

    //Limpar espaços em branco nas extremidades da string
    caracter.trim()

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('numero').value += caracter
            break;
        default:
            document.getElementById('letras').value += caracter
    }

}

