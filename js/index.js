// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;

  return parseFloat(subtotal.innerHTML);
}

function calculateAll() {
  const products = document.getElementsByClassName("product");
  const arrProd = [...products];

  let total = 0;
  for (i in arrProd) {
    total += updateSubtotal(arrProd[i]);
    console.log(updateSubtotal(arrProd[i]));
  }
  console.log(total);
  document.querySelector('#total-value span').innerHTML = total;

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  calculateAll();

  
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-name input').value;
  const price = document.querySelector('.create-price input').value;
  //target the element to copy;

  const node = document.getElementsByClassName("product")[0];
  const clone = node.cloneNode(true);
  document.getElementById('cartbody').appendChild(clone);
  document.getElementById('cartbody').lastChild.querySelector('.name span') = name;

  // best effort so far
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeElBtn = document.getElementsByClassName('btn btn-remove');
  const arrRemove = [...removeElBtn];
  for(i in arrRemove) {
    console.log(arrRemove[i])
    arrRemove[i].addEventListener('click',removeProduct);
  }
//add click event to 'Create product' btn
  const addProdBtn = document.getElementById('create');
  addProdBtn.addEventListener('click',createProduct);

  
});
