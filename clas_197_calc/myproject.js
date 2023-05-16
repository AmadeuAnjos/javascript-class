function calcular(tipo, valor) {
    console.log(tipo, valor)

    if (tipo === 'acao') {

        if (valor === 'c') {
            document.getElementById('result').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('result').value += valor
        }

        if (valor === '=') {
            var valor_campo = eval(document.getElementById('result').value)

            document.getElementById('result')
                .value = valor_campo
        }

    } else if (tipo === 'valor') {

        document.getElementById('result').value += valor
    }
}