
function modify() {

    document.getElementById('campoo').style.background = "blue"
}

function valid() {
    var valorCampo = document.getElementById('campo').value

    if (valorCampo.length < 3) {
        document.getElementById('campo').style.background = "red"
    } else {
        document.getElementById('campo').style.background = "gray"
    }
}





