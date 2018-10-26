window.onload = function() {
  var calculateButton = document.getElementsByClassName("btn-success")[0];
  calculateButton.onclick = function() {
    // calculate total price for each product
    var products = document.getElementsByClassName("product");
    for (var i = 0; i < products.length; i++) {
      var quantity = products[i].getElementsByTagName("input")[0].value;
      var singlePrice = products[i].getElementsByClassName("singlePrice")[0]
        .innerText;
      var totalPrice = Number(quantity) * Number(singlePrice);
      products[i].getElementsByClassName(
        "totalPrice"
      )[0].innerText = parseFloat(totalPrice).toFixed(2);
    }
    // calculate price of all products in the cart
    var prices = document.getElementsByClassName("totalPrice");
    for (var i = 0, totalCart = 0; i < prices.length; i++) {
      totalCart += Number(prices[i].innerText);
      document.getElementById("totalCart").innerText = parseFloat(
        totalCart
      ).toFixed(2);
    }
  };

  var createItemButton = document.getElementsByClassName("newItemButton")[0];
  createItemButton.onclick = function() {
    var newName = document.getElementById("nameNewProduct").value;
    var newPrice = Number(document.getElementById("priceNewProduct").value);
    var newProduct = document
      .getElementsByClassName("product")[0]
      .cloneNode(true);
    newProduct
      .getElementsByClassName("name")[0]
      .getElementsByTagName("span")[0].innerText = newName;
    newProduct
      .getElementsByClassName("singlePrice")[0]
      .getElementsByTagName("span")[0].innerText = parseFloat(newPrice).toFixed(
      2
    );
    newProduct.getElementsByTagName("input")[0].value = "";
    newProduct
      .getElementsByClassName("totalPrice")[0]
      .getElementsByTagName("span")[0].innerText = parseFloat(0).toFixed(2);
    var parent = document.getElementsByClassName("products")[0];
    parent.appendChild(newProduct);
  };

  var deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function(e) {
      e.currentTarget.parentNode.parentNode.remove();
    };
  }
};
