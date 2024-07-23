function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById ("muñeco");

    let textoCifrado = texto

    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

if(texto.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/mano.jpg";  
  }else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
 }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById ("muñeco");

    let textoCifrado = texto

    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e")
    .replace(/ai/gi, "a");
    

if(texto.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg"; 
}else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
    }
}
