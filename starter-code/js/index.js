/* This Module follows the Revealing Module Pattern. It contains functions
 * and variables available only within its scope and exposes some of them
 * for outside use. */

const Module = (() => {
  'use strict';

  /* Each individual item (a product) has the same HTML structure:
   * UL > LI where each LI contains item name, cost, quantity, total cost, delete.

   * The variables below are available across the entire Module scope.
   * They're all meant to be private, except calculatePricesButton which is exposed to the public.
   * ulNodeList contains a NodeList with all UL elements with class 'item'. */

  const ulNodeList = document.querySelectorAll('ul.item');
  const calculatePricesButton = document.getElementById('calculate-prices-button');
  const cartTotalPriceElement = document.getElementsByClassName('cart-total')[0];
  const deleteItemButtons = document.getElementsByClassName('btn-delete');
  let cartTotal = 0;

  const getItemNameFromUlList = (itemNumber = 0) => {
    // From ul at itemNumber, select the first child's innerHTML.
    const itemName = ulNodeList[itemNumber].children[0].innerHTML;

    return itemName;
  };

  const getItemCostFromUlList = (itemNumber = 0) => {
    // From ul at itemNumber, select the second child's innerHTML.
    const itemCost = ulNodeList[itemNumber].children[1].innerHTML;

    return itemCost;
  };

  const getItemQuantityFromUlList = (itemNumber = 0) => {
    // From ul at itemNumber, select the value of the input typed by the user.
    const itemQuantity = ulNodeList[itemNumber].children[2].children[1].value;

    return itemQuantity;
  };

  const getItemTotalFromUlList = (itemNumber = 0) => {
    // From ul at itemNumber, select the fourth child's innerHTML (total cost for one item).
    const itemTotal = ulNodeList[itemNumber].children[3].innerHTML;

    return itemTotal;
  };

  // Calculate total price for a single item.
  const calculateItemPrice = (itemCost, itemQuantity) => {
    const itemTotalPrice = parseInt(itemCost) * parseInt(itemQuantity);

    return itemTotalPrice;
  };

  const calculatePriceForAllItems = () => {
    for (let itemNumber = 0; itemNumber < ulNodeList.length; itemNumber++) {
      updateItemTotalPriceElement(itemNumber);
    }
  };

  const updateCartTotal = itemTotalPrice => cartTotal += parseInt(itemTotalPrice);

  const updateItemTotalPriceElement = (itemNumber = 0) => {
    const itemCost = getItemCostFromUlList(itemNumber);
    const itemQuantity = getItemQuantityFromUlList(itemNumber);
    const itemTotalPrice = calculateItemPrice(itemCost, itemQuantity);
    const updatedCartTotal = updateCartTotal(itemTotalPrice);
    const itemTotalPriceElement = document.getElementsByClassName('item-total-price')[itemNumber];

    // Now update elements in the DOM with new calculated total costs.
    itemTotalPriceElement.innerHTML = itemTotalPrice;
    cartTotalPriceElement.innerHTML = updatedCartTotal;
  };

  // Attach an onclick event to every Delete button, and pass an anonymous
  // function as a callback with the event (e) that calls deleteItem() with it.
  const handleOnClickDelete = () => {
    for (let i = 0; i < deleteItemButtons.length; i++) {
      deleteItemButtons[i].onclick = (e) => {
        deleteItem(e);
      };
    }
  };

  const deleteItem = e => {
    // Parent container.
    const ulParentContainer = e.currentTarget.parentNode.parentNode.parentNode;
    // UL for item (an entire item row).
    const ulChild = e.currentTarget.parentNode.parentNode;

    ulParentContainer.removeChild(ulChild);
  };

  // Exposed public variables and methods.
  return {
    calculatePricesButton,
    calculatePriceForAllItems,
    handleOnClickDelete
  }

})(); // End Module

Module.calculatePricesButton.onclick = () => {
  Module.calculatePriceForAllItems();
};

Module.handleOnClickDelete();
