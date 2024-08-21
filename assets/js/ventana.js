const btnRecomendacion = document.getElementById("btn-recomendacion");
const dialogRecomendacion = document.getElementById("dialog-recomendacion");

const btnHistoria = document.getElementById("btn-historia");
const dialogHistoria = document.getElementById("dialog-historia");

btnRecomendacion.addEventListener("click", function() {
    dialogRecomendacion.showModal();
});

btnHistoria.addEventListener("click", function() {
    dialogHistoria.showModal();
});