function PreEntrega1 (ejercicio) { 


// Ejercicio 1 
//**************************************************************************************************************************************************************** */
    if (ejercicio==1){


        const NombreUsuario = prompt `Por favor, ingrese su nombre y apellido`

        alert (`Bienvenido ${NombreUsuario} a la tienda online de los mejores juegos de mesa`)


        function EnvioCompra (i) { 

            switch (i) { 

                case 1: {let direccion = prompt (`Ingrese su dirección para poder realizar el envío del pedido`)
                let confirmacion = confirm(`Su articulo será enviado a la dirección ${direccion}, es correcto?`)
                
                    while (confirmacion==false) { 
                        direccion = prompt (`Por favor ingrese la dirección correcta`)
                        confirmacion = confirm (`Su articulo será enviado a la dirección ${direccion}, es correcto?`)
                    }
                }

                break; 

                case 2: {alert(`Muchas gracias por su compra, en 24hs hábiles te estará llegando la compra`)}

                break; 


                default: {alert(`error`)}
            

            }
        }


        

        function ResultadoCompra (compra) { 


            

            if (compra==true) { 
           
        
            for (let i = 1; i < 3; i++) {


            EnvioCompra (i)

            }
        
        
        
            }

            else 

            { alert ( `Muchas gracias ${NombreUsuario} por su visita`)}


        }


        function ElijaSuTipoDeJuego (decision) {
            



            switch (decision) {

                
                case "1": { let compra = confirm (`Usted eligió Party Games, el mismo tiene un valor de $125.532, ¿desea comprar este combo?`)
                
                    ResultadoCompra (compra)
            
                }
                break;

                case "2": { let compra = confirm (`Usted eligió Juegos de rol, el mismo tiene un valor de $325.532, ¿desea comprar este combo?`)

                    ResultadoCompra (compra)
                }   
                break;

                case "3": { let compra = confirm (`Usted eligió Juegos de estrategia, el mismo tiene un valor de $155.532, ¿desea comprar este combo?`)

                    ResultadoCompra (compra)

                }
                break;

                case "4": { let compra = confirm (`Usted eligió Juegos de 2 personas, el mismo tiene un valor de $126.532, ¿desea comprar este combo?`)
            
                    ResultadoCompra (compra)

                }
                break;

                case "5": { let compra = confirm (`Usted eligió Juegos para menores de 12 años, el mismo tiene un valor de $225.532, ¿desea comprar este combo?`)
            
                    ResultadoCompra (compra)

                }
                break;

                default: { decision = prompt (`El valor ingresado no corresponde a una opción válida, por favor ingrese una opción válida:
                    Ingrese 1 para Party Games
                    Ingrese 2 para juegos de rol
                    Ingrese 3 para juegos de estrategia
                    Ingrese 4 para juegos de 2 personas
                    Ingrese 5 para juego para menores de 12 años`)
            
                    ElijaSuTipoDeJuego(decision)
            
                }

                
            }

        

        }

        let decision = prompt (`¿Qué tipo de juego de mesa te interesaría comprar?
        Ingrese 1 para Party Games
        Ingrese 2 para juegos de rol
        Ingrese 3 para juegos de estrategia
        Ingrese 4 para juegos de 2 personas
        Ingrese 5 para juego para menores de 12 años`)

        ElijaSuTipoDeJuego(decision)

        }
// Ejercicio 2
//**************************************************************************************************************************************************************** */
    else if (ejercicio==2) { 

        const NombreUsuario = prompt `Por favor, ingrese su nombre y apellido`

        alert (`Bienvenido ${NombreUsuario} a la tienda online de los mejores juegos de mesa`)

       function articulos (i){ 

        switch (i) { 

        case 1: { return `Descubre cómo funciona la inteligencia artificial y su impacto en la vida cotidiana. #InteligenciaArtificial #Tecnología` }

        break;

        case 2: { return `Python y JavaScript son lenguajes esenciales para la programación web. Aprende a dominarlos y desbloquea un mundo de oportunidades. #Programación #DesarrolloWeb` }

        break;

        case 3: { return `La ciberseguridad es crucial en la era digital. Aprende las mejores prácticas para proteger tus datos en línea. #Ciberseguridad #Privacidad` }

        break;

        case 4: { return `La nube (cloud computing) está cambiando la forma en que almacenamos y accedemos a datos. Descubre las ventajas de esta tecnología para tu negocio. #CloudComputing #Tecnología` }

        break;

        case 5: { return `Blockchain está revolucionando la seguridad en línea. Descubre cómo esta tecnología está transformando industrias enteras. #Blockchain #SeguridadDigital` }

        break;



        }

       }
       
       
        function EstadisticasArticulos (i) {

            let megusta =  confirm (`${articulos(i) }` + ` 
            ¿Te gustó el artículo?`)

            if (megusta == true)
            {likes ++ }

            else { 
                dislikes ++
            }

            console.log (`Hay ${likes} Likes`)
            console.log (`Hay ${dislikes} dislikes`)

        }

        let likes = 0
        let dislikes = 0


        for (let i = 1; i < 6; i++) {

        EstadisticasArticulos (i)


        }


        alert (`De todos los artículos que viste, te gustaron ${likes} y fueron ${dislikes} los que no te gustaron`)

        }



 // Ejercicio Incorrecto
//**************************************************************************************************************************************************************** */       
    else{ ejercicio = prompt (`El valor ingresado no es correcto:
            Ingrese 1 para el primer caso y 2 para el segundo`)
            PreEntrega1(ejercicio)
        }


        



}

let ejercicio = prompt (`Ingrese 1 para el primer caso y 2 para el segundo`)

PreEntrega1 (ejercicio)

