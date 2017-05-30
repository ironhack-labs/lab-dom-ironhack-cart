

$(document).ready(function() {

  // --[!!DISPLAY] -- Deletes the row

  // written as a function tu "unbind" it later on the code. This way the event handler is not added several times on .btn-delete

  var deletenn = function() {
    $(this).parent().parent().remove();
    console.log("lol");
  };

  $(".btn-delete").on("click",deletenn);

  // --[DISPLAY] --  Shows the total price and multiplies each product price for every unit.

  $(".btn-success").on("click", function(event) {

    var endPrice = 0;

    for (var i = 0; i <= $(".product").length-1; i++) {
      var getThePrice = $(".product .product-price").eq(i).text();
      var parsedPrice = parseInt(getThePrice.replace("$", ""));
      var units = $(".product .col-xs-4 input").eq(i).val();
      $(".product .totalPrice").eq(i).text("$" + (parsedPrice * units));
      endPrice += (parsedPrice * units);
    }
    $(".end-price").text("$" + endPrice);
  });

  // --[DISPLAY] --  Creates a new row with the specified values.

  $(".btn-primary").click(function(event) {
    var newProduct = ('<div class=\"row product\"><div class=\"col-xs-2\"><span class=\"productName\">' + $("#product-name").val() + '</span></div><div class=\"col-xs-2\"><span class=\"product-price\">' + '$' + $("#product-price").val() + '</span></div><div class=\"col-xs-4\"><label class=\"quantity\">QTY</label><input type=\"text\" name=\"\" class="mainInput"></div><div class=\"col-xs-2\"><span class=\"totalPrice\">$0.00</span></div><div class="col-xs-2 "><button class="btn btn-delete">Delete</button></div></div>');
    $(".all-products").append(newProduct);
    $(".btn-delete").unbind('click'); // AAAARGHHH
    $(".btn-delete").on("click",deletenn);


  });


});
