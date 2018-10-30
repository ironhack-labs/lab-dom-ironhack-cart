
function getTotalPrice(){
  totalCost = 0;
  let price = document.getElementsByClassName('priceColumn'[0]);
  console.log(price);
  let qty = document.getElementsByClassName('quantity'[0]);
  console.log(qty);
  let total = document.getElementsByClassName('cost')[0];
  console.log(total);
  // let overallTotal = document.getElementsByClassName('totalTotal'[0]);
  // let returnTotalValue = 0;
  for(let i = 0; i <= qty.length; i++){
    let currentPrice = Number(price.innerHTML);
    let currentQty = Number(qty.value);
    let currentTotal = 0;
    currentTotal += currentPrice * currentQty;
    total[i].value = currentTotal;
  }
}
window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};