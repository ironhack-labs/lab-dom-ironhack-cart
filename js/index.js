// ITERATION 1

function updateSubtotal(product) {

	console.log('Calculating subtotal, yey!');

	const price = product.querySelector(".price span").innerHTML;
	const quantity = product.querySelector(".quantity input").value;
	const newSubtotal = price * quantity;
	

	let toUpdate = product.querySelector(".subtotal span");
	toUpdate.innerHTML = "";
	toUpdate.innerHTML += `${newSubtotal}`;

	return newSubtotal;	
}

function calculateAll() {

	// ITERATION 2

	const allProducts = document.querySelectorAll('.product');
	console.log(allProducts);
	
	let totalPrice = 0;

	allProducts.forEach((elm) => {
		totalPrice += updateSubtotal(elm);
	});

  // ITERATION 3

	let totalElement = document.querySelector("#total-value span");
	totalElement.innerHTML = "";
	totalElement.innerHTML += `${totalPrice}`;
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

	const calculaRemoveBtn = document.querySelectorAll('.btn-remove');
	calculaRemoveBtn.forEach(addEventListener('click', removeProduct));
});
