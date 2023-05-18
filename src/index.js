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
	/* target.parentNode.parentNode.parentNode.removeChild(
		target.parentNode.parentNode
	); // can be refactored using target.closest("selector") */
	parentElement = target.closest("tbody"); // in the inspector I see I want to remove <tr class="product">, the whole line in the cart. It's parent is the tbody element.
	childElement = target.closest(".product");
	parentElement.removeChild(childElement);
}

// ITERATION 5

function createProduct() {
	const productLineDOM = document.querySelector(".product");
	let productTemplate = productLineDOM.cloneNode(true);

	productTemplate.addEventListener("click", removeProduct); //give new line te remove functionality
	templateNameNode = productTemplate.querySelector(".name");
	templatePriceNode = productTemplate.querySelector(".price");
	templateNameNode.innerText = "INPUT";
	templatePriceNode.innerText = "INPUT";

	console.log(productTemplate, templateNameNode, templatePriceNode);

	tBody = document.querySelector("tbody");
	tBody.insertBefore(productTemplate, null);
}

window.addEventListener("load", () => {
	const calculatePricesBtn = document.getElementById("calculate");
	calculatePricesBtn.addEventListener("click", calculateAll);
	const removeBtnNode = document.querySelectorAll(".btn-remove");
	removeBtnNode.forEach((removeBtnDOM) => {
		removeBtnDOM.addEventListener("click", removeProduct);
	});
	const createProdDOM = document.querySelector("#create");
	createProdDOM.addEventListener("click", createProduct);
});
