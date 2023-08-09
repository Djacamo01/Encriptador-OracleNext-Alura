// Funciones de encriptación y desencriptación

function encriptar(mensaje) {
    return mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(mensajeEncriptado) {
    return mensajeEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Manejo del DOM

document.addEventListener("DOMContentLoaded", () => {
    const areaTexto = document.getElementById("areaTexto");
    const areaTextoEncriptado = document.getElementById("areaTextoEncriptado");
    const botonEncriptar = document.getElementById("botonEncriptar");
    const botonDesencriptar = document.getElementById("botonDesencriptar");
    const botonCopiar = document.getElementById("botonCopiar");

    botonEncriptar.addEventListener("click", () => {
        const mensaje = areaTexto.value.toLowerCase();
        const mensajeEncriptado = encriptar(mensaje);
        areaTextoEncriptado.value = mensajeEncriptado;
    });

    botonDesencriptar.addEventListener("click", () => {
        const mensaje = areaTexto.value.toLowerCase();
        const mensajeDesencriptado = desencriptar(mensaje);
        areaTextoEncriptado.value = mensajeDesencriptado;
    });

    botonCopiar.addEventListener("click", () => {
        areaTextoEncriptado.select();
        document.execCommand("copy");
    });
});
