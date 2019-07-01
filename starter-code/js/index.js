
window.onload = function(){

  var numberOfProducts = document.getElementsByClassName("product");

  document.getElementsByClassName("btn-success")[0].onclick = function getTotalPrice() {
    var total = 0;
    for (i = 0; i < numberOfProducts.length ; i++){
        if (document.getElementsByClassName("product")[i].getElementsByTagName("input")[0].value !== "") {
          var totalPrice1 = parseFloat(document.getElementsByClassName("product")[i].getElementsByTagName("input")[0].value)*parseFloat(document.getElementsByClassName("product-price")[i].innerHTML) ;
          document.getElementsByClassName("first-total")[i].innerHTML = `${totalPrice1}`;
          total += totalPrice1;
        }
        else document.getElementsByClassName("first-total")[i].innerHTML = "0";
      }  
    document.getElementById("price-total").innerHTML = `${total}`;
    }

  // DELETE ITEMS

  function deleteItem(e) {
    let child = e.currentTarget.parentNode.parentNode;
    let container = e.currentTarget.parentNode.parentNode.parentNode;
    container.removeChild(child);
    }

  for (i = 0; i < numberOfProducts.length ; i++) {
    document.getElementsByClassName("btn-delete")[i].onclick = deleteItem
    }

  // CREATE TWO INPUT BOXES 

  let newInput0 = document.createElement("input");
  document.getElementById("new-product").appendChild(newInput0);
  newInput0.setAttribute("class", "input-boxes");

  let newInput1 = document.createElement("input");
  document.getElementById("new-product").appendChild(newInput1);
  newInput1.setAttribute("class", "input-boxes");

  // CREATE CREATE-BUTTON

  let createButton = document.createElement("button");
  createButton.onclick = function createNewItem() {

    // CREATE NEW ROW
    let newRow = document.createElement("div");
    document.getElementById("product-list").appendChild(newRow);
    newRow.setAttribute("class", "product");

    // CREATE NEW PRODUCT NAME
    let newProductName = document.createElement("div");
    newRow.appendChild(newProductName);
    newProductName.setAttribute ("class", "product-name");

    let newProductNameSpan = document.createElement("span");
    newProductName.appendChild(newProductNameSpan);
    newProductNameSpan.innerHTML = newInput0.value;

    // CREATE NEW PRODUCT PRICE 
    let newProductPrice = document.createElement("div");
    newProductPrice.innerHTML = "$";
    newRow.appendChild(newProductPrice);
    
    let newPriceSpan = document.createElement ("span");
    newProductPrice.appendChild(newPriceSpan);
    newPriceSpan.setAttribute("class", "product-price");
    newPriceSpan.innerHTML = newInput1.value;

    // NEW DIV FOR QUANTITY AND INPUT
    let newInputDiv = document.createElement("div");
    newRow.appendChild(newInputDiv);

    // CREATE NEW QUANTITY
    let newLabel = document.createElement ("label");
    newInputDiv.appendChild(newLabel);
    newLabel.setAttribute ("class","quantity");
    newLabel.innerHTML = "QTY";

    // CREATE NEW INPUT
    let newInput = document.createElement("input");
    newInputDiv.appendChild (newInput);
    newInput.setAttribute("type", "number");
    newInput.setAttribute ("placeholder", "0");

    // CREATE NEW FIRST TOTAL 
    let newFirstTotalDiv = document.createElement("div");
    newRow.appendChild(newFirstTotalDiv);
    newFirstTotalDiv.innerHTML = "$";

    let newFirstTotal = document.createElement("span");
    newFirstTotalDiv.appendChild(newFirstTotal);
    newFirstTotal.setAttribute("class", "first-total");
    newFirstTotal.innerHTML = "0.00";

    // CREATE NEW DELETE BUTTON
    let newDeleteButtonDiv = document.createElement("div");
    newRow.appendChild(newDeleteButtonDiv);

    let newDeleteButton = document.createElement("button");
    newDeleteButtonDiv.appendChild(newDeleteButton);
    newDeleteButton.setAttribute("class", "btn-delete btn");
    newDeleteButton.innerHTML = "Delete";
    newDeleteButton.onclick = deleteItem;

  }

  document.getElementById("new-product").appendChild(createButton);
  createButton.setAttribute("class", "btn");
  createButton.innerHTML = "Create"

  }

  
