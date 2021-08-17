// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  //Number () convierte a float --> comprobar si es un numero
  let subtotalPrice = Number(price) * Number(quantity);
  subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return (subtotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let absoluteTotal = 0;
  let products = document.getElementsByClassName('product');
  for (let i=0; i<products.length; i++){
    absoluteTotal += updateSubtotal(products[i]);
    let cartTotal = document.querySelector('#total-value span');
    cartTotal.innerHTML = absoluteTotal;
  }
  return (absoluteTotal);

}

// ITERATION 4

//But let's try to solve our problem one bit at a time. 
//Inside of the existing function you're passing to window.addEventListener(), 

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let td = target.parentNode;
  let tr = td.parentNode;
  let tbody = tr.parentNode;
  tbody.removeChild(tr);
}

// ITERATION 5

function createProduct() {
  //crear product
  let product = document.createElement('tr');
  product.setAttribute('class','product')
  document.getElementById('tbody').appendChild(product);
  //crear name
  let name = document.createElement('td')
  name.setAttribute('class','name')
  product.appendChild(name)
  let nameSpan = document.createElement('span')
  name.appendChild(nameSpan)
  //localizar
  let createName = document.querySelector('.create-product input');
  //assignar
  nameSpan.innerHTML = createName.value;
  //limpiar
  createName.value = '';
  

  //... your code goes here
 

  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //start with querying the document for all "Remove" buttons, 
  let allRemoveButtons = document.querySelectorAll (".btn-remove");
  //loop through them, and add a click event listener to each, 
  //passing a named function removeProduct as the callback argument.
  for (let i=0; i<allRemoveButtons.length; i++){
    allRemoveButtons[i].addEventListener('click', removeProduct);
  }
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
  }
);