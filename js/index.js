// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const valuePrice = price.innerHTML;
  const valueQuantity = quantity.value;

  const total = product.querySelector('.subtotal span');
  return total.innerHTML = valuePrice * valueQuantity;
}

function calculateAll() {
  // ITERATION 2
  
  // let sum = 0;
  // for (let i = 0; i < products.length; i++) {
  //   sum += updateSubtotal(products[i]);
  // }
  
  const cartItems = document.querySelectorAll('.product');
  
  cartItems.forEach((product) => updateSubtotal(product));

  // ITERATION 3
const sub = document.querySelectorAll('.subtotal span');

const totalPrices = [...sub]
  .map((item) => Number(item.textContent))
  // alternative to Number() +item.textContent
  .reduce((acc, currentValue) => acc += currentValue);

 const result = document.querySelector('#total-value span')
 return result.innerHTML = totalPrices;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const mainParentNode = target.closest('.product');
  mainParentNode.remove();

  calculateAll(); 
}

// ITERATION 5

function createProduct() {
  // const newItem = document.querySelector('.create-product input');
  // const newItem = document.querySelectorAll('.create-product');
  // const newItem = document.getElementsByClassName('create-product')[0];
    // const name = newItem.getElementsByTagName('input')[0].value;
    // const price = newItem.getElementsByTagName('input')[1].value;

//.cloneNode(true);
//.appendChild();

}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const remove = [...document.getElementsByClassName('btn btn-remove')];
  remove.forEach((btn) => 
  btn.addEventListener('click', removeProduct));

  const createItem = document.getElementById('create');
  createItem.addEventListener('click', createProduct);
});