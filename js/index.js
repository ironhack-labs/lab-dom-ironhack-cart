// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const subtotal = product.querySelector('.subtotal span');
    let price = product.querySelector('.price span');
    price = +price.innerText;
    let quantity = product.querySelector('.quantity input');
    quantity = +quantity.value;
    const result = +(quantity * price).toFixed(2);
    subtotal.innerText = result;
    return result;
}

// ITERATIONS 2 AND 3

function calculateAll() {
    const products = document.querySelectorAll('.product');
    const subtotals = [];
    products.forEach((element) => {
        subtotals.push(updateSubtotal(element));
    });
    let sum = 0;
    for (let i = 0; i < subtotals.length; i += 1) {
        sum += (subtotals[i]);
    }
    const result = document.querySelector('#total-value span');
    result.innerText = sum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const greatGrand = grandParent.parentElement;
    greatGrand.removeChild(grandParent);
    console.log(grandParent);
}

// ITERATION 5

function createProduct() {
    const tableBody = document.querySelector('#cart tbody');
    const userInput = document.querySelectorAll('.create-product input');
    const newProductName = userInput[0].value;
    const userInputPrice = userInput[1].value;
    const newProduct = document.createElement('tr');
    newProduct.setAttribute('class', 'product');
    newProduct.innerHTML = (`
    <td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${userInputPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`);
    tableBody.appendChild(newProduct);
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeBtn = document.querySelectorAll('.btn-remove');
    removeBtn.forEach((element) => {
        element.addEventListener('click', removeProduct);
    });
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);
});
