// ITERATION 1

const total = document.querySelector('#total-value span');

const quantities = document.querySelectorAll('.quantity input');
const subSpan = document.querySelector('.subtotal span');

quantities.forEach((subTotal) => {
	subTotal.addEventListener('click', (e) => {
		const product = e.target.parentElement.parentElement;

		const price = product.querySelector('.price span');
		const quantity = product.querySelector('.quantity input');
		const subtotal = product.querySelector('.subtotal span');
		const removeButton = product.querySelector('.action button');

		removeButton.addEventListener('click', () => {
			subtotal.innerText = 0;
			quantity.value = 0;
			calculateAll();
		});

		subtotal.innerText = parseInt(price.innerText) * parseInt(quantity.value);
	});
});

function calculateAll() {
	let allSubs = document.querySelectorAll('.subtotal span');
	let sum = 0;

	for (sub of allSubs) {
		sum += parseInt(sub.innerText);
	}
	console.log(sum);
	total.innerText = sum;

	// end of test

	// ITERATION 2
	//... your code goes here

	// ITERATION 3
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

	//... your code goes here
});
