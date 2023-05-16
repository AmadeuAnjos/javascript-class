var lista = ['viv', 'lucas', 'fifi' , 'tut']


var x = function(valor, indice) {
    console.log(valor, indice)    
}

lista.forEach(x)


/* console.log(lista)
document.write(lista[1])

lista.forEach(function(valor, indice, array) {
    console.log('indice ' + indice + ' | valor: ' + valor)
    
    if(valor == 'lucas'){
        array[indice] = 'Lucas Anjos'
    }
})

console.log(lista)
document.write('<br>' + lista[1])  */