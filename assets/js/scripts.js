const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#navbarSupportedContent li a").click(function(){
    $(this).css("color", "red");
})

$("#avion").click(function(){
    $("#tarjeta1").toggle();
})
$("#montaña").click(function(){
    $("#tarjeta2").toggle();
})
$("#ruta").click(function(){
    $("#tarjeta3").toggle();
})
$(".card-img-top").click(function(){
    $("#carta1, #carta2, #carta3, #carta4").toggle();
})
$(function(){
    $("$boton1").tooltip();
})