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