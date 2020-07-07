// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // declaramos la const price y quantity con Number porque devuelve una sting i innerHTML para que nos de el valor
  const price = Number(product.querySelector('.price span').innerHTML)
  const quantity = Number(product.querySelector('.quantity input').value)

  // hacemos una nueva variable para el producto de precio y quantity 
  const subtotalTotal = price * quantity;

  // cogemos la variable del DOM y la igualamos al subtotalTotal con el producto
  const subtotal = Number(product.querySelector('.subtotal span').innerHTML = subtotalTotal)

  return subtotal;


}

function calculateAll() {

  // ITERATION 2
  //coger todos los productos 
  const products = document.getElementsByClassName('product')
  // convertir a Array para hacer un forEach
  const allProducts = [...products];
  // pasarle la nueva variable un forEach para que haga la función de updateSubtotal

  allProducts.forEach(product => {
    updateSubtotal(product)
  });

  // 

}

// ITERATION 3


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