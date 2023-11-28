document.addEventListener('DOMContentLoaded', function () {
    const carritoActual = document.getElementById('carrito-actual');
    const carritoTotal = document.getElementById('carrito-total');
    const botonComprar = document.getElementById('boton-comprar');



    function cargarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

       // carritoActual.innerHTML = '';

       if (carritoActual && carritoTotal) {
        carritoActual.innerHTML = '';

        carrito.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.style.maxWidth = '540px';

            const row = document.createElement('div');
            row.className = 'row g-0';

            const colImg = document.createElement('div');
            colImg.className = 'col-md-4';

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;
            img.className = 'img-fluid rounded-start';
            colImg.appendChild(img);

            const colBody = document.createElement('div');
            colBody.className = 'col-md-8';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = producto.nombre;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = `Precio unitario: ${producto.precio.toFixed(2)} ARS`;

            const eliminarButton = document.createElement('button');
            eliminarButton.className = 'btn btn-danger';
            eliminarButton.textContent = 'Eliminar';
            eliminarButton.addEventListener('click', () => eliminarDelCarrito(producto.id));

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(eliminarButton);

            colBody.appendChild(cardBody);
            row.appendChild(colImg);
            row.appendChild(colBody);
            card.appendChild(row);

            carritoActual.appendChild(card);
        });

        const precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
        carritoTotal.textContent = `TOTAL: ${precioTotal.toFixed(2)} ARS`;
    } else {

        console.error ('Los elementos carrito-actual o carrito-total no fueron encontrados en el DOM.')
    }
}
    

    function comprar() {

        vaciarCarrito();

        alert('¡Gracias por su compra!');
    }

    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        cargarCarrito();
    }

    

    function eliminarDelCarrito(id) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const indiceProducto = carrito.findIndex(producto => producto.id === id);
    
        if (indiceProducto !== -1) {
            carrito.splice(indiceProducto, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            cargarCarrito();
        }
    }

    cargarCarrito();

    botonComprar.addEventListener('click', comprar);
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
});