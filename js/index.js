function updateSubtotal(product) {
	const price = product.querySelector('.price span').innerHTML;
	const quantity = product.querySelector('.quantity input').value;
	const getTotal = price * quantity;
	const modified = (product.querySelector('.subtotal span').innerHTML =
	getTotal);
	
	return modified;
}

function calculateAll() {
	const singleProduct = document.querySelector('.product');
	const updateTotal = (document.querySelector('#total-value span').innerHTML = total);

	let total = 0;
	for (let i = 0; i < document.getElementsByClassName('product').length; i++) {
		let subtotal = updateSubtotal(
			document.getElementsByClassName('product')[i]
		);
		total = total + subtotal;
	}

	return updateTotal
}


function removeProduct(event) {
	const target = event.currentTarget;
	const buttons = (document.querySelectorAll('.btn-remove'));

	target.closest('tr').remove();
	buttons.forEach((button) => {
		button.addEventListener('click', removeProduct)
	})

	calculateAll();
}


function deleteItem() {
	const buttons = document.querySelectorAll('.btn-remove');

	buttons.forEach((button) => {
		button.addEventListener('click', removeProduct);
	});
}




function createProduct() {
	const tbody = document.querySelector('tbody')
	const productName = document.querySelector('.product-name').value
	const price = document.querySelector('.new-item-price').value

	tbody.innerHTML += 
	`<tr class="product">
        <td class="name">
          <span>${productName}</span>
        </td>
         <td class="price">$<span>${price}</span></td>
        <td class="quantity">
          <input type="number"  value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
    </tr>`;

	deleteItem()
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');

	calculatePricesBtn.addEventListener('click', calculateAll);
});

deleteItem()
