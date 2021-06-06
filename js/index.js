// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input").value; // guardo en quantity el valor del produco.

  const subTotal = price.textContent * quantity // multiplico el precio por la cantidad.

  const result = document.querySelector(".subtotal span") //selecciono el span de subtotal para modificarlo y lo guardo en resultado.

  result.textContent = subTotal // modifico el contenido de result por el valor de subtotal

  //console.log(`nodo de price es,`, { price })
  //console.log(`xxxxxx `, { quantity })
  //console.log({ subTotal })

  //enviar al Dom el resultado de subTotal

  return subTotal

}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  console.log(singleProduct)
}
// end of test

// ITERATION 2
//... your code goes here

/*function updateSubtotal(product2) {
  //... your code goes here
  const price = product2.querySelector('.price span'); //guardo en price el coste del producto 2.
  const quantity = product2.querySelector(".quantity input").value; // guardo en quantity el valor del produco.

  const subTotal = price.textContent * quantity // multiplico el precio por la cantidad.

  const result = document.querySelector(".subtotal span") //selecciono el span de subtotal para modificarlo.

  result.textContent = subTotal // modifico el contenido de result por el valor de subtotal

  //console.log(`nodo de price es,`, { price })
  //console.log(`xxxxxx `, { quantity })
  //console.log({ subTotal })

  //enviar al Dom el resultado de subTotal

  return subTotal
}*/

function updateSubtotal(product2) {
  const product2 = document.getElementsByClassName('product'); // guardo en product2 (array) todas las clases de product 
  product2.forEach(function () {

  });
}

function calculateAll() {

  const singleProduct2 = document.querySelector('.product2');
  updateSubtotal(singleProduct2);



}

// ITERATION 3
//... your code goes here
function updateSubtotal() {
  sumSubTotal = singleProduct += singleProduct2 // 
  const totalResult = document.querySelector("#total-value")
  return sumSubTotal
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
