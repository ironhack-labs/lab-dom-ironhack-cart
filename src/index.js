// ITERATION 1

const total = document.querySelector('#total-value span');
const quantities = document.querySelectorAll('.quantity input');

//Selecting all quantity inputs, and changing the values on click for that specific row
quantities.forEach((input) => {
	input.addEventListener('click', (e) => {
		const product = e.target.parentElement.parentElement;

		const price = product.querySelector('.price span');
		const quantity = product.querySelector('.quantity input');
		const subTotal = product.querySelector('.subtotal span');
		const removeButton = product.querySelector('.action button');

		subTotal.innerText = parseInt(price.innerText) * parseInt(quantity.value);

		removeButton.addEventListener('click', () => {
			subTotal.innerText = 0;
			quantity.value = 0;
			if (total.innerText !== '0') calculateAll();
		});
	});
});

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', () => calculateAll());

//Loops through all Subtotal prices and displays the sum of it in the Total
function calculateAll() {
	let allSubs = document.querySelectorAll('.subtotal span');
	let sum = 0;

	for (sub of allSubs) {
		sum += parseInt(sub.innerText);
	}

	total.innerText = sum;

	// ITERATION 4

	//Accidentaly did iteration 4 on line 18

	// ITERATION 5

	function createProduct() {}
}
