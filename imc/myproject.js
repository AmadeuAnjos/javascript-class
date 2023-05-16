var name = prompt('Digite seu nome')
var altura = prompt('Digite sua altura em cm')
var peso = prompt('Digite seu peso')

altura = (parseFloat(altura))
peso = (parseFloat(peso))

altura = altura / 100

var massa = peso / (altura * altura)

massa = massa.toFixed(2)

document.write(name + ' sua massa corporal é ' + massa + '<br>')

if (massa <= 16.00) {
    document.write('Peso baixo, Precisa comer danado(a) <br>')
} else if (massa > 16.00 && massa <= 16.99) {
    document.write('Peso baixo, grave !')
} else if (massa >= 17.00 && massa <= 18.49) {
    document.write('Peso baixo !')
} else if (massa >= 18.50 && massa <= 24.99) {
    document.write('Peso normal !')
} else if (massa >= 25.00 && massa <= 29.99) {
    document.write('Sobrepeso !')
} else if (massa >= 30.00 && massa <= 34.99) {
    document.write('Obesidade grau 1 !')
} else if (massa >= 35.00 && massa <= 39.99) {
    document.write('Obesidade grau 2 !')
} else if (massa >= 40.00) {
    document.write('Obesidade grau 3 !')
} else {
    document.write('Insira dados correto')
}
