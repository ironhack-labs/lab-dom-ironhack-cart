

function deleteItem(e) {
  
 
}

function getTotalPrice() {
  let cart = document.querySelectorAll(".container")

  for (var i = 0; i < cart.length; i++) {
    let totalProductsCart = cart[i]
    let price = totalProductsCart.querySelector(".price-item").innerHTML;
    let units = totalProductsCart.querySelector(".number-of-products").value;
    let totalCartPrice = price * units;

    totalProductsCart.querySelector(".total-price").innerHTML = totalCartPrice;


    let test = [];
    let suma = 0;
    test.push(totalCartPrice);

    for (var j = 0; j < test.length; j++) {

      suma += test[j];

      document.querySelector(".total-products-price").innerHTML = suma;
    }
  }
}

function createNewItem() {

}





window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButtons.onclick = deleteItems;
 

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};