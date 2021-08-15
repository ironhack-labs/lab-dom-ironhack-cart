

// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal1 = price.innerText * quantity.value; // subtotal despues de ingresar un valor  
  product.querySelector('.subtotal').innerText = subtotal1;
  console.log(subtotal1);
  return subtotal1;
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
  const twoProducts = document.querySelectorAll('.product');

  let total=updateSubtotal(twoProducts[0]);

  total+= updateSubtotal(twoProducts[1]);
  // ITERATION 3
  //... your code goes here
  console.log(total);
 
  const aux=document.getElementById('total-value');// busca el h2 por id donde se encuentra el total a modificar y guarda todo su contenido en aux
  aux.innerText=total;// se modifica el valor del span que esta a 0 al comenzar
  console.log(aux);

  //product.querySelector('.subtotal').innerText = subtotal1
  
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
