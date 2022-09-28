// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price.innerHTML * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((eachProduct) => {
    updateSubtotal(eachProduct);
    let counter = 0;
    // obtengo subtotal de cada elemento
    let eachSubtotal = eachProduct.querySelector('.subtotal span');
    // coercion a Number
    eachSubtotal = +eachSubtotal.innerHTML;
    // el contador actualmente contiene los dos subtotales de cada elemento.
    // iterar por cada uno de ellos y agregarlo al contador
    // eachSubtotal.forEach((element) => {
    //   console.log(element); //--> eachSubtotal.forEach is not a function
    // });

    // counter = eachSubtotal
    return eachSubtotal;
  });

  // ITERATION 3
  // accedo por id al h2 que contiene el span ($0)
  let totalPriceDOM = document.querySelectorAll('#total-value span');
  // accedo al valor 0 y coercion a Number
  let totalPriceNumDOM = +totalPriceDOM[0].innerHTML;
  // totalPriceNumDom =  counter //--> traer valor de la It-2
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
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
