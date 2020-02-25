const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');
const createButton = document.getElementById('create');
const totalH2 = document.querySelector('h2 span');
const deleteButton = document.querySelector('.btn-delete');


function updateSubtot($product) {
	let quantity = $product.querySelector('.qty input').value;
	let unitPrice = $product.querySelector('.pu span').innerHTML;
	let calculateSubtotal = $product.querySelector('.subtot span');
	calculateSubtotal.textContent = quantity * unitPrice;
}


createButton.onclick = newProduct;

function newProduct() {
	let newName = document.querySelector('.new input[type = "text"');
	let newPrice = document.querySelector('.new input[type = number');
	let newTr = document.createElement('tr');
	newTr.className = 'product';
	newTr.innerHTML = `
	<td class="name">
            <span>${newName.value}</span>
          </td>

          <td class="pu">$<span>${newPrice.value}</span></td>

          <td class="qty">
            <label>
              <input type="number" value="0" min="0" />
            </label>
          </td>

          <td class="subtot">$<span>0</span></td>

          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>
          `;

	$cart.appendChild(newTr);
	const deleteButtons = document.querySelectorAll('.btn-delete');
	deleteButtons[deleteButtons.length - 1].onclick = deleteElement;
	newName.value = '';
	newPrice.value = 0;
}


function calcAll() {
	let allTr = document.querySelectorAll('tr.product');
	allTr.forEach((e) => {
		updateSubtot(e);

	});
	let sum = 0;
	let allSubtot = document.querySelectorAll('.subtot span');
	allSubtot.forEach((e) => {
		sum += +e.innerHTML;
	});

	totalH2.textContent = sum;
}


function deleteElement(e) {
	let elementToDelete = e.currentTarget.parentNode.parentNode;
	$cart.removeChild(elementToDelete);
	calcAll();
}


$calc.onclick = calcAll;
deleteButton.onclick = deleteElement;

