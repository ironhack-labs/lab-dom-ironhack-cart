// ITERATION 1

function updateSubtotal(product) {
	let price = product.querySelector(`.price span`).innerHTML;
	let quantity = product.querySelector(`.quantity input`).value;
	let subtotalAmount = Number(price) * Number(quantity);
	let subtotal = (product.querySelector(`.subtotal span`).innerHTML = subtotalAmount);
	return subtotal;
}

function calculateAll() {
	// ITERATION 2
	let allProducts = document.querySelectorAll(`.product`);
	allProducts.forEach((product) => {updateSubtotal(product);});

  // ITERATION 3
  let totalAmount = [...allProducts].reduce((accum, current) => {return accum + updateSubtotal(current)},0);
  let total = document.querySelector(`#total-value span`);
  total.innerHTML = totalAmount;
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
