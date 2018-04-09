// VARIABLES

const calcular = document.getElementById('calcular');
const unidades = document.getElementById('unidades');
const precio = document.querySelector('#cost span').textContent;
const wrapper = document.getElementsByClassName('wrapper');
const borrar = document.getElementById('borrar');
const totalPrecio = document.getElementById('total');
const test = document.getElementById('test');
const total = document.querySelector('#total span');
const crear = document.getElementById('create');




// EVENT LISTENERS

cargarListeners();

function cargarListeners() {

	calcular.addEventListener('click', calcularPrecios);
	borrar.addEventListener('click', borrarPrecios);
	crear.addEventListener('click', crearProducto);

}




// FUNCIONES

function borrarPrecios() {

	borrar.parentElement.parentElement.remove();

}

function crearProducto() {

	var producto = document.getElementById('addProduct').value;
	var costo = document.getElementById('addCost').value;
	var container = document.getElementById('newWrapper');
	console.log(container);

	var newWrapper = document.createElement('div');
	newWrapper.setAttribute("class", "wrapper")
	newWrapper.innerHTML = `
		<div id="product"><span>${producto}</span></div>
		<div id="cost">$<span>${costo}</span></div>
		<div id="units">
			<label for="">QTY</label>
			<input id="unidades" type="number" value="0">
		</div>
		<div id="total">$<span>0</span></div>
		<div id="delete"><button class="btn btn-delete" id="borrar" class="borrar">Borrar</button></div>
	`
	container.appendChild(newWrapper);
}

function calcularPrecios() {

	// var valor = unidades.value * precio;
	valores = [];

	total.innerHTML = unidades.value * precio;
	test.innerHTML = unidades.value * precio;
	

	console.log(total);

	// for(var i = 0; i < wrapper.length; i++) {

		// valores.push(wrapper[i].childNodes[7].childNodes[1].textContent);

		
		// if(wrapper.length > 1) {
		// 	valor = valores[i] * unidades.value;
		// 	total += total + valor;
		// 	test.innerHTML = total - (valores[0] * unidades.value);
		// 	console.log(total);

		// } else if(wrapper.length === 1) {
		// 	valor = valores[i] * unidades.value;
		// 	total += valor;
		// 	test.innerHTML = total;
		// } else if(wrapper.length === 0) {
		// 	total = 0;
		// 	test.innerHTML = total;
		// }

			
	// }

}




// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };



// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }


