function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
}

function getTotalPrices() {
  var price = document.querySelectorAll(".prices");
  var qty = document.querySelectorAll(".quantity");
  var totals = document.querySelectorAll(".results");
  var totalPrice = document.querySelector(".total-price");
  var sum = 0;
  
  for (var i = 0; i < totals.length - 1; i++) {
    totals[i].innerHTML = 
      "$" + (price[i].innerHTML.slice(1) * qty[i].value).toFixed(2);
    sum += price[i].innerHTML.slice(1) * qty[i].value;
  }
  totalPrice.innerHTML = "$" + sum.toFixed(2);
}

function createItemNode() {
  var newProduct = document.createElement("div");
  var newName = document.createElement("span");
  var newPrice = document.createElement("span");
  var newQtyInput = document.createElement("div");
  var newQtyLabel = document.createElement("label");
  var newQty = document.createElement("input");
  var newResult = document.createElement("span");
  var newDelBtn = document.createElement("button");

  newProduct.setAttribute("class", "product");

  newName.setAttribute("class", "product-name");
  newName.innerHTML = document.getElementById("new-product-name").value;

  newPrice.setAttribute("class", "prices");
  newPrice.innerHTML = "$"+parseFloat(document.getElementById("new-product-price").value).toFixed(2);
  
  newQtyInput.setAttribute("class", "qty-input");
  newQtyLabel.innerHTML = "QTY";
  newQty.setAttribute("class", "quantity");
  newQty.setAttribute("value", 0);
  newQty.setAttribute("type", "number")
  newQtyInput.appendChild(newQtyLabel);
  newQtyInput.appendChild(newQty);
  
  newResult.setAttribute("class", "results");
  newResult.innerHTML = "$0.00";
  
  newDelBtn.setAttribute("class", "btn btn-delete");
  newDelBtn.innerHTML = "Delete";
  newDelBtn.onclick = deleteItem;

  newElements = [newName, newPrice, newQtyInput, newResult,newDelBtn]
  for(var i=0; i<newElements.length; i++){
    newProduct.appendChild(newElements[i]);
  }

  return newProduct;
}

function createNewItem() {
  var name = document.getElementById("new-product-name").value;
  var price = document.getElementById("new-product-price").value;
  
  if(name == "" || price == ""){
    alert("Name and price can't be empty");
  } else if(!name.replace(/\s/g,'').length){
    alert("Name should contain at least one character");
  } else 
  document.getElementById("all-products").appendChild(createItemNode());
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrices;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}
