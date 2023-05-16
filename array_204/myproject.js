
var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Pera'
lista_frutas[3] = 'Abacaxi'
lista_frutas[4] = 'Limão'
lista_frutas[5] = 'Morango'

var aux = lista_frutas.indexOf('Banana')

if (aux === -1) {
    console.log('Fruta não existe')
} else {
    console.log('Elemnto está na posição ' + aux)
}

//Método para fazer pesquisa dentro do array