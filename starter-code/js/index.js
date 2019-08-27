class Product {
  Constructor() {
    this.name = "";
    this.price = 0;
    this.qty = 0;
    this.totalPrice = 0;
  }
  totalPriceCalc() {
    this.price = +this.price.replace("$", "");
    this.totalPrice = (100 * this.price * this.qty) / 100;
  }
}

function init() {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    product.querySelector(".quantity").onchange = () => {
      let productObj = new Product();
      productObj.name = product.querySelector(".product-name").innerHTML;
      productObj.price = product.querySelector(".product-price").innerHTML;
      productObj.qty = product.querySelector(".quantity").value;
      productObj.totalPriceCalc();
      product.querySelector(".product-sum-price").innerHTML =
        "$" + productObj.totalPrice.toFixed(2);
    };
  });
}

function deleteItem(evt) {
  console.log(evt);
  let btn = evt.target || evt.srcElement;
  console.log("parentelement");
btn.parentElement.parentElement.removeChild(evt.target.parentElement)
  // btn.parentElement.innerHTML = "";
}

function getTotalPrice() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  calculatePriceButton.onclick = function() {
    let totalPrice = 0;
    const productPrices = document.getElementsByClassName("product-sum-price");
    [...productPrices].forEach(price => {
      totalPrice += +price.innerHTML.replace("$", "");
      document.getElementById("total-price").innerHTML =
        "Total Price: $" + totalPrice;
    });
  };
}

function createNewItem() {
  let productList = document.getElementById("all-products");
  var itemName = document.querySelector("#new-name").value;
  console.log("item name");
  console.log(itemName);
  var itemPrice = document.querySelector("#new-price").value;
  console.log(itemPrice);
  console.log("product list");
  console.log(productList);
  productList.innerHTML += `<div class ="product">
  <span class="product-name">${itemName}</span>
  <span class = "product-price">$${itemPrice}.00</span>
  <div class="qte">
      <label>QTY</label>
      <input class="quantity" type="number" name="QTY">
  </div>
  <span class = "product-sum-price">$0.00</span>
  <button class ="btn btn-delete">Delete</button>
</div>`;
var deleteButtons = document.getElementsByClassName("btn-delete");
for (var i = 0; i < deleteButtons.length; i++) {
  console.log(deleteButtons[i])
  deleteButtons[i].onclick = deleteItem;
}
init();


}

window.onload = function() {
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  init();
  getTotalPrice();

  createItemButton.onclick = createNewItem;
  
  for (var i = 0; i < deleteButtons.length; i++) {
    console.log(deleteButtons[i])
    deleteButtons[i].onclick = deleteItem;
  }
};


// window.addEventListener('DOMContentLoaded', (event) =>{
//   let temp = ;
// });

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }
