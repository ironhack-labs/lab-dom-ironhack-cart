// ITERATION 1

function updateSubtotal(product) {
	// console.log('Calculating subtotal, yey!');
	const priceStr = product.querySelector(".price span").innerText;
	const quantityStr = product.querySelector("input").value;

	const sumPrice = Number(priceStr) * Number(quantityStr);

	product.querySelector(".subtotal span").innerText = sumPrice.toString();

	return sumPrice;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	// const singleProduct = document.querySelector(".product");
	// updateSubtotal(singleProduct);
	// end of test

	// ITERATION 2 & 3
	const products = document.querySelectorAll("tr.product");
	let totalValue = 0;

	products.forEach((product) => (totalValue += updateSubtotal(product)));

	document.querySelector("#total-value span").innerText = totalValue.toString();
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	const currentProduct = target.parentNode.parentNode;
	// console.log("The target in remove is:", currentProduct);
	document.querySelector("tbody").removeChild(currentProduct);

	calculateAll();
}

// ITERATION 5
const productTemplate = document.querySelector(".product").cloneNode(true);
// productTemplate.querySelector(".name").innerText = "New Things";
// console.dir(productTemplate);

function createProduct() {
	const productName = document.querySelector(
		".create-product td:first-child input"
	);
	const productPrice = document.querySelector(
		".create-product td:nth-child(2) input"
	);

	if (productName.value && productPrice.value) {
		productTemplate.querySelector(".name").innerText = productName.value;
		productTemplate.querySelector(".price span").innerText = productPrice.value;

		const newProduct = productTemplate.cloneNode(true);
		document.querySelector("tbody").appendChild(newProduct);

		const removeBtn = newProduct.querySelector(".btn.btn-remove");
		removeBtn.addEventListener("click", removeProduct);

		productName.value = "";
		productPrice.value = "";
	}
}

window.addEventListener("load", () => {
	const calculatePricesBtn = document.getElementById("calculate");
	calculatePricesBtn.addEventListener("click", calculateAll);

	const removeBtn = document.querySelectorAll(".btn.btn-remove");
	removeBtn.forEach((btn) => btn.addEventListener("click", removeProduct));

	const createBtn = document.querySelector("#create");
	createBtn.addEventListener("click", createProduct);
});
