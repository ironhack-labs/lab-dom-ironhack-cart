// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  //console.log(price, quantity);

  const subTotalPrice = +price * +quantity; 

  const subTotal = product.querySelector('.subtotal span');

  return subTotal.innerText = subTotalPrice;

  

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  //updateSubtotal(product.getElementsByClassName('.product')); 

  let totalPrice = 0;

  const products = document.querySelectorAll('.product');
  products.forEach(elements => {
    totalPrice += updateSubtotal(elements);
  });

  // ITERATION 3
  //... your code goes here
  //<h2 id="total-value">Total: $<span>0</span></h2>

  //const totalPrice = document.querySelector('.total-value span');

  //return totalPrice += products;

  const totalPriceElement = document.querySelector('#total-value span')

  return totalPriceElement.innerText = totalPrice;

}

// ITERATION 4

//<button class="btn btn-remove">Remove</button>
//o botao remover, vai remover o valor correspondente
function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const targetToRemove = target.parentNode;

  targetToRemove.removeChild(target);
  //console.log('The target in remove is:', target);
 
  //... your code goes here
  //const removeProductButton = document.querySelectorAll('.btn btn-remove');
  //removeProductButton.onclick();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => { //porque o removeProductButton foi declarado aqui ?
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  

  const removeProductButton = document.querySelectorAll('.btn-remove');
  removeProductButton.forEach(button => {
    button.onclick = removeProduct;

  });
  //... your code goes here
});
