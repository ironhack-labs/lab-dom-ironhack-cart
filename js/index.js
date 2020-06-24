// ITERATION 1

function updateSubtotal(product) {
	const price = product.querySelector(`.price span`).innerHTML;
	const quantity = product.querySelector(`.quantity input`).value;
	const subtotalAmount = Number(price) * Number(quantity);
	const subtotal = (product.querySelector(`.subtotal span`).innerHTML = subtotalAmount);
	return subtotal;
}

function calculateAll() {
	// ITERATION 2
	const allProducts = document.querySelectorAll(`.product`);
	allProducts.forEach((product) => {updateSubtotal(product);});

  // ITERATION 3
  const totalAmount = [...allProducts].reduce((accum, current) => {return accum + updateSubtotal(current)},0);
  const total = document.querySelector(`#total-value span`);
  total.innerHTML = totalAmount;
}

// ITERATION 4

function removeProduct(event) {
  const target =  event.target;
  if(event.target.classList.value.includes('btn-remove')) {
    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
    calculateAll()
  }
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(`.create-product input`).value;
  const price = document.querySelector(`.create-product [type='number']`).value;
  const table = document.getElementsByTagName(`tbody`)[0];
  const row = table.insertRow();
  const rowContent = `
    <tr class="product">
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;
  row.innerHTML = rowContent;
}

window.addEventListener('load', () => {
  document.getElementById('calculate').addEventListener('click', calculateAll);
  document.querySelector('tbody').addEventListener('click', removeProduct)
  document.getElementById(`create`).addEventListener('click', createProduct)
});
