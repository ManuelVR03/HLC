function enlaces() {
    var elementos = document.getElementsByTagName("a");
    for (i = 0; i < elementos.length; i++){
        elementos[i].onclick = function(event) {
            event.preventDefault();
            mostrarEnlace(this);
        };
    }
}

function mostrarEnlace(a){
    var enlace = a.href;
    var input = document.getElementById("enlace");
    input.style.width = "250px";
    input.value = enlace;
}

document.addEventListener('DOMContentLoaded', enlaces);