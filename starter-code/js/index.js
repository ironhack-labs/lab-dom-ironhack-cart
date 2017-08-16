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
  const addItemButton = document.getElementsByClassName('add-item-button')[0];
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

  const handleCalculatePrice = () => {
    for (let itemNumber = 0; itemNumber < ulNodeList.length; itemNumber++) {
      updateItemTotalPriceElement(itemNumber);
    }
  };

  // Since cartTotal is a variable accessible across the entire Module,
  // it should be mutated explicitly by calling the updateCartTotal function
  // and not by doing cartTotal = someNewValue anywhere in the code.
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
  const handleDelete = () => {
    for (let i = 0; i < deleteItemButtons.length; i++) {
      deleteItemButtons[i].onclick = e => {
        deleteItem(e);
      };
    }
  };

  // Delete a single item.
  const deleteItem = e => {
    e.preventDefault();

    // Parent container.
    const ulParentContainer = e.currentTarget.parentNode.parentNode.parentNode;
    // UL for item (an entire item row).
    const ulChild = e.currentTarget.parentNode.parentNode;

    ulParentContainer.removeChild(ulChild);
  };

  const handleAddItem = (e) => {
    //const prevSibling = addItemButton.previousSibling;

    createItem(e);
  };

  // Create a single item. This function gets called onclick.
  function createItem(e) {
    e.preventDefault();
    const itemsContainer = e.currentTarget.previousSibling.previousSibling;
    const newUL = `<ul class="item">
                    <li class="item-name">
                      <label for="item-name">Item Name </label>
                      <input type="text" id="item-name" name="item-name" placeholder="IronShoes" value="">
                    </li>
                    <li class="item-price">30</li>
                    <li class="item-quantity">
                      <label for="quantity">QTY </label>
                      <input type="text" id="quantity" name="quantity" placeholder="0" value="1">
                    </li>
                    <li class="item-total-price">0</li>
                    <li class="item-delete">
                      <button class="btn btn-delete" type="button" name="delete">Delete</button>
                    </li>
                  </ul>`;

    $(itemsContainer).append(newUL);

  };

  // Exposed public variables and methods.
  return {
    calculatePricesButton,
    addItemButton,
    handleCalculatePrice,
    handleDelete,
    handleAddItem
  }

})(); // End Module

Module.calculatePricesButton.onclick = () => {
  Module.handleCalculatePrice();
};

Module.addItemButton.onclick = (e) => {
  Module.handleAddItem(e);
};

Module.handleDelete();
