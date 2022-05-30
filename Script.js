var imagenes = [];

imagenes[0] = "img/Arboles (1).png"
imagenes[1] = "img/colmena (7).jpg"
imagenes[2] = "img/Abejas (7).png"
imagenes[3] = "img/colmena (10).jpg"
imagenes[4] = "img/Arboles (3).png"

var foto;
var cont = 0;

//derecha
function derecha() {
    if (cont < imagenes.length) {
        foto.src = imagenes[cont];
        cont++;
    } else {
        foto.src = imagenes[0];
        cont = 1;
    }
}

//izquierda
function izquierda() {
    if (cont >= 0) {
        foto.src = imagenes[cont];
        cont--;
    } else {
        foto.src = imagenes[0];
        cont = imagenes.length - 1;
    }
}

function iniciar() {
    foto = document.getElementById("carrucelpic");
}
/*formulario*/



var nombre = document.getElementById("nombre");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var radios = document.getElementsByName("radio");
var comentario = document.getElementById("comentarios")
var formulario = document.getElementById("formulario");
var array = [];

function validar() {

    if (validonombre() && validotelefono() && validoemail() && validoradios() && validoradios()) {
        array.push({ nombre: nombre.value, telefono: telefono.value, email: email.value, comentarios: comentarios.value });
        crearElementos();
    }

    return false;
}

function validonombre() {
    if (nombre.value == "") {
        console.log("Nombre no debe estar vacio");
        document.getElementById("nombre").style.border = "2px solid red"
        nombre.placeholder = "Debes Escribir tu nombre"
        nombre.focus();

        return false;
    } else {
        document.getElementById("nombre").style.border = "1px solid black"
        return true;
    }
}

function validotelefono() {
    //debo validarlo por expresiones regulares preguntar el martes

    if (telefono.value == "") {
        console.log("telefono no debe estar vacio");
        telefono.placeholder = "Debes Escribir tu telefono"
        telefono.focus();
        telefono.style.border = "2px solid red"
        return false;
    } else {
        telefono.style.border = "1px solid black"
        return true;
    }
}

function validoemail() {
    //debo validarlo por expresiones regulares preguntar el martes

    if (email.value == "") {
        console.log("pone el email");
        email.placeholder = "Te falto el email";
        email.focus();
        email.style.border = "2px solid red"
        return false;
    } else {
        email.style.border = "1px solid black"
        return true;
    }
}


function validoradios() {
    if (radios[0].checked || radios[1].checked) {


        return true;
    } else {
        console.log("X")

        return false;
    }

}

function crearElementos() {
    saludo.innerHTML = "";
    console.log("aca esta el crear elementos");
    array?.forEach(aux => {
        let elemento = document.createElement("div");
        elemento.className = "saludo2";
        if (radios[1].checked && aux.comentarios == "" || radios[1].unchecked && radios[0].unchecked) {
            elemento.innerHTML = "<p>" + "Hola " + aux.nombre + " gracias por contactarte con nosotros " + "</p>";
        } else if (radios[1].checked && aux.comentarios != "") {
            elemento.innerHTML = "<p>" + "Hola " + aux.nombre + " Gracias por contactarte con nosotros y dejarnos un mensaje " + "</p>"
        } else if (radios[0].checked && aux.comentarios != "") {
            elemento.innerHTML = "<p>" + "Hola " + aux.nombre + " Gracias por contactarte con nosotros y dejarnos un mensaje, tambien estamos contentos de que te guste nuestro sitio" + "</p>"
        } else if (radios[0].checked && aux.comentarios == "") {
            elemento.innerHTML = "<p>" + "Hola " + aux.nombre + " Gracias por contactarte con nosotros y nos alegra que te guste nuestra pagina " + "</p>"
        }
        else {
            elemento.innerHTML = "<p>" + "Hola " + aux.nombre + "</p>";
        }
        saludo.appendChild(elemento)
    })
}
