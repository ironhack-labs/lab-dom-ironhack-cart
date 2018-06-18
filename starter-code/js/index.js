function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

function updatePriceByProduct(e){
  var price = e.parentNode.parentNode.getElementsByTag("span")[0].innerText;
  var quantity = e.value;
  
  var totalPrice = price * quantity;

  totalPrice = e.currentTarget.parentNode.parentNode.getElementsByClassName("product-total-price"); 
  getTotalPrice();
}

function getTotalPrice() {
  var product = document.getElementsByClassName("product");
  count = 0;

  for (var i = 0; i < product.length; i++) {
    count += Number(document.getElementsByClassName("product-total-price")[i].innerText);
  }
  var updatePrice = updatePriceByProduct();
}

function createQuantityInput(e){
  var label = document.createElement("label");
  var quantity = document.createElement("input");
  
  e.appendChild(label).innerText= "QTY";
  label.setAttribute("for","qty");

  e.appendChild(quantity);
  quantity.setAttribute("type","number");
  quantity.setAttribute("class","quantity");
  quantity.setAttribute("value", "0");
  quantity.setAttribute("min","0");
}

function createDeleteButton(){
  var button = document.createElement("button");

  e.appendChild(button).innerText= "Delete";
  button.setAttribute("type","submit");
  button.setAttribute("class","btn btn-delete");
}

function createQuantityNode(){
  var quantityInput = createQuantityInput();
  var quantityNode = document.createElement("div")

  quantityNode.appendChild(quantityInput);

}

function createItemNode(){
  var newProductName = document.getElementById("new-name").value;
  var newItemDiv = document.createElement("div");
  var newItemSpan = document.createElement("span");

  newItemDiv.appendChild(newItemSpan);

  newItemSpan.innerHTML += newProductName;

}

function createProductPriceNode(){
  var newProductPrice = document.getElementById("new-price").value;
  var newPPDiv = document.createElement("div");
  newPPDiv.setAttribute("class", "product-price");
  var newPPSpan = document.createElement("span");

  newPPDiv.appendChild(newPPSpan);

  newPPSpan.innerHTML += newProductPrice;

}

function createNewItemRow(){
  createItemNode();
  createProductPriceNode();
  createQuantityNode();
  createDeleteButton();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById("btn-success");
  var createItemButton = document.getElementById("btn-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
<<<<<<< HEAD
};
||||||| merged common ancestors
}; 
=======
};
>>>>>>> 377280ef618098769282515dd41786cdff9b1223
