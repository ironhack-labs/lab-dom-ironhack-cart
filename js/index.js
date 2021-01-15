// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    //... your code goes here
    const price = product.querySelector('.price span').innerText
    const quantity = product.querySelector('.quantity input').value
    const subtotal = product.querySelector('.subtotal span')
    const newSubtotal = quantity * price
    subtotal.textContent = newSubtotal
    return newSubtotal
}


function calculateAll() {
    // ITERATION 2
    //... your code goes here
    const products = document.querySelectorAll('.product')
    let newTotal = 0
    products.forEach(element => newTotal += updateSubtotal(element))
    const total = document.querySelector('#total-value span')
    total.textContent = newTotal

    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});