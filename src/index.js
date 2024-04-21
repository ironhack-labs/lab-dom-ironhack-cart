// ITERATION 1

function updateSubtotal(product) {     //, product_single_price, product_single_quantity
  console.log('Calculating subtotal, yey!');

  //sigo sin entender porque aqui podemos usar product y no document
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  //let calculo = Number(price.textContent) * quantity; otra forma
  let calculo = price * quantity;
  
  let subtotal = product.querySelector('.subtotal span');
      subtotal.innerText = calculo;
      return subtotal.innerText
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // ITERATION 2

  //sigo sin entender poque no podemos usar product aquiiiiiii
  const product_varios = document.getElementsByClassName("product");


  let total = 0;
  for( i=0 ; i<product_varios.length ; i++){
  
  const product_single_price = product_varios[i].querySelector('.price span');
  const product_single_quantity = product_varios[i].querySelector('.quantity input');

  const subtotal = updateSubtotal(product_varios[i], product_single_price, product_single_quantity);
  
  console.log(total);
  console.log(subtotal);
  total = parseFloat(total) + parseFloat(subtotal);
  
  }

  // ITERATION 3
  
    document.getElementById("total-value").textContent = "Total: $" + total;



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