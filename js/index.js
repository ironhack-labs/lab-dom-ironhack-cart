// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value

  let subtotal = price * quantity
  
  
  return product.querySelector('.subtotal span').innerHTML = subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

let totalV = 0

for (let i = 0; i < document.getElementsByClassName('product').length; i++){
  updateSubtotal(document.getElementsByClassName('product')[i])

totalV += updateSubtotal(document.getElementsByClassName('product')[i])
}
console.log(totalV)

 document.querySelector('#total-value span').innerHTML = totalV
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let elementToRemove = document.querySelector('.product')
  elementToRemove.remove()
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


  for(let i = 0; i < document.querySelectorAll('.btn-remove').length; i++) {
    let removeButton = document.querySelectorAll('.btn-remove')[i]
    removeButton.addEventListener('click', removeProduct)
  }

});

