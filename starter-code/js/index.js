function deleteItem(e) {
  console.log(e);
  // document.body.removeChild(node.parentNode.parentNode);
  document.body.removeChild(e.path[2]);
  update();
}

// function getPriceByProduct(itemNode){

// }

function updatePriceByProduct(index) {
  var priceArray = document.getElementsByClassName("productPrice");
  var quantityArray = document.getElementsByClassName("qtyInput");
  var totalArray = document.getElementsByClassName("total-price");
  var createArray = document.getElementsByClassName("btn");

  totalArray[index].innerHTML = (
    Number(priceArray[index].innerHTML) * quantityArray[index].value
  ).toFixed("2");

  // console.log(unit,quantity,total)
}

function getTotalPrice() {
  let total = 0;
  var totalArray = document.getElementsByClassName("total-price");
  var finalTotalPrice = document.getElementById("final-price");

  for (let i = 0; i < totalArray.length; i++) {
    total += Number(totalArray[i].innerHTML);
  }
  finalTotalPrice.innerHTML = "Total price: $" + total;
}

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



function createNewItem() {
  let unitPrice = document.querySelector(".input-price").value;
  let unitName = document.querySelector(".input-name").value;

  let div = document.createElement("div");
  div.setAttribute("id", "product1");
  div.setAttribute("class", "productInfo");
  div.innerHTML = document.getElementById("product1").innerHTML;
  div.querySelector(".productName").innerHTML = unitName;
  div.querySelector(".productPrice").innerHTML = unitPrice;
  document.body.insertBefore(div, document.querySelector(".input-name"));
  update();
}

function update() {
  let deleteBtns = document.getElementsByClassName("btn-delete");
  let quantityArray = document.getElementsByClassName("qtyInput");

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click",  e => deleteItem(e));
  }

  for (let i = 0; i < quantityArray.length; i++) {
    quantityArray[i].addEventListener("input", () => updatePriceByProduct(i));
  }
}

window.onload = function() {
  let totalBtn = document.querySelector(".btn-success");
  var calculatePriceButton = document.getElementById("btn-success");
  let quantityArray = document.getElementsByClassName("qtyInput");
  let deleteBtns = document.getElementsByClassName("btn-delete");
  let createBtn = document.querySelector(".btn");
  console.log(deleteBtns);
  // console.log(deleteBtns);

  for (let i = 0; i < quantityArray.length; i++) {
    quantityArray[i].addEventListener("input", () => updatePriceByProduct(i));
  }

  totalBtn.addEventListener("click", () => getTotalPrice());

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", e => deleteItem(e));
  }

  createBtn.addEventListener("click", () => createNewItem());
};
