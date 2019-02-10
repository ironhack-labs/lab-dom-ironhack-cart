window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

function deleteItem(e){
  console.log(e);
  e.target.parentElement.parentElement.remove()

}

function updatePriceByProduct(){
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++){
    let price = products[i].children[1].children[0].innerText;
    let quantity = products[i].children[2].children[1].value;
    let totalValue = products[i].children[3].children[0];
    totalValue.innerText = 0.00
  
    totalValue.innerText = price * quantity
  }
  
}

function getTotalPrice() {
  updatePriceByProduct();
  var prices = document.getElementsByClassName('total-item-price');
  let sum = 0;
  for (let i = 0; i < prices.length; i++){
    let currentPrice = Number(prices[i].children[0].innerText);
    sum += currentPrice;
  }
  let totalPrice = document.getElementById('total-price')
  
  totalPrice.innerText = sum;

}

