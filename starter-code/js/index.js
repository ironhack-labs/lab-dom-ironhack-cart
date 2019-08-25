
function updatePriceByProduct() {

  let sumAllProducts = 0;

  let productInfo = document.querySelectorAll(".product-content")

  productInfo.forEach(function (product) {
    
    let unit = product.querySelector(".unit-price").innerHTML;
    let unitPrice= Number(unit.slice(1, 10));
    
    let itemQuantity = product.querySelector(".quantity").value;

    let totalCost = unitPrice * itemQuantity;

    let totalProductPrice = product.querySelector(".total-price");
    totalProductPrice.innerHTML = `$ ${totalCost}`;

    sumAllProducts += totalCost;
  });

  return sumAllProducts;
}

function getTotalPrice() {

  let totalSum = updatePriceByProduct();
  let totalPriceSum = document.querySelector(".price-total-sum");

  totalPriceSum.innerHTML = `$${totalSum}`;
}

function deleteItem(e) {

  let contentButton = e.currentTarget.parentElement.parentNode;
  let content = document.querySelector(".product-list");

  content.removeChild(contentButton);
}

window.onload = function () {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};