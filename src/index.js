// ITERATION 1

const total = document.querySelector('#total-value span');
const subSpan = document.querySelector('.subtotal span');
const quantities = document.querySelectorAll('.quantity input');

quantities.forEach((input) => {
	input.addEventListener('click', (e) => {
		const product = e.target.parentElement.parentElement;

		const price = product.querySelector('.price span');
		const quantity = product.querySelector('.quantity input');
		const subtotal = product.querySelector('.subtotal span');
		const removeButton = product.querySelector('.action button');

		removeButton.addEventListener('click', () => {
			subtotal.innerText = 0;
			quantity.value = 0;
			if (total.innerText !== 0) calculateAll();
		});

		subtotal.innerText = parseInt(price.innerText) * parseInt(quantity.value);
	});
});

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', () => calculateAll());

function calculateAll() {
	let allSubs = document.querySelectorAll('.subtotal span');
	let sum = 0;

	for (sub of allSubs) {
		sum += parseInt(sub.innerText);
	}

	total.innerText = sum;

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
}
