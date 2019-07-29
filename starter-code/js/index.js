// function deleteItem(e){

// }

// const pn = document.getElementById("prodName");
// pn.innerText = "IronBubble-head";

function getPriceByProduct(){
  let priceElm = document.getElementsByClassName("price");
  console.log("The price", priceElm[0].innerHTML);
}

function updatePriceByProduct(productPrice){
  let priceElm = document.getElementsByClassName("price");
  priceElm[0].innerHTML = productPrice;
}

function getTotalPrice() {
  let totalPElm = document.getElementsByClassName("totalPrice");
  console.log("Total price", totalPElm[0].innerHTML);
}
// let total = 0;
function createQuantityInput(){
  let total = 0;
  let productNum = document.getElementsByClassName("productinfo");
  console.log("productNumLength",productNum.length);
  for (let i=0; i<productNum.length; i++){
    let unitPrice = document.getElementsByClassName("price")[i].innerHTML;
    console.log("UnitPrice"+i, unitPrice);
    let qtyElm = document.getElementsByClassName("input")[i].value;
    console.log("Quantity"+i, qtyElm);
    let totalPElm = document.getElementsByClassName("totalPrice");
    console.log("Unit Total"+i, unitPrice * qtyElm)
    totalPElm[i].innerHTML = unitPrice * qtyElm;
    total = total + unitPrice * qtyElm;
    console.log("All Total", total);
  }
  let tpEle = document.getElementById("alltotal");
  if(tpEle){
    tpEle.innerHTML = "Total Price: $"+total;
  }else{
    const tprice = document.createElement("h2");
    tprice.style.textAlign = "center";
    tprice.setAttribute("id", "alltotal");
    tprice.innerHTML = "Total Price: $"+total;
    document.getElementById("parent").appendChild(tprice);
  }
}

function createDeleteButton(button){
  console.log(button);
  const parentNode = button.parentNode;
  //parentNode.remove();
}

function createNewItemRow(){
  let itemName = document.getElementById("prdInput").value;
  console.log("New Item Name", itemName );
  let itemPrice = document.getElementById("priceInput").value;
  console.log("New Item Price", itemPrice );

  const spanItemName = document.createElement("span");
  spanItemName.className = "prodName";
  spanItemName.innerHTML = itemName;
  const spanUnitName = document.createElement("span");
  spanUnitName.innerHTML = "$";
  spanUnitName.className = "unit";
  const spanUnitPrice = document.createElement("span");
  spanUnitPrice.innerHTML = itemPrice;
  spanUnitPrice.className = "price";
  const labelQTY = document.createElement("label");
  labelQTY.innerHTML = "QTY";
  const inputQTY = document.createElement("input");
  inputQTY.className = "input";
  inputQTY.type = "text";
  inputQTY.value = "0";
  inputQTY.placeholder = "0";
  const spanTPUnit= document.createElement("span");
  spanTPUnit.innerHTML = "$";
  spanTPUnit.className = "unit";
  const spanTP= document.createElement("span");
  spanTP.innerHTML = "0";
  spanTP.className = "totalPrice"
  const buttonDel= document.createElement("button");
  buttonDel.className = "delbtn";
  buttonDel.innerHTML = "Delete";
  // buttonDel.onclick = "createDeleteButton(this)";
  buttonDel.onclick = createDeleteButton(this);

  const div = document.createElement("div");
  div.className = "productinfo";
  
  div.appendChild(spanItemName);
  div.appendChild(spanUnitName);
  div.appendChild(spanUnitPrice);
  div.appendChild(labelQTY);
  div.appendChild(inputQTY);
  div.appendChild(spanTPUnit);
  div.appendChild(spanTP);
  div.appendChild(buttonDel);

  document.getElementById("pproduct").appendChild(div); // parent div

  // c = document.getElementsByClassName("productinfo");
  // c[c.length - 1].appendChild(newItemName);
}

function createItemNode(){
  let newItem = document.getElementById("prdInput").value;
  console.log("New Item", newItem);
  let newPrice = document.getElementById("priceInput").value;
  console.log("New Price", newPrice);
  const newElement = document.createElement("h2");
}

window.onload = function() {
  getPriceByProduct();
  getTotalPrice();
  //updatePriceByProduct(30.00);
}

// function createQuantityNode(){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
