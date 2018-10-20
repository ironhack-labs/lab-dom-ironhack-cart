window.onload = function(){
  // set "global" selectors
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var deleteButtons = document.querySelectorAll('.btn-delete');  
  var itemsSel = document.querySelectorAll('.item');
  var allItemsCont = document.querySelector('.all-items');
  var itemCostSel = document.querySelectorAll('.item-price');
  var quantitySel = document.querySelectorAll('.item input');
  var totalItemCostSel = document.querySelectorAll('.total-item-price');
  var checkoutTotalSel = document.querySelector(".total-price");

  // add calculate prices function to the green button
  calculatePriceButton.onclick = function (){
    calculatePrices();
  };
  
  // add create new item functionality to grey button
  createNewItem();

  // add delete item functrionality to red buttons
  createDeleteButton();


  // ---------------------------------------------

  function calculatePrices(){    
    var totalCheckout = 0;
    totalItemCostSel.forEach(function (el, i){
      var itemCost = getPriceByProduct(itemCostSel, i);
      var quantity = getQuantityByProduct(quantitySel, i);
      el.innerHTML = updatePriceByProduct(itemCost, quantity);
      totalCheckout += Number(el.innerHTML);
    });  
    // update total checkout in the DOM 
    checkoutTotalSel.innerHTML = totalCheckout;
  }  
  
  function getPriceByProduct(itemNode, idx){    
    return Number(itemNode[idx].innerHTML);
  }

  function getQuantityByProduct(itemNode, idx){    
    return Number(itemNode[idx].value);
  }

  function updatePriceByProduct(itemCost, quantity){    
    return (quantity>=0) ? itemCost*quantity : 0;
  }

  function createNewItem(){
    var createItemButton = document.querySelector('.btn-create');
    createItemButton.onclick = function() {    
      createItemNode();
      // update the selectors after creating new item
      itemCostSel = document.querySelectorAll('.item-price');
      quantitySel = document.querySelectorAll('.item input');
      totalItemCostSel = document.querySelectorAll('.total-item-price');
      deleteButtons = document.querySelectorAll('.btn-delete');
      itemsSel = document.querySelectorAll('.item');
      createDeleteButton();
    };
  }

  function createItemNode(){
    var newItemName = document.querySelector('#new-item-name').value;
    var newItemPrice = document.querySelector('#new-item-price').value;
    if (newItemName!=="" && newItemPrice!==""){
      newItemNode = createNewItemRow(newItemName, newItemPrice);

      var newItemSel = document.querySelector('.new-item');
      allItemsCont.insertBefore(newItemNode, newItemSel);
      // reset input fields
      document.querySelector('#new-item-name').value = "";
      document.querySelector('#new-item-price').value = "";
    } else {
      alert("Please, insert both name and price of the item.")
    }    
  }

  function createNewItemRow(itemName, itemUnitPrice){
    var newNode = document.createElement("div");
    newNode.innerHTML = [
      '<div><span>' + itemName + '</span></div>',
      '<div>$<span class="item-price">' + itemUnitPrice + '</span></div>',
      '<div><label for="quantity">QTY</label><input type="text" placeholder="0"/></div>',
      '<div>$<span class="total-item-price">0.00</span></div>',
      '<div><button class="btn btn-delete">Delete</button></div>',
    ].join("\n");
    newNode.classList.add("item");
    newNode.classList.add("flex-disp");
    return newNode;
  }

  function deleteItem(item){
    if (confirm('Do you really want to delete this item?')){
      console.log(allItemsCont);
      console.log(itemsSel);
      console.log(itemsSel[item]);
      console.log(item);
      allItemsCont.removeChild(itemsSel[item]);
    };
  }

  function createDeleteButton() {
    deleteButtons.forEach(function(button, idx){
      button.onclick = function(){
        deleteItem(idx);
        // update the selectors after deleting one item
        itemCostSel = document.querySelectorAll('.item-price');
        quantitySel = document.querySelectorAll('.item input');
        totalItemCostSel = document.querySelectorAll('.total-item-price');
        calculatePrices();
      };
    });
  };
  
};