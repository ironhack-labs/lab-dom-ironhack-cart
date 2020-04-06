// ITERATION 1

function updateSubtotal(product) {
	console.log('Calculating subtotal, yey!');
	let price = product.querySelector('#cart > tbody > tr > td.price > span').innerHTML;
	let quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value;
	let value = price * quantity;
	let subtotal = (product.querySelector('#cart > tbody > tr > td.subtotal > span').innerHTML = value);

	return subtotal;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	// const singleProduct = document.querySelector('.product');
	// updateSubtotal(singleProduct);
	// end of test

	// ITERATION 2 & 3
	const multipleProduct = document.getElementsByClassName('product');
	let total = 0;

	for (i = 0; i < multipleProduct.length; i++) {
		let subtotal = updateSubtotal(multipleProduct[i]);
		total += subtotal;
	}

	document.querySelector('#total-value > span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
	const target = event.target;
	console.log('The target in remove is:', target);
	//... your code goes here
	if (event.target.className === 'btn btn-remove') {
		event.target.parentElement.parentElement.remove();
		calculateAll();
	}
}

// ITERATION 5

function createProduct() {
	let newProduct = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]').value;
	let newUnitPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value;

	document.querySelector('tbody').innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProduct}</span>
  </td>
  <td class="price">$<span>${newUnitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	document.getElementsByTagName('table')[0].addEventListener('click', removeProduct);

	const createBtn = document.getElementById('create');
	createBtn.addEventListener('click', createProduct);
});
