// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subTotalProduct = price.textContent * quantity.value;
  console.log(subTotalProduct);

  product.querySelector('.subtotal').textContent = subTotalProduct;
  return subTotalProduct;

}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Su propósito es llamar a la función updateSubtotal con cada tr.product nodo DOM en el table#cart.

  const variousProduct = document.getElementsByClassName('product');

  let priceTotal = 0;

  for (let i = 0; i < variousProduct.length; i++) {
    priceTotal += updateSubtotal(variousProduct[i]);
    console.log(variousProduct[i]);
  }

  // ITERATION 3
  //Al final de la calculateAll()función, reutilice el valor total que acaba de calcular en la iteración 
  // anterior y actualice el elemento DOM correspondiente. Calcule el precio total de los productos en su carrito 
  // sumando todos los subtotales devueltos por updateSubtotal()cuando se llamó con cada producto.

  document.getElementById('total-value').textContent = `Total: $${priceTotal}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row)
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


  const deleteButtons = document.querySelectorAll('.btn-remove')

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', removeProduct)
  }
})

