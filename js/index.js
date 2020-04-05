// ITERATION 1

function updateSubtotal(product) {
	const price = product.querySelector('.price span').innerText;
	const quantity = product.querySelector('.quantity input').value;
	const subTotalPrice = Number(price) * Number(quantity);
	const subTotal = product.querySelector('.subtotal span');
	return (subTotal.innerText = subTotalPrice);
	// const subtotal = price.innerHTML
	console.log('Calculating subtotal, yey!');

	//... your code goes here
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.

	// updateSubtotal(singleProduct);
	// end of test

	// ITERATION 2
	const allProducts = document.getElementsByClassName('product');

	const subTotalPriceArray = [];

	for (let i = 0; i < allProducts.length; i++) {
		subTotalPriceArray.push(updateSubtotal(allProducts[i]));
	}

	// ITERATION 3
	const totalPrice = document.getElementById('total-value');
	totalPrice.innerText = `Total: $${subTotalPriceArray.reduce((a, b) => a + b, 0)}`;

	//... your code goes here
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

	const removeBtns = document.querySelectorAll('.btn.btn-remove');

	removeBtns.forEach((removeBtn) => removeBtn.addEventListener('click', removeProduct));

	//... your code goes here
});
