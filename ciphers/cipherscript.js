const plainbox = document.getElementById("plaintextbox")
var plain = ''
// const rot13box = document.getElementById("rot13box")
// var rot13 = ''
const rot13div = document.getElementById("rot13box")
const atbashdiv = document.getElementById("atbashbox")

// every time the plaintext box changes, this detects it
plainbox.addEventListener('input', function (event) {
    plain = event.target.value
    // rot13box.innerHTML = toRot13(plain)
    rot13div.innerHTML = toRot13(plain)
    atbashdiv.innerHTML = toAtbash(plain)
})

/*
// check for changing rot13box
rot13box.addEventListener('input', function (event) {
    rot13 = event.target.value
    plainbox.innerHTML = toRot13(rot13)
})
*/

function toRot13(text) {
    var out = ''
    for (i = 0; i < text.length; i++) {
        // char code
        var cc = text.charCodeAt(i)

        // check for space
        if (cc == 32) {
        	out = out + ' '
          continue
        }

        // get rid of non-alphanumeric characters
        if (isInAlphabet(cc) == false) continue

        // now apply the rot13
        if (cc <= 77 || (cc <= 109 && cc >= 97)) { // if (<= M) OR (<= m AND >= a); in other words, on the left half of the alphabet
            out = out + String.fromCharCode(cc + 13)

        } else { // it's on the right half of the alphabet
            out = out + String.fromCharCode(cc - 13)
        }
    }
    return out
}

function toAtbash(text) {
    var out = ''
    for (i = 0; i < text.length; i++) {
        // char code
        var cc = text.charCodeAt(i)

        // check for space
        if (cc == 32) {
        	out = out + ' '
          continue
        }

        // get rid of non-alphanumeric characters
        if (isInAlphabet(cc) == false) continue
        
        console.log(cc)
        
        // now apply the atbash
        if (cc >= 65 && cc <= 90) { // uppercase
            var place = cc-64 // A=1, Z=26
            var newCc = (27-place) + 96 // (flip letter) + <make it lowercase>
            out = out + String.fromCharCode(newCc)

        } else { // lowercase
            var place = cc-96 // a=1, z=26
            var newCc = (27-place) + 64 // (flip letter) + <make it uppercase>
            out = out + String.fromCharCode(newCc)
        }
    }
    return out
}

// this receives the char code and checks if it's in the alphabet or not (IGNORING SPACE)
function isInAlphabet(l) {
    if ((l < 65 || (l > 90 && l < 97) || l > 122)) {return false} else return true
    // check for (before A) OR (between Z and a) OR (after z)
}