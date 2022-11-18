// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const priceValue = price.textContent;
  const quantityValue = quantity.value;
  const subtotalPrice = Number(priceValue) * Number(quantityValue);

  subtotal.innerText = subtotalPrice.toFixed(2);

  return subtotalPrice;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const totalProducts = document.querySelector('#total-value span');
  let sumTotal = 0;

  products.forEach((product) => {
    const subtotal = updateSubtotal(product);
    sumTotal += subtotal;
  });

  totalProducts.innerText = sumTotal.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const removeTarget = target.parentNode.parentNode;
  removeTarget.remove()
  
  console.log(target.parentNode.parentNode)
  
}

// ITERATION 5

function createProduct() {
   const inputName = document.querySelector('#input-name');
   const inputPrice = document.querySelector('#input-price');
   const name = inputName.value;
   const price = inputPrice.value;

   const cloneProduct = document.querySelector('#templates .product');
   cloneProduct.querySelector()
}
 
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const allRemoveBtns = document.querySelectorAll('.btn-remove');
  const createButton = document.querySelector('#create')

  createButton.addEventListener('click', createProduct);
  

  allRemoveBtns.forEach((btn) => {
    btn.addEventListener('click',removeProduct);
  })

  calculatePricesBtn.addEventListener('click', calculateAll);
});

  