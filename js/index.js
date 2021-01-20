// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  const quantity = document.querySelector('.quantity input').value;
  let subtotal = Number(price * quantity);

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2

  let total = 0;
  const allProducts = document.getElementsByClassName('product');

  for (let product of allProducts) {
    product =+ updateSubtotal(product); 
  }

  document.querySelector('#total-value span').innerHTML = total;

  return total;


  // ITERATION 3
  //... your code goes here

}


// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  const child = target.closest('tr');
  const parent = target.closest('tbody');

  parent.removeChild(child);
}

// ITERATION 5

function createProduct() {

  let newInput = document.querySelector('.create-product input').value;
  let newPriceBefore = document.querySelector('.create-product td').nextElementSibling.querySelector('input').value;
  let newPrice = Number(newPriceBefore).toFixed(2);

  let addedNewProduct = document.querySelector('.product').cloneNode(true);
  document.querySelector('tbody').appendChild(addedNewProduct);

  let addedInput = document.querySelector('.product:last-child').firstElementChild.firstElementChild;
  addedInput.textContent = newInput;
  let addedPrice = document.querySelector('.product:last-child').childNodes[3].firstElementChild;
  addedPrice.innerText = newPrice;
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtns = document.querySelectorAll('.btn-remove'); 
  removeBtns.forEach(btn => btn.onclick = removeProduct);

  let addBtn = document.getElementById('create');
  addBtn.onclick = createProduct;
});
