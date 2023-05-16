//Function Math

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
