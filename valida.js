let alterar = ""

function capturar() {
    alterar = form.grauId.value
    alterar = alterar.replace(/,/g, '.')
    if (alterar.match(/^\+/g)) {
        alterar = alterar.replace(/^\+/g, '')
    }
    if (alterar.match(/[0-9]{1,2}[\.]/g)) {

    } else {
        alterar = alterar.replace(/[0-9]{1,2}$/g, `${alterar}.00`)
    }
    if (alterar.match(/--/g)) {
        alterar = alterar.replace(/--/g, '-')
    }
    document.getElementById("grauId").value = alterar
        //window.location.href = 'recebe.php'
}