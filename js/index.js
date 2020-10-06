// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML); //pasamos el string a número
  const quantity = product.querySelector('.quantity input').value; //pasamos el string a número
  let subtotalprice = price*quantity;
  console.log(subtotalprice);
  console.log(price);
  console.log(quantity);
  let subtotaltext = product.querySelector('.subtotal span');
  subtotaltext.innerHTML = ""; //eliminamos el span (0)
  const subtotal = product.querySelector('.subtotal span').append(subtotalprice); //sustituimos el span al producto
  return subtotalprice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //pdateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalprice = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    totalprice += Number(updateSubtotal(products[i]));
  }

  console.log(totalprice);
  
  // ITERATION 3
  let totaltext = document.querySelector('#total-value span');
  totaltext.innerHTML = "";
  const total = document.querySelector('#total-value span').append(totalprice);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parentElement = document.getElementsByTagName("tbody")[0];
  const elementToRremove = document.getElementsByClassName('product')[0];
  parentElement.removeChild(elementToRremove);


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // ... your code goes here
  const removeItemsBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeItemsBtn.length; i++){
    removeItemsBtn[i].addEventListener('click', removeProduct); //Hacemos un for porqué le estamos aplicando el método .addEventListener que solo puede aplicarse al elemento, no a la array que obtenemos con getElementsByClassName.
  }

});




