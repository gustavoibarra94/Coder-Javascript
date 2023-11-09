// DARK MODE

const botonModoOscuro = document.getElementById('modo-oscuro');
const body = document.body;

const modoWebClaroOscuro = localStorage.getItem('modo-web-claro-oscuro');

if (modoWebClaroOscuro === 'oscuro') {
    body.classList.add('dark-mode');
}

botonModoOscuro.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('modo-web-claro-oscuro', 'claro');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('modo-web-claro-oscuro', 'oscuro');
    }
});


//********************************************************************/

