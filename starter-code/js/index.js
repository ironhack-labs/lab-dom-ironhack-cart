$(document).ready(function() {

  $(".image").hide();

  $(".btn-success").click(function(event) {
  var total = 0;

    for (var i = 0; i <= $(".mainRow").length-1; i++) {
      var priceString = $(".mainRow .productPrice").eq(i).text();
      var price = parseInt(priceString.replace("$",""));
      var quantity = $(".mainRow .col-xs-4 input").eq(i).val();
      $(".mainRow .totalPrice").eq(i).text("$" + (price * quantity));
      total += (price * quantity);
    }

    $(".finalNumber").text("$" + total);
    $(".image").show("slow");

  });

  $(".btn-create").click(function(event) {
    var inputPdt = $("#inputProduct").val();
    var inputPr = $("#inputPrice").val();
    console.log(inputPdt);
    var newRow = ('<div class=\"row mainRow\"><div class=\"col-xs-2\"><span class=\"productName\">' + inputPdt + '</span></div><div class=\"col-xs-1\"><span class=\"productPrice\">' + '$' + inputPr + '</span></div><div class=\"col-xs-4\"><label class=\"quantity\">QTY</label><input type=\"text\" name=\"\" class="mainInput"></div><div class=\"col-xs-2\"><span class=\"totalPrice\">$0.00</span></div><div class="col-xs-3 delete"><button class="btn-delete">Delete</button></div></div>');
    $(".mainContainer").append(newRow);
    $(".btn-delete").click(function(event) {
      $(this).parent().parent().remove();
      console.log("delete");
    });

  });

  $(".mainRow").on("click", ".delete", function(event) {
    $(this).parent().parent().remove();
    console.log("delete");
  });

});
