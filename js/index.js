// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const subtotal = product.querySelector(`.subtotal span`);
  // agarramos los valores en HTML
  let priceNum = parseFloat(price.innerHTML);

  let quantityNum = parseInt(quantity.value);
  //calculamos el valor numerico de subtotal
  let subtotalNum = priceNum * quantityNum;

  subtotal.innerHTML = `${subtotalNum}`;
  // regresar para uso futuro
  return subtotalNum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //  const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allSubtotals = 0;
  const multiproduct = document.getElementsByClassName('product'); // array con todos los nodos tipo product
  for (let index = 0; index < multiproduct.length; index++) {
    allSubtotals += updateSubtotal(multiproduct[index]);
  }

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.innerHTML = `${allSubtotals}`;

  return allSubtotals;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);
  //... your code goes here
  const tBodyParent = target.parentNode.parentNode.parentNode;
  tBodyParent.removeChild(target.parentNode.parentNode);
  calculateAll()
}




// ITERATION 5

function createProduct() {
  //... your code goes her
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBtns= document.getElementsByClassName('btn-remove'); //agarrar el boton

  for (let index = 0; index < removeBtns.length; index++) {
    removeBtns[index].addEventListener('click', removeProduct); //llamar la funcion que elimina 
  }
});
