// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let thePrice = Number(price.innerHTML);
  let theQuantity = Number(quantity.value);
  let subTotal = thePrice * theQuantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = `${subTotal.toString()}`;
}

function calculateAll() {
  // ITERATION 2
  const tableArr = document.querySelectorAll('.product');
  tableArr.forEach(element => {
    updateSubtotal(element);
  })

  // ITERATION 3
  let total = 0
  tableArr.forEach(element => {
    const subtotal = element.querySelector(".subtotal span");
    let theSubtotal = Number(subtotal.innerHTML);
    total += theSubtotal;
  });
  const totalTable = document.querySelector("#total-value span");
  totalTable.innerText = `${total.toString()}`
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
