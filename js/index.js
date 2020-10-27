// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = Number(price*quantity)
  let total = Number(price*quantity)
  return total
}



function calculateAll() {
  // ITERATION 2

  const allProduct = document.getElementsByClassName('product');

  const allProductArray = [...allProduct]
  allProductArray.forEach((product)=>{
    updateSubtotal(product)
  })

  // ITERATION 3

  let reduceArray = allProductArray.reduce((acc, index)=>{
    return acc + updateSubtotal(index)
  }, 0)

  let totalValue = document.getElementById('total-value')
  totalValue.innerHTML = "Total: $" + reduceArray

}

calculateAll()

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

updateSubtotal(document)