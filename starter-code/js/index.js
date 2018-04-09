






// VARIABLES

const calculate = document.getElementById('calculate');
const units = document.getElementById('units');
const price = document.querySelector('#cost span').textContent;
const wrapper = document.getElementsByClassName('wrapper');
const deleteThis = document.getElementById('deleteThis');
const totalPrice = document.getElementById('total');
const test = document.getElementById('test');
const total = document.querySelector('#total span');
const create = document.getElementById('create');

// EVENT LISTENERS

loadListeners();

function loadListeners() {
	calculate.addEventListener('click', calculateprices);
	deleteThis.addEventListener('click', deleteprices);
	create.addEventListener('click', createProduct);
}

// FUNCTIONS

function deleteprices() {
  deleteThis.parentElement.parentElement.remove();
  console.log(deleteprices)
}

function createProduct() {
	var Product = document.getElementById('addProduct').value;
	var cost = document.getElementById('addCost').value;
	var container = document.getElementById('newWrapper');
	console.log(container);
	var newWrapper = document.createElement('div');
	newWrapper.setAttribute("class", "wrapper")
	newWrapper.innerHTML = `
		<div id="product"><span>${Product}</span></div>
		<div id="cost">$<span>${cost}</span></div>
		<div id="units">
			<label for="">QTY</label>
			<input id="units" type="number" value="0">
		</div>
		<div id="total">$<span>0</span></div>
		<div id="delete"><button class="btn btn-delete" id="deletePrices" class="delete">Delete</button></div>
	`
	container.appendChild(newWrapper);
}

function calculateprices() {
	// var value = units.value * price;
	values = [];
	total.innerHTML = units.value * price;
	test.innerHTML = units.value * price;
	console.log(total);
}