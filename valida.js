let alterar = ""

function capturar() {
    alterar = form.grauId.value
    if (alterar.match(/^\+/g)) {
        alterar = alterar.replace(/^\+/g, '')
    }
    if (alterar.match(/\,/g)) {
        alterar = alterar.replace(/,/g, '.')
    }
    document.getElementById("grauId").value = alterar
        //window.location.href = 'recebe.php'
}