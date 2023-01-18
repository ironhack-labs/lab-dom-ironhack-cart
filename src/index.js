

  function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('input').value;
    let sum = price * quantity
    console.log(sum)
    let subTotal = product.querySelector('.subtotal span')
    subTotal.innerHTML = sum
    return sum 
}  

function calculateAll() {

    let total = 0;
    let allProducts = document.querySelectorAll('.product')
      allProducts.forEach(product => {
    total += updateSubtotal(product)
      })
    let displayTotal = document.querySelector('#total-value span')
    displayTotal.innerText = total
    return total
   }
  
  

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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

