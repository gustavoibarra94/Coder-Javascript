let productos = [];


function mostrarNotificacion(mensaje) {
    const notificacionCompra = document.getElementById('notificacion-compra');
    if (notificacionCompra) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = mensaje;
        notificacionCompra.appendChild(notificacion);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const jsonProductosPath = new URL('../json/juegos-de-mesa.json', window.location.href).href;
    

    function cargarProductos() {
        fetch(jsonProductosPath)
            .then(response => response.json())
            .then(data => {
                productos = data;
                mostrarProductos(productos);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function mostrarProductos(productosMostrar) {
        const productosContainer = document.getElementById('productos-container');
        productosContainer.innerHTML = '';

        productosMostrar.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'card col-md-3';
            card.innerHTML = `
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="max-width:100%; height: auto;">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">${producto.precio.toFixed(2)} ARS</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                </div>
            `;

            productosContainer.appendChild(card);
        });
    }

    function ordenarProductos(orden) {
        const productosOrdenados = [...productos];

        if (orden === 'ascendente') {
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (orden === 'descendente') {
            productosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
        }

        return productosOrdenados;
    }

    function filtrarOferta(productosFiltrados) {
        const oferta = document.getElementById('filtrar-oferta').value;

        if (oferta !== 'todos') {
            return productosFiltrados.filter(producto => producto.oferta);
        }

        return productosFiltrados;
    }

    function aplicarFiltros() {
        const orden = document.getElementById('ordenar').value;
        let productosFiltrados = ordenarProductos(orden);
        productosFiltrados = filtrarOferta(productosFiltrados);

        mostrarProductos(productosFiltrados);
    }

    cargarProductos();

    document.getElementById('ordenar').addEventListener('change', aplicarFiltros);
    document.getElementById('filtrar-oferta').addEventListener('change', aplicarFiltros);

    cargarCarrito();
});

function agregarAlCarrito(id) {
    const productoSeleccionado = productos.find(producto => producto.id === id);

    if (productoSeleccionado) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(productoSeleccionado);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        mostrarNotificacion('Producto añadido al carrito');

        
        cargarCarrito();
    }
}

