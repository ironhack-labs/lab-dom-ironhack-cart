function updateSubtotal(product) {
	// console.log('Calculating subtotal, yey!');

	const price = product.querySelector('.price span').innerHTML;
	const quantity = product.querySelector('.quantity input').value;
	const getTotal = price * quantity;
	const modified = (product.querySelector('.subtotal span').innerHTML =
		getTotal);

	return modified;

}

function calculateAll() {
	const singleProduct = document.querySelector('.product');

	let total = 0;
	for (let i = 0; i < document.getElementsByClassName('product').length; i++) {
		let subtotal = updateSubtotal(
			document.getElementsByClassName('product')[i]
		);
		total = total + subtotal;
	}
	const updateTotal = (document.querySelector('#total-value span').innerHTML = total);
	return updateTotal
}


function removeProduct(event) {
	const target = event.currentTarget;
	// console.log('The target in remove is:', target);
	// console.log("clicked");
	target.closest('tr').remove();
	const buttons = (document.querySelectorAll('.btn-remove'));
	buttons.forEach((button) => {
		button.addEventListener('click', removeProduct)
	})
	calculateAll();
}

	
	function deleteItem (){
		const buttons = document.querySelectorAll('.btn-remove');
		console.log(buttons);

		buttons.forEach((button) => {
			button.addEventListener('click', removeProduct);
		});


	}


	

function createProduct() {
	const tbody = document.querySelector('tbody')
	const productName = document.querySelector('.product-name').value
	const price = document.querySelector('.new-item-price').value

	tbody.innerHTML += `<tr class="product">
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

	  let newTr = document.createElement("tr");
	  let newTd = document.createElement('td')

	  deleteItem()

}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);


	
	



});


deleteItem()


// function generateTable(productName, price){
// 	let tr1 = document.createElement(tr);
// 	let td1 = document.createElement(td);
// 	let span1 = document.createElement(span);
// 	let textSpan1 = document.createTextNode(`${productName}`);
// 	let td2 = document.createElement(td);
// 	let td3 = document.createElement(td);
// 	let td4 = document.createElement(td);
// 	let td5 = document.createElement(td);
	


// 	tr1.setAttribute('class', 'product')
// 	td1.setAttribute('class', 'name')
// 	td2.setAttribute('class', 'price')
// 	td3.setAttribute('class', 'quantity')


// }