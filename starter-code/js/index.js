


function deleteItem(e){
  var deleteBtn = e.currentTarget;
  var wrapper = deleteBtn.parentElement.parentElement;
  var section = document.getElementById("section-product");

  section.removeChild(wrapper);
  getTotalPrice();
}


//////////////////


  function createUnitPrice(itemUnitPrice) {
    var unitPrice = document.createElement("div");
    unitPrice.className = "unit-price";
    unitPrice.innerHTML = `<span>$${parseFloat(itemUnitPrice).toFixed(2)}</span>`;
  
    return unitPrice;
  }





function createTotalPrice() {
  var totalPrice = document.createElement("div");
  totalPrice.innerHTML = "<span>$0.00</span>";
  totalPrice.className = "total-price";

  return totalPrice;
}





function getTotalPrice() {

var unitPrices = [...document.querySelectorAll(".unit-price")];
var quantities = [...document.querySelectorAll(".input-quantity")];
var totalPrices = [...document.querySelectorAll(".total-price")];
var products = []; 

if (totalPrices.length !== 0) {
  
  totalPrices.forEach(function(totalPrice, i) {
    var unitPrice = parseFloat(unitPrices[i].textContent.slice(1));
    var quantity = parseFloat(quantities[i].value);

  
    if (!isNaN(quantity)) {
      products.push(unitPrice * quantity);
      totalPrice.innerHTML = "$" + (unitPrice * quantity).toFixed(2);

    
      var sum = products.reduce((acc, num) => acc + num);
      document.querySelector(".total-price-all span").innerHTML = "$" + sum;
    } else {
      quantities[i].value = "0";
    }
  });
} else {
  document.querySelector(".total-price-all span").innerHTML = "$0.00";
}
}




  

function createQuantityInput() {
  var quantityInput = document.createElement("input");
  quantityInput.type = "text";
  quantityInput.value = "0";
  quantityInput.className = "input-quantity";

  return quantityInput;
}






function createDeleteButton(){
  var div = document.createElement("div");
  var deleteBtn = document.createElement("button");

  deleteBtn.type = "button";
  deleteBtn.className = "btn-delete";
  deleteBtn.innerHTML = "Borrar";
  deleteBtn.onclick = deleteItem;
  div.appendChild(deleteBtn);

  return div;
}





function createQuantityNode(){

  var div = document.createElement("div");
  var label = document.createElement("label");
  var quantityInput = createQuantityInput();

  label["for"] = "quantity";
  label.innerHTML = "PZA.";
  div.appendChild(label);
  div.appendChild(quantityInput);

  return div;

}


////////////////


  function createNewProduct(itemName) {
    var product = document.createElement("div");
    product.className = "product";
    product.innerHTML = `<span>${itemName}</span>`;
  
    return product;
  }







  function createNewRow(itemName, itemUnitPrice) {
    var product = createNewProduct(itemName);
    var unitPrice = createUnitPrice(itemUnitPrice);
    var quantity = createQuantityNode();
    var totalPrice = createTotalPrice();
    var deleteBtn = createDeleteButton();
    var wrapper = document.createElement("div");
  
    wrapper.className = "wrapper";
    wrapper.appendChild(product);
    wrapper.appendChild(unitPrice);
    wrapper.appendChild(quantity);
    wrapper.appendChild(totalPrice);
    wrapper.appendChild(deleteBtn);
  
    return wrapper;
  }
  







  function createNewItem() {
    var product = document.getElementById("input-product").value;
    var unitPrice = document.getElementById("input-price").value;
  
    

    if (product.trim() === "" || unitPrice.trim() === "") {
      document
        .getElementById("input-product")
        .setAttribute("Please enter your frikin product Name xD");
      document
        .getElementById("input-price")
        .setAttribute("Please enter your frikin product price xD");
    } else {
      var wrapper = createNewRow(product, unitPrice);
      document.getElementById("section-product").appendChild(wrapper);
    }
  }






window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};















