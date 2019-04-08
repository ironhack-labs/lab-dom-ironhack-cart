const container = document.querySelector('.container')
const products = document.querySelector('.products')
const calculatePriceButton = document.getElementById('calc-prices-button')
const createItemButton = document.querySelector('.new-item-create')
const totalPriceSpan = document.getElementById('total-price-span')


function deleteItem(e){
  const deleteItem = e => {
    products.removeChild(e.currentTarget.parentNode.parentNode) 
  } 
}

function getPriceByProduct(itemNode){
  const inputQty = document.getElementsByClassName('label')
  for(let i = 0; i < inputQty.length; i++) {
    inputQty[i].onkeyup = updatePriceByProduct
  }
}

function updatePriceByProduct(productPrice, index){
  const updatePriceByProduct = e => { 
    e.currentTarget.parentNode.parentNode.querySelector('.quantity').innerHTML = '$' + Number(e.currentTarget.value * e.currentTarget.parentNode.parentNode.querySelector('.cost').innerHTML.split('$')[1]).toFixed(2)
  }
}

function getTotalPrice() {
  const getTotalPrice = () => {
    let sumPrices = 0
    const totalPrices = document.querySelectorAll('.quantity')
    totalPrices.forEach(price => sumPrices += Number(price.innerHTML.split('$')[1]));
    totalPriceSpan.innerHTML = `$${sumPrices.toFixed(2)}`
  }
} 

function createDeleteButton(){
  const createDeleteButton = () => {
    const deleteButtons = document.getElementsByClassName('btn-delete')
    for(let i = 0; i < deleteButtons.length ; i++) {
      deleteButtons[i].onclick = deleteItem
    }
}

function createNewItem(){
  const createNewItem = () => {

    const nameProduct = document.getElementById('name-product').value
    const costProduct = document.getElementById('cost-product').value
    if(nameProduct && costProduct) {
      const divProduct = document.createElement('div')
      divProduct.setAttribute('class', 'product')
  
      divProduct.innerHTML = `
        <div>
          <span>${nameProduct}</span>
        </div>
        <div>
          <span class="cost">$${Number(costProduct).toFixed(2)}</span>
        </div>
        <div>
          <label for="">QTY</label>
          <input type="text" class="label" value="1">
        </div>
        <div>
          <span class="quantity">$${Number(costProduct).toFixed(2)}</span>
        </div>
        <div>
          <button class="btn btn-delete">Delete</button>
        </div>
      `
    }
      products.appendChild(divProduct)
      createDeleteButton()
      getPriceByProduct()
    }
  } 
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

createDeleteButton()
calculatePriceButton.onclick = getTotalPrice
createItemButton.onclick = createNewItem
getPriceByProduct()