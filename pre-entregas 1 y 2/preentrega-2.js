function PreEntrega2 (ejercicio) {


    // Ejercicio 1
    //**************************************************************************************************************************************************************** */
        if (ejercicio==1){


            // Bienvenida del usuario

            const NombreUsuario = prompt `Por favor, ingrese su nombre y apellido`

            alert (`Bienvenido/a ${NombreUsuario} a la tienda online`)


            // Obtener Array de articulos seleccionados

            const ropaHombre = products.filter((productos) => productos.category === "men's clothing");
            console.log(ropaHombre)

            
            const ropaMujer = products.filter((productos) => productos.category === "women's clothing");
            console.log(ropaMujer)

            const articulos = ropaHombre.concat(ropaMujer);

            console.log(articulos)


            // Obtener fechas y darle formato

            const fechaActual = new Date ();

            const fechaEntrega = new Date (fechaActual);

            fechaEntrega.setDate(fechaActual.getDate()+2);

            const formatoFecha = { year: 'numeric', month: 'long', day: 'numeric'};

            //Declaro la fecha Actual con Formato por si es necesario usarla en un futuro, no se utilizará para este ejercicio

            const fechaActualConFormato = fechaActual.toLocaleDateString('es-ES', formatoFecha);
            const fechaEntregaConFormato = fechaEntrega.toLocaleDateString('es-ES', formatoFecha);

            // Se calcula la diferencia de días en ms y días.

            const diferenciaTiempo = fechaEntrega - fechaActual; 
            const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));


            // Comienzo

            const categoriasUnicas = []

            console.log(categoriasUnicas)


             articulos.forEach((articulos) => {

            const aux = categoriasUnicas.find ((categoria) => categoria === articulos.category);
            if(aux === undefined){

                categoriasUnicas.push (articulos.category)  

            }

          });

          alert(`Las categorias disponibles son: ${categoriasUnicas}`)

          articulos.sort ((a, b) => a.title.localeCompare(b.title));

          console.log(articulos)

          const listadoDeArt = [];

          articulos.forEach((articulos) => {

            const aux = listadoDeArt.find ((title) => title === articulos.title);
            if(aux === undefined){

                listadoDeArt.push (articulos.title)  

            }

          });



          function busquedaProducto (nombreProducto) { 

            

            const productoElegido = articulos.find ((articulos) => articulos.title === nombreProducto)

            console.log (productoElegido)
            

            if (productoElegido === undefined) { 

                console.log (`error`)
                nombreProducto = prompt (`El articulo ingresado no es correcto, por favor vuelva a ingresarlo, tené en cuenta que tiene que ser el nombre con mayúsculas, exacto y completo. Recuerde que los articulos disponibles para la compra son: ${listadoDeArt.join ( ` /// `)}`)
                busquedaProducto (nombreProducto)
            }

            else { 

                console.log (`ok`)
                compraRealizara = confirm ( `Tu artítuclo elegido es ${productoElegido.title}, ${productoElegido.description} y su precio es ${productoElegido.price}. Desea realizar la compra?` )

                if (compraRealizara === true) {

                    alert (`Muchas gracias ${NombreUsuario} por la compra realizada. Su compra llegará dentro de ${diferenciaDias} días, el día ${fechaEntregaConFormato} `)

                }

                else {

                    alert (`Compra Cancelada. Muchas gracias ${NombreUsuario} por utilizar nuestra tienda online, te esperamos nuevamente!`)

                }

            }



         

            console.log (nombreProducto)



            }

            

         const nombreProducto = prompt(`Los articulos disponibles para la compra son: ${listadoDeArt.join ( ` /// `)} por favor ingrese el nombre del articulo que desea comprar.`)


         busquedaProducto (nombreProducto)




         }


    // Ejercicio 2
    //**************************************************************************************************************************************************************** */
        else if (ejercicio==2) {

            // Bienvenida al usuario
            
            const NombreUsuario = prompt `Por favor, ingrese su nombre y apellido`

            alert (`Bienvenido/a ${NombreUsuario} a la red social de Rick & Morty`)


            // Randomize de Pj


            idPersonaje = Math.floor(Math.random() * 20) + 1;

            console.log (idPersonaje)



            const personajeAzar = data.find ((data) => data.id === idPersonaje);


            console.log (personajeAzar)



            alert ( `Tu personaje elegido al azar es ${personajeAzar.name}, su ubicación es ${personajeAzar.location.name} y su genero es ${personajeAzar.gender}` )


            console.log (data)


            data.sort ((a, b) => b.name.localeCompare(a.name));


            // Primer valor de PJ de Z - A

           alert (`El último personaje en orden alfabético es ${data[0].name} `)

            const nombrePersonaje = prompt (`Por favor ingresá el nombre de la persona que estas buscando, tené en cuenta que tiene que ser el nombre con mayúsculas, exacto y completo`)
           
            function busquedaPersonaje (nombrePersonaje) { 

            // Elegir PJ y mostrar DATA

            const personajeElegido = data.find ((data) => data.name === nombrePersonaje)

            console.log (personajeElegido)
            

            if (personajeElegido === undefined) { 

                console.log (`error`)
                nombrePersonaje = prompt (`El nombre ingreso no es correcto, por favor vuelva a ingresar el nombre de la persona que estas buscando, tené en cuenta que tiene que ser el nombre con mayúsculas, exacto y completo`)
                busquedaPersonaje (nombrePersonaje)
            }

            else { 

                console.log (`ok`)
                alert ( `Tu personaje elegido es ${personajeElegido.name}, su ubicación es ${personajeElegido.location.name} y su genero es ${personajeElegido.gender}` )

            }

         

            console.log (nombrePersonaje)



            }

            busquedaPersonaje (nombrePersonaje)
        }



     // Ejercicio Incorrecto
    //**************************************************************************************************************************************************************** */
        else{ ejercicio = prompt (`El valor ingresado no es correcto:
                Ingrese 1 para el primer caso y 2 para el segundo`)
                PreEntrega2(ejercicio)
            }






    }

    let ejercicio = prompt (`Ingrese 1 para el primer caso y 2 para el segundo`)

    PreEntrega2 (ejercicio)

