var imagenes=[];

imagenes[0]= "img/Arboles (1).png"
imagenes[1]= "img/colmena (7).jpg"
imagenes[2]= "img/Abejas (7).png"
imagenes[3]= "img/colmena (10).jpg"
imagenes[4]= "img/Arboles (3).png"

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
    foto= document.getElementById("carrucelpic"); 
}
/*formulario*/

console.log("COMENZAMOS");

var nombre = document.getElementById("nombre");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var radios = document.getElementsByName("radio");
var formulario = document.getElementById("formulario");
var array = [];

function validar() {

    if ( validonombre() && validotelefono() && validoemail() && validoradios()&& validoradios()) {
        array.push({ nombre: nombre.value, telefono: telefono.value, email: email.value,  comentarios: comentarios.value });
        //crearElementos();
       return true;
    }
    
    return false;
}

function validonombre() {
    if (nombre.value == "") {
        console.log("Nombre no debe estar vacio");
        document.getElementById("nombre").style.border = "1px solid red"
        nombre.focus();
        return false;
    } else {
        document.getElementById("nombre").style.border = "1px solid black"
        return true;
    }
}

function validotelefono(){
//debo validarlo por expresiones regulares preguntar el martes
    
    if(telefono.value== ""){
telefono.focus();
    telefono.style.border ="1px solid red"
return false;
}else{
    return true;
}
}

function validoemail(){
    //debo validarlo por expresiones regulares preguntar el martes
        
        if(email.value== ""){
    email.focus();
       email.style.border ="1px solid red"
    return false;
    }else{
        return true;
    }
    }


function validoradios() {
  if(radios[0].checked || radios[1].checked){
      console.log(radios.value)
      console.log("Y");
      return true;
  }else{   
    console.log("X")
      return false;
  }

}
/*
function crearDatos() {
   contenedorcreado.innerHTML = "";
    array?.forEach(aux => {
        let elemento = document.createElement("div");
        elemento.className= "creado2";
      if (aux.seleccion == "Saluda" && aux.comentarios == "") {
            elemento.innerHTML = "<p>" + aux.nombre + " Ha Saludado" + "</p>"

        } else if (aux.seleccion == "Saluda" && aux.comentarios != "") {
            elemento.innerHTML = "<p>" + aux.nombre + " deja un mensaje: " + aux.comentarios + "</p>"
        } else {
            elemento.innerHTML = "<p>" + aux.nombre + " deja una sugerencia : " + aux.comentarios + "</p>"           
        }
        contenedorcreado.appendChild(elemento)
    })
}
*/