// ITERATION 1

function updateSubtotal($product) {
	console.log('Product ', $product);
	let unitPrice = Number($product.querySelector('.price span').innerHTML);
	console.log('Unit Price: ', unitPrice);

	let unitQuantity = Number($product.querySelector('.quantity input').value);
	console.log('Unit Quantity: ', unitQuantity);

	let subtotal = unitPrice * unitQuantity;
	$product.querySelector('.subtotal span').innerHTML = subtotal;

	console.log(subtotal);

	return subtotal;
}

function calculateAll() {
	// ITERATION 2

	let allProducts = document.querySelectorAll('.product')
	console.log('Esto es All Products ', allProducts)

	let finalPrice = 0;
	allProducts.forEach((elm) => {
		finalPrice += updateSubtotal(elm)
		console.log('Final Price: ', finalPrice)
	});

	// ITERATION 3

	document.querySelector('#total-value span').innerHTML = finalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});