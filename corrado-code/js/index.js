// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.querySelector('.btn-create');
  var allItemsCont = document.querySelector('.all-items');
  var deleteButtons = document.querySelectorAll('.btn-delete');
  var itemsSel = document.querySelectorAll('.item');
  var newItemSel = document.querySelector('.new-item');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  calculatePriceButton.onclick = function () {
    // set the selectors
    var itemCostSel = document.querySelectorAll('.item-price');
    var quantitySel = document.querySelectorAll('input');
    var totalItemCostSel = document.querySelectorAll('.total-item-price');
    var checkoutTotalSel = document.querySelector(".total-price");
  
    // initialize total checkout
    var totalCheckout = 0;

    // loop over arrays
    totalItemCostSel.forEach(function (el, i){
      // get cost of one item
      var itemCost = Number(itemCostSel[i].innerHTML);
      // get quantity of one item
      var quantity = Number(quantitySel[i].value);
      // multiply quantity by cost
      if (quantity >= 0) {
        var totalItemCost = itemCost*quantity;
      } else {
        var totalItemCost = 0;
      };
      // update total price of one item in the DOM
      el.innerHTML = totalItemCost;
      // add price of one item to the total of checkout
      totalCheckout += Number(el.innerHTML);
    });

    // update total checkout in the DOM 
    checkoutTotalSel.innerHTML = totalCheckout;    
  };

  createItemButton.onclick = function() {
    var newItemName = document.querySelector('#new-item-name').value;
    var newItemPrice = document.querySelector('#new-item-price').value;
    var newNode = document.createElement("div");
    newNode.innerHTML = [
      '<div><span>' + newItemName + '</span></div>',
      '<div>$<span class="item-price">' + newItemPrice + '</span></div>',
      '<div><label for="quantity">QTY</label><input type="text" placeholder="0"/></div>',
      '<div>$<span class="total-item-price">0.00</span></div>',
      '<div><button class="btn btn-delete">Delete</button></div>',
    ].join("\n");
    newNode.classList.add("item");
    newNode.classList.add("flex-disp");

    allItemsCont.insertBefore(newNode, newItemSel);
    deleteButtons = document.querySelectorAll('.btn-delete');
    itemsSel = document.querySelectorAll('.item');
    
    deleteButtonsFunc();
  };

  function deleteButtonsFunc() {
    deleteButtons.forEach(function(button, idx){
      button.onclick = function(){
        deleteItem(idx);
      };
    });
  };

  deleteButtonsFunc();
  
  function deleteItem(item){
    if (confirm('Do you really want to delete this item?')){
      allItemsCont.removeChild(itemsSel[item]);
    };    
  };
  
};