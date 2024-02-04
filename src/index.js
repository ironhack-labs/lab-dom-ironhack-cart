// ITERATION 1

function updateSubtotal(product) {
	console.log("Calculating subtotal, yey!");

	//step 1 and 2
	const price = Number(product.querySelector(".price span").innerHTML); //you should convert the price to a numeric value
	const quantity = parseInt(product.querySelector(".quantity input").value); // .value returns a string

	// step 3
	const totalPrice = price * quantity;

	// step 4. get the DOM element that should hold the subtotal.
	const subtotalElement = product.querySelector(".subtotal span");

	// step 5. set the total price to the corresponding DOM element
	subtotalElement.innerHTML = totalPrice.toFixed(2); // Display subtotal with two decimal places

	return totalPrice;
}

function calculateAll() {
	//TEST ON 1 ELEMENT get the first DOM element with the class product (row)
	// const singleProduct = document.querySelector('.product');
	// singleProduct is passed as an argument to the updateSubtotal() function.
	// updateSubtotal(singleProduct);

	// ITERATION 2
	// get all products
	const products = document.getElementsByClassName("product");

	let totalPrice = 0;
	for (let i = 0; i < products.length; i++) {
		let currentProduct = products[i];
		totalPrice = totalPrice + updateSubtotal(currentProduct);
	}
	// ITERATION 3
	let totalElemPrice = document.getElementById("total-value");
	totalElemPrice.innerHTML = totalPrice.toFixed(2);
}
// ITERATION 4

function removeProduct(event) {
	// gets the element on which the event was initially fired
	const target = event.currentTarget;
	// moves up two levels in the DOM hierarchy to
	// reach the grandparent node of the clicked button
	const targetParent = target.parentNode.parentNode;
	// removes the entire row (parent node of the clicked button) from DOM
	targetParent.removeChild(target.parentNode);
	calculateAll();
}

// ITERATION 5

function createProduct() {
	//... your code goes here
}

window.addEventListener("load", () => {
	// got the element with the id="calculate"
	const calculatePricesBtn = document.getElementById("calculate");

	// added an event listener click to it
	calculatePricesBtn.addEventListener("click", calculateAll);
	// This button will fire the calculateAll() function when clicked

	//selects all buttons inside the class "action".
	let productsButtonRemove = document.querySelectorAll(".action");
	for (let i = 0; i < productsButtonRemove.length; i++) {
		productsButtonRemove[i].addEventListener("click", removeProduct);
	}
	// alternative
	// const productsButtonRemove = document.querySelectorAll(".action");
	// productsButtonRemove.forEach((button) =>
	// 	button.addEventListener("click", removeProduct));
});
