var num1 = prompt('Digite um número')
var operacao = prompt('Qual operação deseja, Soma ou Subtração ?')
var num2 = prompt('Digite outro número')

num1 = parseInt(num1)
num2 = parseInt(num2)

function calculo(num1, num2, operacao) {

    if (operacao === 'subtração' || operacao === 'SUBTRAÇÃO' || operacao === 'Subtração' || operacao === 'subtracao') {
        result = num1 - num2
        document.write('O resultado é: ' + result)
    } else if (operacao === 'soma' || operacao === 'SOMA' || operacao === 'Soma') {
        result = num1 + num2
        document.write('O resultado é: ' + result)
    } else {
        document.write('Insira uma operação correspondente: <br> Subtração <br> SUBTRAÇÃO <br> subtração <hr>')
        document.write('Insira uma operação correspondente: <br> Soma <br> SOMA <br> soma')

    }
}

calculo(num1, num2, operacao)


/*Function Math

var x = Math.ceil(10.380)//Sempre arredpnda para mais
var xy = Math.floor(10.380)//Sempre arredonda para menos
var ab = Math.round(10.580)//Sempre arredonda a média
var c = Math.random()//Valores randomicos entre 0 e 1
var y = prompt('Digite um valor fracioonado:')
var yz = prompt('Digite um valor fracioonado:')
var a = prompt('Digite um valor fracioonado:')

y = parseFloat(y)
yz = parseFloat(yz)
a = parseFloat(a)

document.write(x + '<br>')
document.write(Math.ceil(y) + '<br><br>')

document.write(xy + '<br>')
document.write(Math.floor(yz) + '<br><br>')

document.write(ab + '<br>')
document.write(Math.round(a) + '<br>')

document.write(c.toFixed(2))
*/