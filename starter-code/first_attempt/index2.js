function deleteItem(e) {
    // let button = e.currentTarget;
    let buttonContainer = e.currentTarget.parentElement.parentNode;
    let body = document.body;
  
    body.removeChild(buttonContainer);
  }
  
  function getPriceByProduct(itemNode) {}
  
  // function addEventListener( type, callback ){
  //     //listen for the event
  //     // event triggered
  //     let event = getEventFromType(type); // event object
  //     callback( event );
  // }
  
  // calculatePriceButton.addEventListener('click', getTotalPrice);
  
  function updatePriceByProduct(productPrice, index) {
    let input = document.querySelector(".quantity").value;
  
    let unit = document.querySelector(".unit-cost").innerHTML;
    let unitNew = unit.slice(1, 6);
    let unitNumber = Number(unitNew);
  
    let price = unitNumber * input;
  
    let totalPrice = document.querySelector(".total-price");
    totalPrice.innerHTML = `$ ${price}`;
  
    //SECOND ITEM
  
    let inputTwo = document.querySelector(".quantity-two").value;
  
    let unitTwo = document.querySelector(".unit-cost-two").innerHTML;
    let unitNewTwo = unitTwo.slice(1, 6);
    let unitNumberTwo = Number(unitNewTwo);
  
    let priceTwo = unitNumberTwo * inputTwo;
  
    let totalPriceTwo = document.querySelector(".total-price-two");
    totalPriceTwo.innerHTML = `$ ${priceTwo}`;
  
    // CALCULATE  TOTAL PRICE OF ALL ITEMS
  
    let totalItemSum = price + priceTwo;
    return totalItemSum;
  }
  
  function getTotalPrice() {
    totalSum = updatePriceByProduct();
  
    let totalPriceSum = document.querySelector(".price-total-sum");
    totalPriceSum.innerHTML = `$${totalSum}`;
  }
  
  function createQuantityInput() {}
  
  function createDeleteButton() {}
  
  function createQuantityNode() {}
  
  function createItemNode(dataType, itemData) {}
  
  function createNewItemRow(itemName, itemUnitPrice) {}
  
  function createNewItem() {}
  
  window.onload = function() {
    var calculatePriceButton = document.getElementById("calc-prices-button");
    // var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName("btn-delete");
  
    calculatePriceButton.onclick = getTotalPrice;
  
    /* createItemButton.onclick = createNewItem; */
  
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = deleteItem;
    }
  };
  