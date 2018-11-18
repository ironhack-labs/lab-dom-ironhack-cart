const priceButton = document.getElementById("calculateTotal");

function getTotalPrice() {
  let pricePerUnit = document.querySelectorAll(".unit-price");
  let qtyOrdered =  document.querySelectorAll(".itemQuantity");
  let result = 0;
  for (var i = 0 ; i < pricePerUnit.length; i++){
  let calculatePrice = pricePerUnit[i].innerHTML * qtyOrdered[i].value;  
  document.getElementsByClassName('total')[i].innerHTML = "$" + calculatePrice.toFixed(2);
 result += calculatePrice; 
  }
  document.getElementsByClassName('total-price')[0].innerHTML = "$" + result.toFixed(2);
}

priceButton.onclick = getTotalPrice;

const deleteButton = document.querySelectorAll(".btn-delete");
const deleteWrap = document.getElementsByClassName("products");

function deleteDiv(elem){
  const container = document.getElementById('all-products');
  container.removeChild(elem.path[1]);
}

for(var i=0; i < deleteWrap.length ; i++){
deleteButton[i].onclick = deleteDiv;}

function createProdName(){
  const newName = document.getElementById("define-product");
  const prodName = document.createElement("span");
  prodName.innerHTML = newName.value;
  return prodName;
}


function createProdPrice(){
  const thePrice = document.getElementById("define-price");
  const prodPrice = document.createElement("span");
  prodPrice.setAttribute("class", "unit-price");
  prodPrice.innerHTML = "$" + thePrice.value;
  return prodPrice;
}

function createQtyInput(){
  const qtyInput = document.createElement("input");
  qtyInput.setAttribute("class", "itemQuantity")
  qtyInput.setAttribute("value", "0");
  qtyInput.setAttribute("type", "number");
  return qtyInput;
}

function createProdQtyWrap(){    
  const prodQtyWrap = document.createElement("div");

  const qtyLabel = document.createElement("label");
  qtyLabel.setAttribute("class", "quantity");
  qtyLabel.innerHTML = "QTY";
  const inputField = createQtyInput();
  prodQtyWrap.appendChild(qtyLabel);
  prodQtyWrap.appendChild(inputField);
  return prodQtyWrap;
}

function getSingleProdTotalPrice(){
  const singleProdTotal = document.createElement("span");
  singleProdTotal.setAttribute("class", "total");
  singleProdTotal.innerHTML = "$0";
  return singleProdTotal;
}

function createDeleteButton(){
  const deleteBtn = document.createElement("button");  
  deleteBtn.setAttribute("class", "btn-delete");
  deleteBtn.innerHTML = "Delete";
  return deleteBtn;
}

function createProdWrapDiv(){
  const createProdDiv = document.getElementsByClassName("create-product")[0];
  const container = document.getElementById('all-products');
  const prodWrapper = document.createElement("div");
  prodWrapper.setAttribute("class", "products");
  const theName = createProdName();
  const thePrice = createProdPrice();
  const theQty = createProdQtyWrap();
  const singleTotalPrice = getSingleProdTotalPrice();
  const theDeleteBtn = createDeleteButton();
  prodWrapper.append(theName, thePrice, theQty, singleTotalPrice, theDeleteBtn);
  container.appendChild(prodWrapper)
  container.insertBefore(prodWrapper, createProdDiv);
  return prodWrapper;
}
// const prodWrap= createProdWrapDiv();
// const container = document.getElementById('all-products');

// container.insertBefore(prodWrap. theBtn);

const createButton = document.getElementById("btn-create");
createButton.onclick = createProdWrapDiv;

