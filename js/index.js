// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')

  let sum = price*quantity
  subtotal.innerText = sum
}

function calculateAll() {
  // ITERATION 2
  const Products = document.querySelectorAll('.product');
  const listOfProducts = [...Products]
  listOfProducts.forEach((item)=>{
    updateSubtotal(item);
  })

  // ITERATION 3
  let TotalValue = document.querySelector('#total-value span')
  let total = 0
  listOfProducts.forEach((item)=>{
    const subtotal = item.querySelector('.subtotal span').innerText
    total = total + Number(subtotal)
    TotalValue.innerText = total
  })
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
