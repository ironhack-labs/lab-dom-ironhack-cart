





function getTotalPrice() {
  let total = 0
  let i = 0
  let price = document.getElementsByClassName('price')
  let updated = document.getElementsByClassName('updated')
  let quantity = document.querySelector(`#shopping > div:nth-child(${i+1}) > form > input`);
  // let totalFinal = document.querySelector()
  
  while (i < price.length) {
     total += Number(price[i].innerHTML) * quantity.value
     updated[i].textContent = Number(price[i].innerHTML) * quantity.value
    i++
  }
  return total
}

// window.onload = function() {
  
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
// }

