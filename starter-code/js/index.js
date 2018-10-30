window.onload = function(){
  let calculatePriceButton = document.getElementsByClassName('calc-price-button')[0];
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;

/*    createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}; */
};
function getTotalPrice() {
  let itemQuantity = document.getElementsByClassName("itemQuantity");
  
  let prices = document.getElementsByClassName("unitPrice");

  let totals = document.getElementsByClassName("subTotal");

  let finalPrice = document.getElementsByClassName("myTotal");

  for (let i=0; i<itemQuantity.length; i++){
    let currentQuantity = Number(itemQuantity[i].value);
    let currentPrice = Number(prices[i].innerHTML);
    let currentTotal =0;
    currentTotal += currentQuantity * currentPrice;
    totals[i].innerHTML = currentTotal;
    finalPriceValue += currentTotal;
  }
  finalPrice[0].innerHTML = finalPriceValue;
}



