
function deleteItem(e){
  //console.log("funciono");
  //var products = document.getElementsByClassName("wrapper");
  var product = e.target.parentElement;//select the parent of the element where the event was triggered
  product=product.parentElement;
  product.parentElement.removeChild(product);
}

function getPriceByProduct(i){
  var dollars = document.getElementsByClassName("price")[i];
  var dollarsN = dollars.innerHTML;
  dollarsN = dollarsN.replace("$", "");
  // console.log(dollarsN);
  return dollarsN;
}

function getQuantity (i){
  var qty = document.getElementsByClassName("quantity")[i].value;
  // console.log(qty);
  return qty;
}

function updatePriceByProduct (i){
  var totalQ = getPriceByProduct(i) * getQuantity(i);
  // console.log(totalQ);
  totalQ = "$" + totalQ.toFixed(2);
  //return totalQ;
  document.getElementsByClassName("total-quantity")[i].innerText = totalQ;
  return totalQ;
}

function getTotalPrice() {
  var totalPrice = 0;
  for (var i = 0; i<document.getElementsByClassName("total-quantity").length; i++){
    var priceByProduct = document.getElementsByClassName("total-quantity")[i].innerHTML;
    priceByProduct = priceByProduct.replace("$", "");
    priceByProduct = parseFloat(priceByProduct);
    totalPrice = totalPrice + priceByProduct;
  }
  totalPrice = "$" + totalPrice.toFixed(2);
  console.log(totalPrice);
  document.getElementById("total-price").innerText = totalPrice;
  return totalPrice;
}

////////CREATE

function createNewItem(){
  var newProductWrapper = document.createElement("DIV");
  var newProduct = document.getElementById("new-product").value;
  var newPrice = document.getElementById("new-price").value;

  var newNameSpace = document.createElement("DIV");
  newNameSpace.appendChild(document.createTextNode(newProduct));
  var newPriceSpace = document.createElement("DIV");
  newPriceSpace.appendChild(document.createTextNode("$" + newPrice));
  newPriceSpace.classList.add("price");

  newProductWrapper.classList.add("wrapper");


  //createQuantityInput();
  var newQtyInputDiv = document.createElement("DIV");

  var newQtyLabel = document.createElement("LABEL");
  newQtyLabel.appendChild(document.createTextNode("QTY"));
  var newQtyInput =  document.createElement("INPUT");
  newQtyInput.setAttribute ("type","number");
  newQtyInput.setAttribute ("value", 1);
  newQtyInput.setAttribute ("min", 1);
  newQtyInput.classList.add("quantity");

  newQtyInputDiv.appendChild(newQtyLabel);
  newQtyInputDiv.appendChild(newQtyInput);
  //

  //TOTAL
  var newTotalQtyDiv = document.createElement("DIV");
  var newTotalQtySpan = document.createElement("SPAN");
  var newTotalQty = document.createTextNode("$0.00");
  newTotalQtySpan.appendChild(newTotalQty);
  newTotalQtyDiv.appendChild(newTotalQtySpan);
  newTotalQtySpan.classList.add("total-quantity");

  //Delete Button
  var newDelBtnDiv = document.createElement("DIV");
  var newDelBtn = document.createElement("BUTTON");
  newDelBtn.classList.add("btn");
  newDelBtn.classList.add("btn-delete");
  newDelBtn.setAttribute("type", "button");
  newDelBtn.appendChild(document.createTextNode("Delete"));
  newDelBtnDiv.appendChild(newDelBtn);


  // Include in wrapper
  newProductWrapper.appendChild(newNameSpace);
  newProductWrapper.appendChild(newPriceSpace);
  newProductWrapper.appendChild(newQtyInputDiv);
  newProductWrapper.appendChild(newTotalQtyDiv);
  newProductWrapper.appendChild(newDelBtnDiv);
  //

  var allProducts = document.getElementById("all-products");
  allProducts.appendChild(newProductWrapper);


}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = function (){
    for (var i = 0; i<document.getElementsByClassName("quantity").length; i++){
    updatePriceByProduct(i);
  }
    getTotalPrice();
  }
  
  createItemButton.onclick = createNewItem;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", deleteItem);
    
  }
}

