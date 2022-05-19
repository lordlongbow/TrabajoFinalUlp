var imagenes=[];

imagenes[0]= "Arboles (1)"
imagenes[1]= "colmena (7)"
imagenes[2]= "Abejas (7)"
imagenes[3]= "colmena (10)"
imagenes[4]= "Arboles (3)"
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
    foto = document.getElementById(carrucelpic);
}