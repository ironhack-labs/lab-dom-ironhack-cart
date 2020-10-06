// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = (product.querySelector('.price span').innerHTML);
  const quantity = (product.querySelector('.quantity input').value);
  let subtotal = price*quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);


   // ITERATION 2

  const productsArray= document.getElementsByClassName('product');
  console.log(productsArray);
  let total = 0;
  for (let i = 0; i <productsArray.length; i++) {
     updateSubtotal(productsArray[i]);
      total += updateSubtotal(productsArray[i]);
  } 
 
  // ITERATION 3

  let calcTotalLabel = document.querySelector('#total-value span');
  // console.log(total);
  calcTotalLabel.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  const fila = target.parentNode.parentNode;
  const body = target.parentNode.parentNode;
  body.removeChild(fila);
  calculateAll()
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


