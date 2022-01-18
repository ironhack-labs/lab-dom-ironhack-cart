// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML)
    const quantity = product.querySelector('.quantity input').value
    subtotalPrice = price * quantity
    product.querySelector('.subtotal span').innerHTML = subtotalPrice
    subTotals.push(subtotalPrice)
    return subtotalPrice 
}

const subTotals = []

function calculateAll() {
  const allProducts = document.getElementsByClassName('product')
for (const product of allProducts){
  updateSubtotal(product)
}

const totalValue = subTotals.reduce(function (accumulator, currentValue) {
  return accumulator+currentValue 
})

document.querySelector('#total-value > span').innerHTML = totalValue
console.log(totalValue)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
