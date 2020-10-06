// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    
    const price = Number(product.querySelector('.price span').innerHTML);
    const quantity = Number(product.querySelector('.quantity input').value);
    
    let subtotal = price * quantity;
    console.log(subtotal)
    
    product.querySelector('.subtotal span').innerHTML = subtotal;
    
    return subtotal;

  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  const calculatePrices = [...document.querySelectorAll('.product')];
  calculatePrices.forEach(singleProduct => updateSubtotal(singleProduct))


  // ITERATION 3
  //... your code goes here

  let total = 0;
  calculatePrices.forEach(function(singleProduct){
    let subtotal = updateSubtotal(singleProduct)
    total += subtotal
  })
  const value = document.querySelector('#total-value span')
  value.innerHTML = total 
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
