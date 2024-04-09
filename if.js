//correr en consola del navagador



if (true) {        //para que if funcione el parametro debe ser verdadero
     console.log("Hola, Mundo");
}



if (false){   // no va a pasar lo de adentro de los corchetes porque el parametro es falso
    console.log("Hola Mundo"); 
}

// aqui se muestra un ejemplo de como se puede usar con una condicion if false

if(false){   
    console.log("Hola, Mundo");  
} else{
    console.log("Soy falso"); //esta es la condicion que se va a cumplir
}

//if, else-if, else

var edad = 18;


if (edad === 18){
    console.log("Ya puedes votar por primera vez");
} else if ( edad > 18 ) {    
    console.log("Bienvenido nuevamente a las votaciones");
} else {
    console.log("aun no puedes votar");
}



 //else if se puede anidar tanto como sea necesario

 var edad = 18;


if (edad === 18){
    console.log("Ya puedes votar por primera vez");
} else if ( edad > 18 ) {    
    console.log("Bienvenido nuevamente a las votaciones");
}       
    else if ( edad > 40 ) {    
        console.log("Bienvenido nuevamente a las votaciones es usted un cuarenton");
    }
        else if ( edad > 65 ) {    
            console.log("Bienvenido nuevamente a las votaciones, señor de la tercera edad");
            } else {
    console.log("aun no puedes votar");
                }

/*OPERADOR TERNARIO

LA SINTAXIS ES:

                condition ? true : false;

    */

var numero = 1; // se estara cambiando por otro numero para poder ejemplificar

var resultado = numero === 1 ? "Si, si soy un uno" : "No, no soy un uno";



        // se checa en el navegador con un console.log

console.log(resultado); //"si, si soy un uno"

    //en este caso va a arrojar el string de la primera condicion