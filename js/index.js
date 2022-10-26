// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  console.log(price, quantity);
  product.querySelector('.subtotal span').innerText = price * quantity; 
  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  let total = 0
  let productArr = document.querySelectorAll('.product').forEach((product) => {
    updateSubtotal(product);
    total += updateSubtotal(product);
    console.log(total);
    document.querySelector('#total-value span').innerText = total
  });
    
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const tr = event.currentTarget.parentNode.parentNode;
  tr.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelectorAll('.btn-remove').forEach((product) => {
    product.addEventListener("click", removeProduct)
  })
});
