
// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subtotalResult = price * quantity;

  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerText = subtotalResult;

  return subtotalResult;//Interacción 3
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  //Coger varias clases con el mismo nombre y metarlas en un array
  const products = document.querySelectorAll('.product');

  let totalPrice = 0;//Interacción 3

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    updateSubtotal(product);
    totalPrice += updateSubtotal(product);//Interacción 3
  }

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector("#total-value span")
  totalValue.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  //Se que no es la manera más optima de acceder al producto al que pertenece el botón target, si veis esto, porfa penerme un comentario en git para saber como hacerlo bien.
  const parentBtn = target.parentElement;//parent of "target"
  const parentTr = parentBtn.parentElement;
  const parentTbody = parentTr.parentElement;

  parentTbody.removeChild(parentTr);

  calculateAll()
}

// ITERATION 5

function createProduct(event) {

  //Demasiado complejo, no consigo incluirle todos los atributos de un "product" al elemento creado y que tengan el nombre y el precio que se le han ajudicado desde la página. Help!
  const target = event.currentTarget;

  const newProduct = document.createElement('tr');

  newProduct.setAttribute('class', 'product');
  const products = document.querySelectorAll('.product');

  document.querySelector('tbody').insertBefore(newProduct, products[products.length]);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn-remove');

  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.querySelector('#create');

  createProductBtn.addEventListener('click', createProduct);
});
