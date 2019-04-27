/* const products = [{
    name: 'ironbubble-head',
    price: 25.00
  },
  {
    name: 'iron shirt',
    price: 15.00
  },
] */

function deleteItem(e) {
	const parent = e.currentTarget.parentNode.parentNode;
	parent.remove();
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
	/* 0. Construir el array de todos mis productos */

	/* 0.1. Accedo a todas las cantidades y las incluyo en el array productsQtys */
	const productsQtys = document.getElementsByClassName('quantity');
	console.log(productsQtys);
	/* 0.2. Accedo a todas los precios y las incluyo en el array productsPrices */
	const productsPrices = document.getElementsByClassName('price');
	console.log(productsPrices);
	/* 0.3. Accedo a todas los precios totales y las incluyo en el array totalPrices */
	const totalPrices = document.getElementsByClassName('total-price');
	console.log(totalPrices);
	/* 1. Accedemos a los valores unitarios de cada producto */
	let generalPrice = 0;
	for (let i = 0; i < productsQtys.length; i++) {
		console.log(i);
		console.log('price innerText:' + productsPrices[i].innerText);
		console.log('qty value:' + productsQtys[i].value);
		/* 1.1 Calculamos el totalPrice para cada producto */
		const totalPrice = (productsPrices[i].innerText * productsQtys[i].value).toFixed(2);
		/* 1.2 Actualizamos el totalPrice en el elemento html para que se muestre */
		totalPrices[i].innerText = totalPrice;
		console.log(totalPrice);
		/*  console.log(`Total price iteration ${i}: ${totalPrice}`) */
		generalPrice += Number(totalPrice);
	}
	/*   console.log(`General price: ${generalPrice}`) */

	/*  Iteration 3: Calculating the total price of all products */
	document.getElementById('gen-price').innerText = generalPrice;
}

function createQuantityInput(node) {
	const input = document.createElement('input');

	/*   const container = document.getElementById('cantidad') */
	input.type = 'number';
	input.className = 'quantity'; // set the CSS class
	node.appendChild(input); // put it into the DOM
}

function createDeleteButton(node) {
	const button = document.createElement('input');
	button.type = 'submit';
	button.value = 'Delete';
	button.onclick = deleteItem;
	button.className = 'btn btn-delete'; // set the CSS class
	node.appendChild(button); // put it into the DOM
}

function createQuantityNode() {
	const newNode = document.createElement('div');
	const lastRowIndex = document.getElementsByClassName('container')[0].children.length;
	const container = document.getElementsByClassName('row')[lastRowIndex - 2]; //Ultima fila creada

	console.log('createQuantityNode ======');

	console.log(container);
	newNode.className = 'col-2'; // set the CSS class
	container.appendChild(newNode); // put it into the DOM

	createQuantityInput(newNode);
}

function createDeleteButtonNode() {
	const newNode = document.createElement('div');
	const lastRowIndex = document.getElementsByClassName('container')[0].children.length;
	const container = document.getElementsByClassName('row')[lastRowIndex - 2]; //Ultima fila creada
	console.log('createDeletedNode ======');
	newNode.className = 'col-2'; // set the CSS class
	container.appendChild(newNode); // put it into the DOM

	createDeleteButton(newNode);
}

function createTotalPriceNode() {
	const newNode = document.createElement('div');
	const lastRowIndex = document.getElementsByClassName('container')[0].children.length;
	const container = document.getElementsByClassName('row')[lastRowIndex - 2]; //Ultima fila creada
	console.log('createTotalPriceNode ======');
	newNode.className = 'col-2'; // set the CSS class
	container.appendChild(newNode); // put it into the DOM

	const tPrice = document.createElement('span');
	tPrice.className = 'total-price'; // set the CSS class
	newNode.appendChild(tPrice); // put it into the DOM
}

function createItemNodePrice(dataType, itemData) {
	const newNode = document.createElement(dataType);
	const lastRowIndex = document.getElementsByClassName('container')[0].children.length;
	console.log(lastRowIndex);
	const container = document.getElementsByClassName('row')[lastRowIndex - 2]; //Ultima fila creada, penultima del array
	console.log(container);

	//newNode.innerText = itemData
	newNode.className = 'col-2'; // set the CSS class
	const createdCol = container.appendChild(newNode); // put it into the DOM

	const nodeSpan = document.createElement('span');
	nodeSpan.className = 'price';
	nodeSpan.innerText = itemData;
	createdCol.appendChild(nodeSpan);
}

function createItemNodeProductName(dataType, itemData) {
	const newNode = document.createElement(dataType);
	const lastRowIndex = document.getElementsByClassName('container')[0].children.length;
	console.log(lastRowIndex);
	const container = document.getElementsByClassName('row')[lastRowIndex - 2]; //Ultima fila creada, penultima del array
	console.log(container);

	newNode.className = 'col-2'; // set the CSS class
	const createdCol = container.appendChild(newNode); // put it into the DOM

	const nodeSpan = document.createElement('span');
	nodeSpan.className = 'name';
	nodeSpan.innerText = itemData;
	createdCol.appendChild(nodeSpan);
}

function createNewItemRow(itemName, itemUnitPrice) {
	const element = document.createElement('div');
	const addRow = document.getElementById('add-item');
	const container = document.getElementsByClassName('container')[0];

	element.className = 'row';

	//Añadir contenido
	createItemNodeProductName('div', itemName);
	createItemNodePrice('div', itemUnitPrice);
	createQuantityNode();
	createTotalPriceNode();
	createDeleteButtonNode();

	container.insertBefore(element, addRow);
}

function createNewItem() {
	//OK
	const productName = document.getElementById('product-name').value;
	const productPrice = document.getElementById('product-price').value;

	createNewItemRow(productName, productPrice);

	console.log(productName);
	console.log(productPrice);
}

window.onload = function() {
	let calculatePriceButton = document.getElementById('calc-prices-button');
	let createItemButton = document.getElementById('new-item-create');
	let deleteButtons = document.getElementsByClassName('btn-delete');

	calculatePriceButton.onclick = getTotalPrice;

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', deleteItem);
	}

	createItemButton.onclick = createNewItem;
};
