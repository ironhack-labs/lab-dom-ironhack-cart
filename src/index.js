// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //recoger los datos de la web
const price = product.querySelector (".price span");
const quantity = product.querySelector (".quantity input");

//extraer los valores de los datos
const priceValue = Number(price.innerHTML);
const quantityValue = Number(quantity.value);

//calcular el subtotal
const subtotalValue = (priceValue * quantityValue);

//mostrar el subtotal
const subtotalElement = product.querySelector (".subtotal span");
subtotalElement.innerHTML = subtotalValue;


return subtotalValue;
}

// function calculateAll() {
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   const singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct);
//   // end of test

  // ITERATION 2

function calculateAll() {
  //seleccionar todas las classes product
 const allProducts = document.getElementsByClassName('product');

  //aplicar la función updateSubtotal a cada uno de los productos
for (let i=0; i<allProducts.length; i++) {
    const singleProduct = allProducts[i];  //guardar el producto i en una variable
    updateSubtotal(singleProduct);
  }


}

  // ITERATION 3
function calculateAll() {
 //seleccionar todas las classes product
  const allProducts = document.getElementsByClassName('product');
  
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    const singleProduct = allProducts[i];
 
    total += updateSubtotal(singleProduct);
  }

  const totalDisplay = document.querySelector('#total-value span');  //seleccionar el lugar donde va el total en la web

 //mostrar el total
  totalDisplay.innerHTML = total;
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
