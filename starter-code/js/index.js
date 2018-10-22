
function deleteItem(e){

  var btnDelete = document.querySelectorAll(".button-delete");


  btnDelete.forEach (function () {

    var btnDelete = document.querySelectorAll(".button-delete");


    btnDelete.forEach (function (oneItem) {
  
      btnDelete.onclick = function () {
  
        var isOkay = confirm("Are you sure you want to delete this item?");
        var oneItem = oneItem.querySelector(".button-delete");
  
        if (isOkay) {
            //get the PARENT of the button
            var parentLi = e.currentTarget.parentNode.parentNode;
            // remove parent from the DOM
            parentLi.removeChild();
        }
  
      };
  
  
    });

    });

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}


function createQuantityInput(){

  var btnSuccess = document.querySelector(".btn-success");
  var item = document.querySelectorAll(".items");
  var totalCart = document.querySelector(".total-card");


  btnSuccess.onclick = function () {
    var total =0;


    item.forEach (function (oneItem) {

        var singlePrice = oneItem.querySelector(".single-price");
        var purchasedQty = oneItem.querySelector("input");
        
        var totalPrice = oneItem.querySelector(".total-price");
        totalPrice.innerHTML = singlePrice.innerHTML * purchasedQty.value;
        total += singlePrice.innerHTML * purchasedQty.value;
        
        
      });
      
      totalCart.innerHTML = total;

  };


};

createQuantityInput()


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
