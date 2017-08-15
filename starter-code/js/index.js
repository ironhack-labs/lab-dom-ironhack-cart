
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }

// Revealing Module Pattern
const Module = (() => {
  'use strict';

  // ulNodeList contains a NodeList with all UL elements with class 'categories'
  const ulNodeList = document.querySelectorAll('ul.categories');
  const calculatePricesButton = document.getElementById('calculate-prices-button');
  let cartTotal = 0;

  /* Each individual item (a product) has the same HTML structure:
   * UL > LI where each LI contains item name, cost, quantity, total cost, delete */

  // Get a single item's name given an item number.
  const getItemNameFromUlList = (itemNumber = 0) => {
    const itemName = ulNodeList[itemNumber].children[0].innerHTML;

    return itemName;
  }

  // Get a single item's cost given an item number.
  const getItemCostFromUlList = (itemNumber = 0) => {
    const itemCost = ulNodeList[itemNumber].children[1].innerHTML;

    return itemCost;
  }

  // Get a single item's quantity given an item number.
  const getItemQuantityFromUlList = (itemNumber = 0) => {
    const itemQuantity = ulNodeList[itemNumber].children[2].children[1].value;

    return itemQuantity;
  }

  // Get a single item's total cost given an item number.
  const getItemTotalFromUlList = (itemNumber = 0) => {
    const itemTotal = ulNodeList[itemNumber].children[3].innerHTML;

    return itemTotal;
  }

  // Calculate total price for a single item.
  const calculateItemPrice = (itemCost, itemQuantity) => {
    const itemTotalPrice = parseInt(itemCost) * parseInt(itemQuantity);

    return itemTotalPrice;
  }

  //
  function calculatePriceForAllItems() {
    for (let itemNumber = 0; itemNumber < ulNodeList.length; itemNumber++) {
      updateItemTotalPriceElement(itemNumber);
    }
  }

  const updateCartTotal = (itemTotalPrice) => {
    return cartTotal += parseInt(itemTotalPrice);
  }

  // Update the HTML element for a single item's total cost.
  function updateItemTotalPriceElement(itemNumber = 0) {
    const itemCost = getItemCostFromUlList(itemNumber);
    const itemQuantity = getItemQuantityFromUlList(itemNumber);
    const itemTotalPrice = calculateItemPrice(itemCost, itemQuantity);
    const updatedCartTotal = updateCartTotal(itemTotalPrice);
    const itemTotalPriceElement = document.getElementsByClassName('item-total-price')[itemNumber];
    const cartTotalPriceElement = document.getElementsByClassName('cart-total')[0];

    // Now update elements in the DOM with new calculated total costs.
    itemTotalPriceElement.innerHTML = itemTotalPrice;
    cartTotalPriceElement.innerHTML = updatedCartTotal;
  }

  // Public variables and methods.
  return {
    calculatePricesButton,
    calculatePriceForAllItems
  }

})(); // End Module

Module.calculatePricesButton.onclick = () => {
  Module.calculatePriceForAllItems();
};



// window.onload = () => {
//   const calculatePriceButton = document.getElementById('calculate-prices-button');
//   // const createItemButton = document.getElementById('new-item-create');
//   const deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
