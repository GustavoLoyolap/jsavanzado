//estructura de control de flujo
const nombre=prompt("ingresa tu nombre");

let mensaje="";

switch(nombre){
    case "carlos":
    mensaje="eres administrador";
    break;
    
    case "Juan":
    mensaje="eres usuario";
    break;

    default:
    mensaje="no tienes permisos del sistema";
    break;


}




/*const edad=parseInt(prompt("ingresa tu edad"));

let mensaje="";

switch(edad){
    case 18:
        mensaje = "Acaba de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "ya eres un adulto";
        break;
    case 70:
            mensaje = "ya eres de la tercera edad";
            break;   
    default:
        mensaje="Fuera del rango de edad" ;
        break;       
}

document.write(`<p>${mensaje}</p>`);*/