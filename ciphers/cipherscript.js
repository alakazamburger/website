const inpbox = document.getElementById("inptext")
const outbox = document.getElementById("output")
var inp = ''

// every time the text changes, this detects it
inpbox.addEventListener('input', function (event) {
    inp = event.target.value
    outbox.innerHTML = inp
})