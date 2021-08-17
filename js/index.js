// ITERATION 1

function updateSubtotal(product) {
	//console.log('Calculating subtotal, yey!');
	//... your code goes here
	const price = product.querySelector('.price span').innerHTML;
	const quantity = product.querySelector('.quantity input').value;
	const subTotalPrice = quantity * price;
	//console.log(subTotalPrice);
	let subTotal = product.querySelector(`.subtotal span`);
	//si el modulo da 0 es decir no es un número con coma flotante, devuelve el número a 2 decimales, sinó, es decir si es un numero sin decimales, pos el numero normal
	subTotal.innerHTML = subTotalPrice % 1 !== 0 ? parseFloat(subTotalPrice).toFixed(2) : subTotalPrice;

	return +subTotal.innerHTML;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.

	// ITERATION 2
	//... your code goes here
	let elements = document.getElementsByClassName('product');
	let total = 0;

	//for of funciona, pero no pasa test...
	for (let element = 0; element < elements.length; element++) {
		total = total + updateSubtotal(elements[element]);
		//console.log(updateSubtotal(elements[element]));
	}

	// No entiendo porqué este me pasa los test, en cambio el resto, cómo el for in que funciona, no...
	// Ya lo he pillao, lo  tenía que tratar con el código de la línia 20, menos el for in, estaba tratando mal un array, un array de objetso, etc
	// for (let element in elements) {
	// 	total += updateSubtotal(elements[element]);
	// }

	// for (let element = 0; element < elements.length; element++) {
	// 	total += updateSubtotal(elements[element]);
	// }

	// for (const element of elements) {
	// 	total += updateSubtotal(elements[element]);
	// }
	//elements.forEach((element) => (total += updateSubtotal[element]));

	// ITERATION 3
	//... your code goes here
	document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
	const target = event.currentTarget;
	alert('The target in remove is:', target);
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
