let productTemplateGlobal = document.querySelector('.product');

// ITERATION 1
function updateSubtotal(product) {



	const price = product.querySelector(".price span").innerHTML;
	const quantity = product.querySelector(".quantity input").value;
	const newSubtotal = price * quantity;
	

	let toUpdate = product.querySelector(".subtotal span");
	toUpdate.innerHTML = "";
	toUpdate.innerHTML += `${newSubtotal}`;

	return newSubtotal;	
}

function calculateAll() {

	// ITERATION 2

	const allProducts = document.querySelectorAll('.product');
	console.log(allProducts);
	
	let totalPrice = 0;

	allProducts.forEach((elm) => {
		totalPrice += updateSubtotal(elm);
	});

  // ITERATION 3

	let totalElement = document.querySelector("#total-value span");
	totalElement.innerHTML = "";
	totalElement.innerHTML += `${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {

	const target = event.currentTarget;
	let targetProduct = target.parentNode.parentNode
	let targetProductParent = targetProduct.parentNode;
	targetProductParent.removeChild(targetProduct);
	calculateAll();
}

// ITERATION 5

function createProduct(event) {
	const target = event.currentTarget.parentNode.parentNode;

	const productName = target.querySelectorAll('td input')[0].value;
	const productPrice = addZeroes(target.querySelectorAll('td input')[1].value);
	if (!productName){
		return;
	}

	let newProduct = productTemplateGlobal.cloneNode(true);
	newProduct.childNodes[1].innerHTML = `<span>${productName}</span`;
	newProduct.childNodes[3].innerHTML = `$<span>${productPrice}</span`;
	const cart = document.querySelector('tbody');
	cart.appendChild(newProduct);
	let newProductbtn = newProduct.querySelector('.btn-remove');
	
	newProductbtn.onclick = removeProduct;
	clearInputs(target);
}

function addZeroes(num) {
	let value = Number(num);
	let res = num.split(".");

	if (res.length === 1 || res[1].length > 3){
		value = value.toFixed(2);
	}

	return String(value);
}

function clearInputs(inputs){
	inputs.querySelectorAll('td input')[0].value = "";
	inputs.querySelectorAll('td input')[1].value = "";
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	const removeBtn = document.querySelectorAll('.btn-remove');
	removeBtn.forEach( function (eachBtn) {
		eachBtn.onclick = removeProduct;
	});

	const createBtn = document.querySelectorAll('#create');
	createBtn.forEach(function (eachBtn) {
		eachBtn.onclick = createProduct;
	});
	
});
