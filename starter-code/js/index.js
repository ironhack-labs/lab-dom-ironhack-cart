

$("#create").click(function () {
  // find the input item and price
  var newItem = $(".new-item").val();
  var newPrice = $(".new-price").val();

  // create an <li> with the text
  var newLi =
    $("<li class='row'><span class='col-md-2'>" + newItem + "</span> <span class='price col-md-2'>$" + newPrice + "</span> <input placeholder='Quantity' type='number' class='quantity col-md-2'></input> <p class='item-price col-md-2'>$</p><button class='btn-delete delete btn col-md-2'>Delete</button></li>");


  // find the <button> inside the <li>
  newLi.find(".delete").click(function () {
    var deleteBtn = $(event.target);
    // find the closest <li> ancestor
    deleteBtn.closest("li").remove();
  });

  // add the <li> to the list
  $("#shopping-list").append(newLi);

  // remove the text from the inputs
  $(".new-item").val("");
  $(".new-price").val("");

  // row-price = tot;
  $(".quantity").keydown(function(e) {
    if(e.which == 13) {
      var quantity = $(this).val();
      tot = quantity*newPrice;
      rowprice = tot;
      $(this).closest("li").find("p").html("$" + tot.toString());
    }
  });
});




$("#calculate").click(function(){
  prices = $(".item-price").find("p").prevObject;
  len = prices.length;
  sum = 0;
  for (var i = 0; i < len; i++){
    str = $(".item-price").find("p").prevObject[i].innerHTML;
    if (str.length > 0){
    number = parseFloat(str.slice(1));
    sum += number;
    };
  }
  $("#total-price > p").html("Total price : $ " + sum);
})