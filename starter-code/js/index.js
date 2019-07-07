
window.onload = function(){

let removeButton = document.getElementsByClassName('firstB');
  for(let i = 0; i<removeButton.length; i++){
    removeButton[i].onclick = deleteItem;
  }

  function deleteItem(e){
    e.currentTarget.parentElement.parentElement.parentElement.remove();
  }

let theButton = document.getElementById('theInput')
theButton.onclick = ()=>{

  let cartItems = document.getElementsByClassName('multipleRows')[0];
  let cartItemsRows = cartItems.getElementsByClassName('rows');

  let total = 0

  for (let i=0; i < cartItemsRows.length; i++){
    let ItemsRow = cartItemsRows[i];
    let priceElement = ItemsRow.getElementsByClassName('cart-item-price')[0];
    let quantityElement = ItemsRow.getElementsByClassName('cart-item-input')[0];
    let updatedQuantity = ItemsRow.getElementsByClassName('quantityTotal')[0];
    // console.log(priceElement, quantityElement)
    let price = priceElement.innerText;
    // console.log(price)
    let quantity = quantityElement.value;
    let result = (price * quantity);
    updatedQuantity.innerText = result;
    total += result;
  }
  total = Math.round(total * 100)/100
  document.getElementsByClassName('cart')[0].innerText = total;
}



let createButton = document.getElementsByClassName('create-btn')[0];
createButton.onclick = ()=>{

let newName = document.getElementById('newName').value;
let newPrice = document.getElementById('newPrice').value;
let actualNewPrice = Number(newPrice).toFixed(2)

let createRow = document.createElement('div');
createRow.classList.add('rows');

createRow.innerHTML = 
` <div id="articles" class="rows">
<div class="product-name">
  <span class="shirt">${newName}</span>
</div>
<div class="product-price">
  $<span class="cart-item-price">${actualNewPrice}</span>
</div>
<div class="product-quantity">
  <label>QTY <input class ="cart-item-input" type="number" value="0"></label>
</div>
<div class="product-total">
  $<span class="quantityTotal">0</span>
</div>
<div>
  <span><button class="firstB">Delete</button></span>
</div>
</div>
</div> 
`

let container = document.getElementsByClassName('multipleRows')[0];

container.appendChild(createRow);

document.getElementById('newName').value = ""
document.getElementById('newPrice').value = ""

deleteButtons = document.getElementsByClassName('firstB');
deleteButtons[deleteButtons.length- 1].onclick = deleteItem;

}

};//end of the onload..

