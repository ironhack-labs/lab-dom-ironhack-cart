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

	//... your code goes here
	// selecionamos dos parent nodes (dos arriba)
	//https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
	const parentOfParent = target.parentNode.parentNode;
	let subTotalsTotal = 0;

	//removemos a partir de dos parent arriba
	parentOfParent.remove();

	//modificamos el valor del total ya que han sido eliminado uno o varios productos
	//pillamos por for todos los span del subtotal y lo sumamos, luego lo ponemos en el Total
	const subTotal = document.querySelectorAll('.subtotal span');

	for (let i = 0; i < subTotal.length; i++) {
		subTotalsTotal += Number(subTotal[i].innerHTML);
	}

	//25+15+5+1 = 46
	document.querySelector('#total-value span').textContent = Number(subTotalsTotal);
}

// ITERATION 5
function createProduct(event) {
	//... your code goes here
	const target = event.currentTarget;
	//pillamos input1 para el producto y el input2 para el precio a poner al producto
	const inputProductoNombre = document.querySelector('.create-product td input');
	const inputProductoValor = document.querySelector(`.create-product td input[type='number']`);

	//toFloat y input para evitar problemas del unit price del que tenemos que crear
	let unitPrice = inputProductoValor.value;
	let unitPriceFinal = parseFloat(unitPrice).toFixed(2);

	//seleccionamos tbody de la tabla
	const tableBody = document.querySelector('tbody');

	//creamos TR dentro de TBODY
	const newTrow = document.createElement('tr');
	newTrow.classList = 'product';
	tableBody.appendChild(newTrow);
	//creamos TD dentro de TR dentro de TBODY
	const newTd = document.createElement('td');
	newTd.classList = 'name';
	newTrow.appendChild(newTd);
	//creamos span dentro de [...] con el nombre pillado del input nombreProducto
	const newSpan = document.createElement('span');
	newSpan.textContent = inputProductoNombre.value;
	newTd.appendChild(newSpan);
	//creamos td debajo tr primero para la cantidad
	const newTdPrecio = document.createElement('td');
	newTdPrecio.classList = 'price';
	newTdPrecio.innerText = '$';
	newTrow.appendChild(newTdPrecio);
	//span dentro TD precio
	const newSpanPrecio = document.createElement('span');
	newSpanPrecio.textContent = unitPriceFinal;
	newTdPrecio.appendChild(newSpanPrecio);
	//otro td a colgar de TR para la cantidad
	const newTdCantidad = document.createElement('td');
	newTdCantidad.classList = 'quantity';
	newTrow.appendChild(newTdCantidad);
	//input con mucha mierda
	const newQuantityInput = document.createElement('input');
	newQuantityInput.type = 'number';
	newQuantityInput.min = '0';
	newQuantityInput.value = '0';
	newQuantityInput.placeholder = 'Quantity';
	newTdCantidad.appendChild(newQuantityInput);
	//otro td a colgar en tr principal para subtotal
	const newTdSubtotal = document.createElement('td');
	newTdSubtotal.classList = 'subtotal';
	newTdSubtotal.innerText = '$';
	newTrow.appendChild(newTdSubtotal);
	//span dentro TD subtotal
	const newSpanSubTotal = document.createElement('span');
	newSpanSubTotal.innerText = '0';
	newTdSubtotal.appendChild(newSpanSubTotal);
	//otro td a colgar en tr principal para el boton
	const newTdButtonAction = document.createElement('td');
	newTdButtonAction.classList = 'action';
	newTrow.appendChild(newTdButtonAction);
	//un botón dentro del td action
	const newButton = document.createElement('button');
	newButton.classList = 'btn btn-remove';
	newButton.textContent = 'Remove';
	newTdButtonAction.appendChild(newButton);

	//testing para remover solo uno
	//he estado haciendo varios testings, pero son la 1 y quiero sobar, así que repito código y tan ancho
	const removeProductBtn = document.getElementsByClassName('btn-remove');
	for (let i = 0; i < removeProductBtn.length; i++) {
		removeProductBtn[i].addEventListener('click', removeProduct);
	}

	// esta mierda me destroza todos, en lugar del creado

	//estructura a crear
	/*
	<tr class="product">
		<td class="name">
			<span>Ironhack Pomelo</span>
		</td>
		<td class="price">$<span>1.00</span></td>
		<td class="quantity">
			<input type="number" value="0" min="0" placeholder="Quantity" />
		</td>
		<td class="subtotal">$<span>0</span></td>
		<td class="action">
			<button class="btn btn-remove">Remove</button>
		</td>
	</tr>
	*/
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	//... your code goes here
	const removeProductBtn = document.getElementsByClassName('btn-remove');
	for (let i = 0; i < removeProductBtn.length; i++) {
		removeProductBtn[i].addEventListener('click', removeProduct);
	}

	const createNewProduct = document.getElementById('create');
	createNewProduct.addEventListener('click', createProduct);
});
