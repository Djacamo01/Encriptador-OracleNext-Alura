document.addEventListener("DOMContentLoaded", function () {
    const botonEncriptar = document.getElementById("botonEncriptar");
    const botonDesencriptar = document.getElementById("botonDesencriptar");
    const botonCopiar = document.getElementById("botonCopiar");
    const areaTexto = document.getElementById("areaTexto");
    const areaTextoEncriptado = document.getElementById("areaTextoEncriptado");

    botonEncriptar.addEventListener("click", function () {
        const mensaje = areaTexto.value;
        const mensajeEncriptado = encriptar(mensaje);
        areaTextoEncriptado.value = mensajeEncriptado;
    });

    botonDesencriptar.addEventListener("click", function () {
        const mensajeEncriptado = areaTextoEncriptado.value;
        const mensaje = desencriptar(mensajeEncriptado);
        areaTexto.value = mensaje;
    });

    botonCopiar.addEventListener("click", function () {
        areaTextoEncriptado.select();
        document.execCommand("copy");
    });

    function encriptar(texto) {
        const mapaEncriptacion = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };

        return texto.split("").map(char => mapaEncriptacion[char] || char).join("");
    }

    function desencriptar(textoEncriptado) {
        const mapaDesencriptacion = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };

        return textoEncriptado.split(" ").map(word => mapaDesencriptacion[word] || word).join("");
    }
});
