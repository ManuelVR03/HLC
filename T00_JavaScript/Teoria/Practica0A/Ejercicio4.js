var notaPracticas = parseFloat(prompt("Introduce la nota de las prácticas: "));
var notaExamen = parseFloat(prompt("Introduce la nota del examen: "))*0.8;
var notaActitud = parseFloat(prompt("Introduce la nota de actitud: "))*0.2;
var media = (notaPracticas+(notaExamen+notaActitud))/2;
var aprobado;
if (media >= 5)
    aprobado = ". Está aprobado";
else
    aprobado = ". Está suspenso";
    document.body.insertAdjacentHTML('beforeend', `<h4>Su nota media es ${media.toFixed(2)}${aprobado}.</h4>`);
