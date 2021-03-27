// ITERATION 1

function updateSubtotal(product) {
	console.log('Calculating subtotal, yey!');

	const price = parseFloat(product.querySelector(".price span").innerHTML);
	const quantity = parseInt(product.querySelector(".quantity input").value);

	const subtotal = price * quantity;

	product.querySelector(".subtotal span").innerHTML = subtotal;

	return subtotal;
}

function calculateAll() {

	// ITERATION 2

	const products = document.querySelectorAll(".product");
	let total = 0;

	products.forEach(elem => {
		total += updateSubtotal(elem);
	});

	// ITERATION 3

	document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	console.log('The target in remove is:', target);

	const removedProduct = target.parentNode.parentNode;
	document.querySelector("tbody").removeChild(removedProduct);

	calculateAll();
}

// ITERATION 5

function createProduct() {
	const name = document.querySelector(".create-product .name input").value;
	const price = document.querySelector(".create-product .price input").value;

	// https://developer.mozilla.org/es/docs/Web/API/Node/cloneNode
	const newProduct = document.querySelector(".product").cloneNode(true);

	newProduct.querySelector(".name span").innerHTML = name;
	newProduct.querySelector(".price span").innerHTML = price;

	newProduct.querySelector(".btn-remove").addEventListener("click", removeProduct);

	document.querySelector(".create-product .name input").value = "";
	document.querySelector(".create-product .price input").value = 0;

	document.querySelector("tbody").appendChild(newProduct);
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	const removeBtns = document.querySelectorAll(".btn-remove");
	removeBtns.forEach(elem => {
		elem.addEventListener("click", removeProduct);
	});

	const createBtn = document.querySelector("#create");
	createBtn.addEventListener("click", createProduct);
});