document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var comentario = document.getElementById('comentario').value.trim();

    if (nombre.length < 3) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (apellido.length < 3) {
        alert('Por favor, ingresa un apellido válido.');
        return;
    }

    if (!email.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    if (comentario.length < 5) {
        alert('Por favor, ingresa un comentario válido.');
        return;
    }

    document.getElementById('formulario-contacto').reset();


    alert('Formulario enviado con éxito!');
}



