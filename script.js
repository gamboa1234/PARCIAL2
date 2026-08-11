const formulario = document.querySelector("#form-helados");
const aviso = document.querySelector("#aviso-helados");

function validarFormulario(event) {

    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;

    if (nombre == "" || correo == "") {
        event.preventDefault();
        aviso.textContent = "Falta tu nombre o tu correo - sin eso no podemos anotar el pedido.";
        aviso.classList.add("error");
        aviso.classList.remove("exito");

    } else if (!correo.includes("@")) {
        event.preventDefault();
        aviso.textContent = "Ese correo no tiene arroba - revísalo por favor.";
        aviso.classList.add("error");
        aviso.classList.remove("exito");

    } else {
        aviso.textContent = "Pedido anotado - te atiende Marco Gamboa García";
        aviso.classList.add("exito");
        aviso.classList.remove("error");
    }
}

formulario.addEventListener("submit", validarFormulario);