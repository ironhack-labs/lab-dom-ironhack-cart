// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // get the data from the table
  let quantity = product.querySelector('.quantity input').value;
  let price = product.querySelector('.price span').textContent;

  let subtotal = quantity * price;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.getElementsByClassName('product'); // devuelve HTML collection
  const arrayProduct = [...singleProduct];
  let totalValue = 0;
  for (let i = 0; i < arrayProduct.length; i++) {
    totalValue += updateSubtotal(arrayProduct[i]);
  }

  let calcButton = document.getElementById('calculate');

  //calcButton.onclick = function () {
  document.getElementById('total-value').querySelector('span').innerHTML =
    totalValue;
  // no entiendo por qué se actualiza el valor del subtotal cuando se pulsa el botón
  //};

  // end of test
}

//calculateAll();
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const rowNode = target.parentNode.parentNode; // get the whole product
  rowNode.parentNode.removeChild(rowNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameProduct = document.querySelector(".create-product input[type='text']").value;
  const unitPrice = document.querySelector(".create-product input[type='number']").value;

  // console.log(unitPrice);
  // console.log(nameProduct);

  const classToClone = document.querySelector('.product'); // get the first product row
  const clonedClass = classToClone.cloneNode(true);

  if (unitPrice != 0 && nameProduct != '') {
    clonedClass.querySelector('.name span').innerHTML = nameProduct;
    clonedClass.querySelector('.price span').innerHTML = unitPrice;
    classToClone.parentNode.appendChild(clonedClass);
    const newRemoveBtn = clonedClass.getElementsByClassName('btn-remove');
    newRemoveBtn[0].addEventListener('click', removeProduct);    
  } else {
    console.log('El nombre del producto o el precio son incorrectos');
  }

  document.querySelector(".create-product input[type='text']").value = null;
  document.querySelector(".create-product input[type='number']").value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.getElementsByClassName('btn-remove');
  let removeProductList = [...removeProductBtn];

  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductList[i].addEventListener('click', removeProduct);
  }

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
