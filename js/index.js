// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = product.querySelector('.price span').innerHTML * product.querySelector('.quantity input').value;
  return Number(subtotal.innerHTML)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let allSubtotals = 0;
  const allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++) {
    allSubtotals += updateSubtotal(allProducts[i])
  }

  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerText = allSubtotals;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const productToErase = target.parentElement.parentElement; // no sé si hay una forma mejor de llegar aquí

  productToErase.remove();
    
}

// ITERATION 5

function createProduct() {
  const newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  const inputText = document.getElementById('input').value;
  newProduct.innerText = inputText;
  parent = document.getElementsByTagName('tbody')[0];
  parent.appendChild(newProduct)
  // está incompleto, intentaré seguir cuando saque algún hueco :)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
    }
  
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
