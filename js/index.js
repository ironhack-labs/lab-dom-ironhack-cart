// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText
  const quantity = product. querySelector('.quantity input').value
  //console.log(price, quantity)

  const subtotalPrice = price*quantity
  const subtotal = product.querySelector('.subtotal span')
  //console.log (subtotal, subtotalPrice)

  subtotal.innerText = subtotalPrice.toFixed(2)   //Es un string
 
  return subtotalPrice    //Es un número
}

function calculateAll() {

const product = document.getElementsByClassName('product')
//console.log(product) --->HTML collection

const totalValue = document.querySelector('#total-value span')
let total = 0

for(let i=0; i<product.length; i++) {
  total += updateSubtotal(product[i])
}

totalValue.innerText = total.toFixed(2)

return total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  
  // const product = target.closest('.product')
  // product.remove()

  const parent = document.getElementsByTagName('table')
 
const product = document.getElementsByClassName('product')

parent.removeChild(product)
  


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')
 for (let i=0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', removeProduct)
 }
  


});
