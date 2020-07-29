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
    result.innerText = sum;
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
    // ... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeBtn = document.querySelectorAll('.btn-remove');
    removeBtn.forEach((element) => {
        element.addEventListener('click', removeProduct);
    });

    // ... your code goes here
});
