// let price = document.querySelector('.price').innerHTML;
// let qty = document.querySelector('.quantity').value;
// let total = document.querySelector('.total');

function deleteItem(e) {
  e.currentTarget.parentNode;
  for (var i = 0; i < this.deleteButtons.length; i++) {
    let x = document.getElementsByClassName('item')[i];
    let body = document.getElementsByTagName('body')[i];
    body.removeChild(x);
  }
}

function getPriceByProduct(itemNode) {
  for (var i = 0; i < document.getElementsByClassName('price').length; i++) {
    let x = document.getElementsByClassName('price')[i].innerHTML;
    let y = document.getElementsByClassName('quantity')[i].value;
    let pPrice = x * y;
    document.getElementsByClassName('product-price')[i].innerHTML = pPrice;
  }
}

function getTotalPrice() {
  getPriceByProduct();
  var newPricesArray = [];
  for (var i = 0; i < allProducts.length; i++) {
    var singleProductTotalPrice = Number(updatedPricesArray[i].innerHTML);
<<<<<<< HEAD
    console.log('blah: ', singleProductTotalPrice);
    newPricesArray.push(singleProductTotalPrice);
    console.log('newPricesArray: ', newPricesArray);
  }
  var total = newPricesArray.reduce(sumOfTwoNumbers, 0);
  console.log('total is: ', total);
  document.getElementById('total-price').innerHTML = total;
}

// Pending - Todo
// function updatePriceByProduct(productPrice, index) {}
// function createDeleteButton() {}
// function createQuantityInput() {}
// function createQuantityNode() {}
// function createItemNode(dataType, itemData) {}
// function createNewItemRow(itemName, itemUnitPrice) {}
// function createNewItem() {}
//  /Pending

window.onload = function() {
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');
=======
    console.log("blah: ", singleProductTotalPrice);
    newPricesArray.push(singleProductTotalPrice);
    console.log("newPricesArray: ", newPricesArray)
  }
  var total = newPricesArray.reduce(sumOfTwoNumbers, 0);
  console.log("total is: ", total);
  document.getElementById('final-price').innerHTML = total;
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

// function createNewItem(){

// }

// 
window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');
>>>>>>> 17ba3d9cd3f6ab0d414d4d39b2f5932d480204d8

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

<<<<<<< HEAD
  deleteButtons = function() {
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = deleteItem;
    }
  };
};
=======
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
>>>>>>> 17ba3d9cd3f6ab0d414d4d39b2f5932d480204d8
