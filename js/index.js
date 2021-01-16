// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').textContent
    const quantity = product.querySelector('.quantity input').value
    const subtotal = product.querySelector('.subtotal span')
    const newSubtotal = quantity * price
    subtotal.textContent = newSubtotal
    return newSubtotal
}


function calculateAll() {
    // ITERATION 2
    const products = document.querySelectorAll('.product')
    let newTotal = 0
    products.forEach(element => newTotal += updateSubtotal(element))

    // ITERATION 3
    const total = document.querySelector('#total-value span')
    total.textContent = newTotal
}

// ITERATION 4

// function removeProduct(event) {
//     const target = event.currentTarget;
//     console.log('The target in remove is:', target);
//     //... your code goes here
//     target.style.color = 'red'
// }
function removeProduct(target) {
    const parent = target.closest('.product')
    parent.remove()
        //target.remove()
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}


window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const buttons = document.querySelectorAll('.action .btn')
    buttons.forEach(element => {
        element.addEventListener('click', function() { removeProduct(element) }, false)
    })
});