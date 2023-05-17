// ITERATION 1

function updateSubtotal(product) {
	console.log("Calculating subtotal, yey!");
	const priceDOM = product.querySelector(".price span");
	const quantityDOM = product.querySelector(".quantity input");
	const priceValue = Number(priceDOM.innerText);
	const quantityValue = Number(quantityDOM.value);
	const subtotalPrice = quantityValue * priceValue;
	const subtotalDOM = product.querySelector(".subtotal span");
	subtotalDOM.innerText = subtotalPrice;
	return subtotalPrice;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	/* 
	const singleProduct = document.querySelector(".product");
	updateSubtotal(singleProduct); */

	// end of test
	// ITERATION 2

	const productsNode = document.querySelectorAll(".product");

	let totalValue = 0;

	productsNode.forEach((eachProduct) => {
		totalValue += updateSubtotal(eachProduct);
	});

	// ITERATION 3

	const totalValueDOM = document.querySelector("#total-value");
	totalValueDOM.innerText = `$${totalValue}`;
}

/* console.log(document.querySelectorAll(".product")); */
// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	console.log("The target in remove is:", target);
	//... your code goes here
}

// ITERATION 5

function createProduct() {
	//... your code goes here
}

window.addEventListener("load", () => {
	const calculatePricesBtn = document.getElementById("calculate");
	calculatePricesBtn.addEventListener("click", calculateAll);

	//... your code goes here
});
