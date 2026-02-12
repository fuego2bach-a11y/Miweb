function pedirClave() {
    let clave = prompt("Introduce la contraseña:");

    // Validación oculta
    if (validarClave(clave)) {
        window.location.href = "privado.html";
    } else {
        alert("Contraseña incorrecta");
    }
}

function validarClave(input) {
    return btoa(input) === "MTMyNA==";
}
