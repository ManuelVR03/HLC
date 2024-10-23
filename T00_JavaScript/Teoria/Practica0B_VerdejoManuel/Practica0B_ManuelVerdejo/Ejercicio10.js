var parrafo = document.getElementsByTagName("p")[0];

function Aumentar(){
    let fontSize = parseInt(window.getComputedStyle(parrafo).fontSize);
    parrafo.style.fontSize = (fontSize + 1) + "px";
}

function Disminuir(){
    let fontSize = parseInt(window.getComputedStyle(parrafo).fontSize);
    parrafo.style.fontSize = (fontSize - 1) + "px";
}