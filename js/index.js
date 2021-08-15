
const getPrice = (product) => product.querySelector('.price span').innerHTML;
const getQuantity = (product) => product.querySelector('.quantity input').value;
const getTotal = (price, quantity) => price * quantity; 
const getButtons = () => document.querySelectorAll('.btn-remove')
const modify = (product) => product.querySelector('.subtotal span')

// function to update subtotal
const updateSubtotal = (product) => {
	const price = getPrice(product)
	const quantity = getQuantity(product)
	const modified = modify(product).innerHTML = getTotal(price, quantity);
	return modified;
}

// function to loop products Arr to calculate total price
const productsLoop = () => {
	let total = 0;
	for (let i = 0; i < document.getElementsByClassName('product').length; i++) {
		let subtotal = updateSubtotal(
			document.getElementsByClassName('product')[i]
		);
		total += subtotal;
	}
	return total;
}

// function to calculate all
const calculateAll = () => {
	const updateTotal = (document.querySelector('#total-value span').innerHTML = productsLoop())
	return updateTotal	
} 

// function to remove products
removeProduct = (event) => {
	const target = event.currentTarget;
	const buttons = (document.querySelectorAll('.btn-remove'));
	target.closest('tr').remove();
	buttons.forEach((button) => {
		button.addEventListener('click', removeProduct)
	})
	calculateAll();
}

// function to capture clicked btn
deleteItem = () => {
	getButtons().forEach((button) => {
		button.addEventListener('click', removeProduct);
	});
}

// function to reset product and price placeholder and value when we change it
resetNew = () => {
	const productName = document.querySelector('.product-name')
	const newItemPrice = document.querySelector('.new-item-price')
	productName.placeholder = 'Product Name'
	productName.value = ''
	newItemPrice.placeholder = '0'
	newItemPrice.value = ''
}

// function to create new product
createProduct = () => {
	const tbody = document.querySelector('tbody')
	const productName = document.querySelector('.product-name').value
	const price = document.querySelector('.new-item-price').value

	// condition to require productName and price
	if (productName === "" || price === ""){
		Swal.fire("PLEASE ADD PRODUCT NAME AND UNIT PRICE")
	} else {
	tbody.innerHTML += 
	`<tr class="product">
        <td class="name">
          <span>${productName}</span>
        </td>
         <td class="price">$<span>${price}</span></td>
        <td class="quantity">
          <input onchange="calculateAll(this.value)" type="number"  value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
    </tr>`;
	}

	resetNew()
	deleteItem()
}

// function to show alert with total price
showTotal = () => {
	Swal.fire(`TOTAL: $${productsLoop()}`)
	calculateAll()
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', showTotal);
});

deleteItem()