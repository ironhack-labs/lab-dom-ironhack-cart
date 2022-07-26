// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = Number(price.innerText) * Number(quantity.value);
  // console.log({price, quantity, subtotalPrice})
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalPrice;

  const allRemove = document.querySelectorAll('.btn-remove');
  console.log(allRemove)
  
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  //... your code goes here
  let total = 0
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((elem) => {
    updateSubtotal(elem)
    total += updateSubtotal(elem);
  });

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector("#total-value span")
  totalPrice.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  // console.log(target.parentNode)
  const target = event.currentTarget;
  // table row .product > td .action > button .btn-remove
  const productRowToRemove = target.parentNode.parentNode;
  productRowToRemove.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const Name = document.get
  console.log("hey")
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allRemove = document.querySelectorAll('.btn-remove');
  allRemove.forEach((eachButton) => {
    eachButton.addEventListener('click', removeProduct)
  })

  const createProd = document.getElementById('create');
  createProd.addEventListener('click', createProduct)
});