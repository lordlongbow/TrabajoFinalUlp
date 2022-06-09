var imagenes = [];

imagenes[0] = "/Arboles (1).png"
imagenes[1] = "/colmena (7).jpg"
imagenes[2] = "/Abejas (7).png"
imagenes[3] = "/colmena (10).jpg"
imagenes[4] = "/Arboles (3).png"

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
var saludo = document.getElementById("saludo");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var radios = document.getElementsByName("radio");
var comentario = document.getElementById("comentarios")
var formulario = document.getElementById("formulario");
var x = document.getElementById("x");
var y= document.getElementById("y");
var z= document.getElementById("z");
var array = [];
var freno = document.createElement("div");
freno.className="saludo2";
var str = "";

function envio() {
    if (validar()) {
        crearElementos();
    }
    return false;
}

function validar() {
    if (validonombre() && validotelefono() && validoemail() && validoradios()) {
        array.push({ nombre: nombre.value, telefono: telefono.value, email: email.value, comentarios: comentarios.value });
        return true;
    }
    return false;
}

function validonombre() {
    if (nombre.value == "" || !isNaN(nombre.value)) {
        document.getElementById("nombre").style.border = "2px solid red"
        nombre.focus();
        str = "Debes Escribir tu nombre";   
        freno.innerHTML= "<p>" + str + "</p>"; 
        x.appendChild(freno);
  
        return false;
    } else {
        document.getElementById("nombre").style.border = "1px solid black"
        freno.innerHTML=""
        return true;
    }
}

function validotelefono() {
    var telRex = /^[(]?\d{3,6}[)]?[\d-\s.]{6,10}$/;
    if (isNaN(telefono.value) || telefono.value == "" || !telRex.test(telefono.value)) {
        telefono.focus();
        telefono.style.border = "2px solid red"
        str = "Debes Escribir tu telefono";   
        freno.innerHTML= "<p>" + str + "</p>"; 
        y.appendChild(freno);
        return false;
    } else  {
        freno.innerHTML="";
        telefono.style.border = "1px solid black"
        return true;
    }
}

function validoemail() {
   
    var mailRex =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    if (email.value == "" || mailRex.test(email.value)) {
        email.focus();
        email.style.border = "2px solid red"
        str = "Debes Escribir un email valido";   
        freno.innerHTML= "<p>" + str + "</p>"; 
        z.appendChild(freno);
        return false;
    } else {
        freno.innerHTML="";
        email.style.border = "1px solid black"
        return true;
    }
}


function validoradios() {
    if (radios[0].checked || radios[1].checked) {
        return true;
    } else {
        return false;
    }
}

function crearElementos() {
   
    array?.forEach(aux => {
        let elemento = document.createElement("div");
        elemento.className = "saludo2";
        saludo.innerHTML = "";
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