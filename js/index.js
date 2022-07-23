// ITERATION 1

function updateSubtotal(product) {
	console.log('Calculating subtotal, yey!');
	let quantity = product.querySelector('.quantity input').value;
	let price = product.querySelector('.price span').innerText;
	let subtotal = quantity * price;
	product.querySelector('.subtotal span').innerText = subtotal;
	return subtotal;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	// const singleProduct = document.querySelector('.product');
	// updateSubtotal(singleProduct);
	// end of test

	// ITERATION 2
	const products = document.querySelectorAll('.product');
	let total = 0;
	products.forEach((product) => {
		total += updateSubtotal(product);
	});

	// ITERATION 3
	const totalElement = document.querySelector('#total-value span');
	totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	console.log('The target in remove is:', target.parentNode);
	const product = target.parentElement.parentElement;
	product.remove();
	calculateAll();
}

// ITERATION 5

function createProduct() {
	let name = document.querySelector('.create-product input[type=text]');
	let price = document.querySelector('.create-product input[type=number]');

	const product = document.createElement('tr');
	product.classList.add('product');
	product.innerHTML = `
    <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
	const table = document.querySelector('#cart tbody');
	product.querySelector('.btn-remove').addEventListener('click', removeProduct);

	name.value = '';
	price.value = '';
	table.appendChild(product);
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	//get all remove buttons
	const removeButtons = document.querySelectorAll('.btn-remove');
	removeButtons.forEach((button) => {
		button.addEventListener('click', removeProduct);
	});

	//create
	const createProductBtn = document.getElementById('create');
	createProductBtn.addEventListener('click', createProduct);
});
