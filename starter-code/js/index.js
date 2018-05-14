function deleteItem(e){
  e.currentTarget.parentElement.parentElement.parentNode.removeChild(e.currentTarget.parentElement.parentElement);

}

function getPriceByProduct(itemNode){
  let priceByProductList=itemNode.getElementsByClassName('priceByProduct');
  let priceByProduct=priceByProductList[0].innerText;

  let qtyList=itemNode.getElementsByClassName('qtyInput');
  let qty=qtyList[0];

  let totalByProductList=itemNode.getElementsByClassName('totalByProduct');
  let totalByProduct=totalByProductList[0];
  calcPrice=parseFloat(priceByProduct.substring(1,priceByProduct.length))*qty.value;
  totalByProduct.innerText="$"+calcPrice.toFixed(2).toString();
  return calcPrice;
  //console.log(parseFloat(priceByProduct.substring(1,priceByProduct.length)*qty.value));
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let total=0;
  let products=document.getElementsByClassName('wrapper');
  console.log("longitud: "+products.length);
  
  for(let i=0;i<products.length;i++){
    total+=getPriceByProduct(products[i]);
  }
  console.log("Total: "+total);
  let totalSpan=document.getElementById('totalDiv').lastElementChild.lastElementChild;
  totalSpan.innerText="$"+total.toFixed(2).toString();
  console.log();
  

}

function createQuantityInput(){
  let qtyDiv=document.createElement("div");
  qtyDiv.setAttribute('class','quantity');
  let newQtyLabel=document.createElement("label");
  newQtyLabel.innerHTML="QTY";
  qtyDiv.appendChild(newQtyLabel);
  let inputQty=document.createElement("input");
  inputQty.setAttribute('type','number');
  inputQty.setAttribute('class','qtyInput');
  inputQty.setAttribute('value','0');
  qtyDiv.appendChild(inputQty);
  return qtyDiv;
}

function createDeleteButton(){
  let deleteBtnDiv=document.createElement("div");
  let newDeletebtn=document.createElement("button");
  newDeletebtn.setAttribute('class','btn btn-delete');
  newDeletebtn.innerHTML="Delete";
  deleteBtnDiv.appendChild(newDeletebtn);
  //newDeletebtn.onClick=deleteItem;
  return deleteBtnDiv;
}

function createQuantityNode(){
  
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  //console.log("Nombre: "+itemName+" UnitPrice"+itemUnitPrice);
  let newDiv=document.createElement("div");
  let newNameDiv=document.createElement("div");
  let newNameSpan=document.createElement("span");
  let newUnitPDiv=document.createElement("div");
  let newUnitPSpan=document.createElement("span");
  newNameSpan.innerHTML=itemName;
  newNameDiv.appendChild(newNameSpan);
  newUnitPSpan.setAttribute('class','priceByProduct');
  newUnitPSpan.innerHTML="$"+parseFloat(itemUnitPrice).toFixed(2).toString();
  newUnitPDiv.appendChild(newUnitPSpan);

  newDiv.setAttribute('class','wrapper');
  newDiv.appendChild(newNameDiv);
  newDiv.appendChild(newUnitPDiv);
  newDiv.appendChild(createQuantityInput());
  newDiv.appendChild(createTotalByProduct());
  newDiv.appendChild(createDeleteButton());
  
  return newDiv;
}
function createProductName(){

}

function createTotalByProduct(){
  let totalByProductDiv=document.createElement("div");
  let newTotalByProductSpan=document.createElement("span");
  newTotalByProductSpan.setAttribute('class','totalByProduct');
  newTotalByProductSpan.innerHTML="$0.00";
  totalByProductDiv.appendChild(newTotalByProductSpan);
  return totalByProductDiv;
}
function createNewItem(e){
  console.log("Estas en create");
  let newDiv=createNewItemRow(document.getElementById("productName").value, document.getElementById("quantityCreate").value);
  
  e.currentTarget.parentElement.parentElement.parentNode.insertBefore(newDiv,document.getElementById('createDiv'));
  var deleteButtons = document.getElementsByClassName('btn-delete');

  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  createItemButton.onclick = createNewItem;

  
};
