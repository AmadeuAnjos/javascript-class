//Function Native

var name = 'Amadeu dos Anjos Barros'

//var indice = prompt('Digite o indice: ')

document.write('Amadeu dos Anjos Barros possui ' + name.length + ' caracteres com espaçoes <br>')
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.charAt(0) + '<br>')//Mostrar qual string está no indice
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.indexOf('r') + '<br>')//Mostrar o indice da letra
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.replace('A', 4) + '<br>')//Fazer substituição do indice
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.substr(11, 5) + '<br>')//A partir do indice mostrar +indices
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.toLowerCase() + '<br>')//Minusculo
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.toUpperCase() + '<br>')//Maisuculo
document.write('Amadeu dos Anjos Barros. o indice tal = ' + name.trim() + '<br>')//Remove espaços a mais