// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Saco los elementos
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;

  // Saco los valores numéricos
  const specificquiantity = parseInt(quantity);
  const specificPrice = parseInt(price.innerText);

  // Calculo y actualizo el subtotal
  const subtotalprice = specificPrice * specificquiantity;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = subtotalprice;

  return subtotalprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = Array.from(document.getElementsByClassName('product'));

  console.log(products);

  let total = 0;
  products.forEach((item) => {
    let x = updateSubtotal(item);

    total += x;
  });

  // ITERATION 3
  let totalValueid = document.getElementById('total-value');
  let totalValue = totalValueid.querySelector('span');
  totalValue.innerText = total;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let td = target.parentNode;
  let tr = td.parentNode;
  let body = tr.parentNode;

  body.removeChild(tr);

  calculateAll();
}

// ITERATION 5

function createProduct() {

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const btnArray = Array.from(document.getElementsByClassName('btn-remove'));
  btnArray.forEach((buttons) => {
    buttons.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('.btn-success');
  console.log(createProductBtn);
  createProductBtn.addEventListener('click', createProduct);
  //... your code goes here
});
