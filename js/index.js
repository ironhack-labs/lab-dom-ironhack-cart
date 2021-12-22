// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;

  let quantity = product.querySelector('.quantity input').value;

  let subtotal = document.querySelector('.subtotal span');

  subtotal.value = quantity * price;

  return Number(
    (product.querySelector('.subtotal span').textContent = subtotal.value)
  );
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;

  allProducts.forEach((elem) => {
    updateSubtotal(elem);

    totalPrice += updateSubtotal(elem);
    document.querySelector('#total-value span').textContent = totalPrice;
  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //Apanhar class e remover TR inteira
  // let products = document.querySelectorAll('.products');

  let child = target.parentNode.parentNode;
  let parent = target.parentNode.parentNode.parentNode;

  // console.log('The target in remove is:', target);
  let removed = parent.removeChild(child);

  if (!child.lenght) {
    document.querySelector('#total-value span').textContent = 0;
  }
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBtn = document.querySelectorAll('.btn-remove');

  removeBtn.forEach((elem) => {
    elem.addEventListener('click', removeProduct);
  });
});
