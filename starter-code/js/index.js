// mes petites variables dans le global scope
var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
var input = document.querySelector('input');
var totalText = document.querySelector('h2 span');
var subtot = document.querySelectorAll('.subtot span');
var linesToDelete = document.querySelectorAll('.product');
var createButton = document.getElementById('create');
var inputNewObjectline = document.querySelector('.class');
var tbody = document.getElementById('tbody');
// var newName = document.getElementById('nproduct-name.').value;
// var newPrice = document.getElementById('nproduct-price').value;

// la définition de mes petites fonctions

function updateSubtot() {
	var unitPrices = document.querySelectorAll('.pu span');
	var quantities = document.querySelectorAll('.qty input');
	unitPrices.forEach((unitPrice, index) => {
		subtot[index].textContent = +unitPrice.textContent * +quantities[index].value;
	});
}

function total() {
	let totalCart = 0;
	for (let i = 0; i < subtot.length; i += 1) {
		totalCart += +subtot[i].textContent;
		totalText.textContent = totalCart.toString();
	}
}

function calcAll() {
	updateSubtot();
	total();
}

function wipe(toto) {
	toto.innerHTML = '';
}

function effacerLaLigne() {
	linesToDelete.forEach((line) => {
		line.querySelector('.btn-delete').onclick = () => wipe(line);
	});
}

function createProduct () {
  var clonedLine = document.querySelector('.product')
  var newLine = clonedLine.cloneNode(true) ;
  tbody.appendChild(newLine);
  
createButton.onclick = () => createProduct ();
calc.onclick = calcAll;
effacerLaLigne();

}

// l'invocation de mes fonctions
createButton.onclick = () => createProduct ();
calc.onclick = calcAll;
effacerLaLigne();

