
  var calculatePriceButton = document.getElementById("calc-button");
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("btn-delete");
  var productsSection = document.getElementById("main-product-list");
  var productRow = document.getElementsByClassName("info-container");

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;


  //}

function getUnitPrice(productPriceIndex){
    var unitPrice = document.querySelectorAll(".unit-price")[productPriceIndex].innerText;
      return parseInt(unitPrice)
}

getUnitPrice(0);


function getUnitQuantity(productQuantityIndex){
    var unitQuantity = document.querySelectorAll(".unit-quantity")[productQuantityIndex].value;
        return parseInt(unitQuantity);      
}


getUnitQuantity(0);


var getTotalPrice = function getTotalPrice() {
    var addToTotal = 0;
        document.querySelectorAll(".total-unit-price").forEach(function(element){
            addToTotal += parseInt(element.innerHTML);
        })
    document.getElementById("total-cart").innerHTML = addToTotal;
};

calculatePriceButton.onclick = function(){
        document.querySelectorAll(".total-unit-price").forEach(function(element, index){
            element.innerHTML = getUnitPrice(index) * getUnitQuantity(index);
        })
    getTotalPrice();
};

/*
function deleteItem(e){
  for(var i = 0; i<deleteButtons.length ; i++){
      if(e.currentTarget === true){
        deleteButtons.onclick = productsSection.removeChild(productRow[i]);
      }
}



function updatePriceByProduct(productPrice, index){

}



function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}
*/

