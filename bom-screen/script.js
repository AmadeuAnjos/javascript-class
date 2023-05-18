var largura = window.screen.availWidth
var alt = window.screen.availHeight

document.write('A altura = ' + alt + '<br>')
document.write('A largura = ' + largura + '<br>')

if(largura < 500){
    document.write('mobile')
}else if (largura > 500 && largura < 900){
    document.write('tablet')
} else {
    document.write('web')
}