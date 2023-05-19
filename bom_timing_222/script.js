
//setTimeout(function() { document.write('Teste') }, 5000)


var i = 10

var x =  setInterval(function() { document.write(i + '<br>')
i--
if(i === 5) {
    //window.location.href = "https://google.com"
    //window.location.reload()
    clearInterval(x)
}

}, 1000)
