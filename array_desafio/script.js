 var lista = Array()

lista[0] = 'um'
lista[1] = 'dois'
lista[2] = 'tres'
lista[3] = 'quatro'
lista[4] = 'cinco'
lista[5] = 'seis'
lista[6] = 'sete'
lista[7] = 'oito'
lista[8] = 'nove'
lista[9] = 'dez'

for (var i = 0; i < lista.length; i++) {
    document.write(lista[i] + '<br>')
}

var ready = lista.map(function(elemento) {
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
})

console.log(ready)
