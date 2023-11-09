document.addEventListener('DOMContentLoaded', function () {
    const jsonFilePath = new URL('../json/juegos-de-mesa.json', window.location.href).href;

    let productos = []; 

   
    function cargarProductos() {
        fetch(jsonFilePath)
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
                    <p class="card-text">${producto.precio.toFixed(2)} USD</p>
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

        mostrarProductos(productosOrdenados);
    }

   
    function filtrarProductos(oferta) {
        const productosFiltrados = productos.filter(producto => {
            if (oferta === 'oferta') {
                return producto.oferta === true;
            } else {
                return true; 
            }
        });

        mostrarProductos(productosFiltrados);
    }

    cargarProductos();

    document.getElementById('ordenar').addEventListener('change', function () {
        ordenarProductos(this.value);
    });

    document.getElementById('filtrar').addEventListener('change', function () {
        filtrarProductos(this.value);
    });
});