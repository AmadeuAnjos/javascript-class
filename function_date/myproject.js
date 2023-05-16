//Function Date

var data = new Date()

document.write(data.getDate() + '/ ')
document.write(data.getMonth() + 1 + '/ ') // JS conta os meses de 0 a 11 ou seja temos que adicionar +1 
document.write(data.getFullYear())
document.write('<br><br><hr>')


//Adicionando e removendo dia - Add and remove days
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<hr>')
data.setDate(data.getDate() - 2)
document.write(data.toString())
document.write('<br><br><br><hr>')

//Adicionando e removendo mês -  Add and remove month
document.write(data.toString())
data.setMonth(data.getMonth() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<hr>')
data.setMonth(data.getMonth() - 2)
document.write(data.toString())
document.write('<br><br><br><hr>')

//Adicionando e removendo ano -  Add and remove year
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<hr>')
data.setFullYear(data.getFullYear() - 2)
document.write(data.toString())
document.write('<br><br><br><hr>')

//15/01/2017 and 23/02/2017
var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)
document.write(data1.toString())
document.write('<hr>')
document.write(data2.toString())

document.write('<br><br><br><hr>')

//Convertendo as datas para algum valor que possa ser calculado
document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())
document.write('<br><br><br><hr>')


//Encontrar a quantidade de milisegundos entre as datas
milissegundo_entre_datas = Math.abs(data1.getTime() - data2.getTime())
milisegundos_em_dia = (1 * 24 * 60 * 60 * 1000)

document.write(Math.ceil(milissegundo_entre_datas / milisegundos_em_dia) + ' dias de diferença')



