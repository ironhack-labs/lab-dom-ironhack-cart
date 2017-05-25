$(document).ready(function() {

$(".btn-success").click(function(event) {
  var priceString = $(".productPrice").text();
  var price = parseInt(priceString.replace("$",""));
  var quantity = $("#inputQTY").val();

  $(".totalPrice").text("$" + (price * quantity));
  console.log("hola");
});

var x = $(".row");

// agrega otro producto

$(".row").clone().prepend(".container");





});
