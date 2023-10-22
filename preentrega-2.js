function PreEntrega2 (ejercicio) { 


    // Ejercicio 1 
    //**************************************************************************************************************************************************************** */
        if (ejercicio==1){


            const NombreUsuario = prompt `Por favor, ingrese su nombre y apellido`

            alert (`Bienvenido/a ${NombreUsuario} a la tienda online de los mejores juegos de mesa`)

    
            }
    // Ejercicio 2
    //**************************************************************************************************************************************************************** */
        else if (ejercicio==2) { 

            const NombreUsuario = prompt `Por favor, ingrese su nombre y apellido`

            alert (`Bienvenido/a ${NombreUsuario} a la red social de Rick & Morty`)

    
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
    
    