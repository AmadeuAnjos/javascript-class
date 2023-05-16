//Function Callback

function exibirArtigo(id, callbackSucesso, callbackErro) {
    //recuperar o id via requisão http
    if (true) {
        callbackSucesso('Funções de callbackSucesso', 'Funções OK')
    } else {
        callbackErro('Função callbackErro')
    }
}
var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '<h1>')
    document.write('<hr>')
    document.write('<h3>' + descricao + '<h3>')
}

var callbackErro = function (erro) {
    document.write('<h3><b> Errro </b>' + erro + '<h3>')
}
exibirArtigo(1, callbackSucesso, callbackErro)