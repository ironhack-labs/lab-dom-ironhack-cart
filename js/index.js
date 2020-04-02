// ITERATION 1

function updateSubtotal(product) {
	// console.log('Calculating subtotal, yey!');

	const price = product.querySelector('.price span');
	const quantity = product.querySelector('.quantity input');
	const subTotal = product.querySelector('.subtotal span');
  const subTotalValue = Number(price.innerHTML) * Number(quantity.value);
	subTotal.innerHTML = subTotalValue

	// console.log(typeof Number(price.innerHTML))
	// console.log(product);
	// console.log(price);
	// console.log(quantity.value);
	// console.log(subTotal);

	return subTotalValue
}

// ITERATION 2

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	// const singleProduct = document.querySelector('.product');
	// updateSubtotal(singleProduct);

	const products = document.getElementsByClassName('product');
	console.log(products);
	let totalSum = 0;
	for (let i = 0; i < products.length; i++) {
		totalSum += updateSubtotal(products[i]);
		// console.log(updateSubtotal(products[i]))
	}

	// ITERATION 3

	const total = document.querySelector('#total-value span');
	total.innerHTML = totalSum;

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
