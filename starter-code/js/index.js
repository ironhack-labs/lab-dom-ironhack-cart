function deleteItem(e){
  
  var parentEl = e.currentTarget.parentNode;
  // parentNode renvoie a  div class container n
  parentEl.remove();

}

//function getPriceByProduct(itemNode){
//
//}
//
//function updatePriceByProduct(productPrice, index){
//
//}
//--------------------------------------------------------------
function getTotalPrice() {
  var itemUnitPrice = document.querySelectorAll(".itemUnitPrice");
  var itemQuantity = document.querySelectorAll(".quantity");
  //console.log(itemUnitPrice[1]);
  //console.log(itemQuantity);
  var totalArray = [];
 
  for (var i = 0; i<itemUnitPrice.length; i++) {
    //console.log(itemUnitPrice[i].innerHTML * itemQuantity[i].value);
    var totalPrice = itemUnitPrice[i].innerHTML * itemQuantity[i].value;
    totalArray.push(totalPrice);
  }

//console.log(totalArray);
  var totaux = document.querySelectorAll(".productPrice");
  var sum = 0;

  for (var i=0; i<totalArray.length; i++) {
    totaux[i].innerHTML = "$" + totalArray[i];
    sum = sum + totalArray[i];
  }
console.log(sum);
document.querySelector(".sum").innerHTML = "$" + sum;

};

//----------------------------------------------------------------
//function createDeleteButton(){
//  var products = document.querySelector(".products");
//  
//  var newItem = document.createElement("div");
//  products.appendChild(newItem);
//  
//  newItem.setAttribute('class', 'container');
//  
//
//}

//function createQuantityNode(){
//
//
//  var products = document.querySelector(".products");
//  
//  var newItem = document.createElement("div");
//  products.appendChild(newItem);
//
//  newItem.setAttribute('class', 'container');
//  
//  
//}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
    var products = document.querySelector(".products");
    var newItem = document.createElement("div");
    var newName = document.createElement("div");
    var spanName = document.createElement("span");
    var newUnitProductPrice = document.createElement("div");
    var spanUnitPrice = document.createElement("span");
    var newProductPrice = document.createElement("div");
    var spanProductPrice = document.createElement("span");
    var newItemQuantity = document.createElement("div");
    var newDeleteBtn = document.createElement("button");


    products.appendChild(newItem);
    newItem.appendChild(newName);
    newName.appendChild(spanName);
    newItem.appendChild(newUnitProductPrice);
    newUnitProductPrice.appendChild(spanUnitPrice);
    newItem.appendChild(newItemQuantity);
    newItem.appendChild(newProductPrice);
    newProductPrice.appendChild(spanProductPrice);
    newItem.appendChild(newDeleteBtn);


    newItem.setAttribute('class', 'container');
    newName.setAttribute('class', 'align');
    spanName.setAttribute('class', 'itemName');
    spanUnitPrice.setAttribute('class', 'itemUnitPrice');
    spanProductPrice.setAttribute('class', 'productPrice');
    newDeleteBtn.setAttribute('class', 'btn btn-delete');
    

    spanName.innerHTML = itemName.value;
    spanUnitPrice.innerHTML = itemUnitPrice.value;
    newItemQuantity.innerHTML = "<label>QTY</label>" + '<input class="quantity" type="number" placeholder="0"/>';
    spanProductPrice.innerHTML = "$" + 0;
    newDeleteBtn.innerHTML = "Delete";

   

    newDeleteBtn.onclick = deleteItem;
    
  }

function createNewItem(){
  var itemName = document.querySelector(".newProductName");
  var itemPrice = document.querySelector(".newProductPrice");
  
  createNewItemRow(itemName,itemPrice)

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

console.log("hello");

  calculatePriceButton.onclick = function () {
    var result = getTotalPrice ();
  };

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
