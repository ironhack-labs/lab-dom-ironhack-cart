// var $cart = document.querySelector('#cart tbody');
// var $calc = document.getElementById('calc');
const container = document.querySelector('.container')
const products = document.querySelector('.products')
const calculatePriceButton = document.getElementById('calc-prices-button')
const createItemButton = document.querySelector('.new-item-create')
const totalPriceSpan = document.getElementById('total-price-span')
 
const deleteItem = e => {
  products.removeChild(e.currentTarget.parentNode.parentNode) 
}

const getPriceByProduct = () => { 
  const inputQty = document.getElementsByClassName('label')
  for(let i = 0; i < inputQty.length; i++) {
    inputQty[i].onkeyup = updatePriceByProduct
  }
}

const updatePriceByProduct = e => { 
  e.currentTarget.parentNode.parentNode.querySelector('.quantity').innerHTML = '$' + Number(e.currentTarget.value * e.currentTarget.parentNode.parentNode.querySelector('.cost').innerHTML.split('$')[1]).toFixed(2)
}

const getTotalPrice = () => {
  let sumPrices = 0
  const totalPrices = document.querySelectorAll('.quantity')
  totalPrices.forEach(price => sumPrices += Number(price.innerHTML.split('$')[1]));
  totalPriceSpan.innerHTML = `$${sumPrices.toFixed(2)}`
}

const createDeleteButton = () => {
  const deleteButtons = document.getElementsByClassName('btn-delete')
  for(let i = 0; i < deleteButtons.length ; i++) {
    deleteButtons[i].onclick = deleteItem
  }
}

 const createNewItem = () => {

   const nameProduct = document.getElementById('name-product').value
   const costProduct = document.getElementById('cost-product').value
   if(nameProduct && costProduct) {
     const divProduct = document.createElement('div')
     divProduct.setAttribute('class', 'product')
  
     
     products.appendChild(divProduct)
     createDeleteButton()
     getPriceByProduct()
   }
 }

 window.onload = function(){
   createDeleteButton()
   calculatePriceButton.onclick = getTotalPrice
   createItemButton.onclick = createNewItem
   getPriceByProduct()
 }