// ITERATION 1: updateSubtotal
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const priceElement = product.querySelector('.price span');
    const quantityElement = product.querySelector('.quantity input');

    const priceValue = parseFloat(priceElement.innerText);
    const quantityValue = parseInt(quantityElement.value);

    const subtotalValue = priceValue * quantityValue;

    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerText = subtotalValue.toFixed(2);

    return subtotalValue;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
    const allProducts = document.getElementsByClassName('product');
    let totalSum = 0;

    for (let i = 0; i < allProducts.length; i++) {
        const currentProduct = allProducts[i];
        totalSum += updateSubtotal(currentProduct);
    }

    const totalElement = document.querySelector('#total-value span');
    totalElement.innerText = totalSum.toFixed(2);
}

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in removeProduct is:', target);

    const productRow = target.parentNode.parentNode;

    const tableBody = productRow.parentNode;
    tableBody.removeChild(productRow);

    calculateAll();
}

function createProduct() {
    const createProductRow = document.querySelector('.create-product');
    const nameInput = createProductRow.querySelector('input[type="text"]');
    const priceInput = createProductRow.querySelector('input[type="number"]');

    const productName = nameInput.value;
    const productPrice = parseFloat(priceInput.value).toFixed(2);

    if (!productName || priceInput.value <= 0) {
        alert('Please enter a valid product name and price!');
        return;
    }

    const tbody = document.querySelector('#cart tbody');
    const newRow = document.createElement('tr');
    newRow.className = 'product';

    newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

    tbody.appendChild(newRow);

    const removeButton = newRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);

    nameInput.value = '';
    priceInput.value = 0;
}

window.addEventListener('load', () => {

  const initialRemoveButtons = document.querySelectorAll('.btn-remove');
    initialRemoveButtons.forEach(button => {
        button.addEventListener('click', removeProduct);
    });

    const createProductBtn = document.getElementById('create');
    if (createProductBtn) {
        createProductBtn.addEventListener('click', createProduct);
    }
});