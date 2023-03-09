// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    //... your code goes here

    // const price = document.querySelector('.price span')
    // const quantity = document.querySelector('.quantity input')
    // const subtotal = document.querySelector('.subtotal span')
    // const totalValue = document.querySelector('#total-value span')

    // subtotal.textContent = parseFloat(price.textContent) * quantity.value
    // totalValue.textContent = parseFloat(subtotal.textContent)



}


function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    //... your code goes here

    const price = document.querySelectorAll('.price span')
    const quantity = document.querySelectorAll('.quantity input')
    const subtotal = document.querySelectorAll('.subtotal span')
    const totalValue = document.querySelector('#total-value span')
    let counterTotal = 0;

    for (i = 0; i < price.length; i++) {
        subtotal[i].textContent = parseFloat(price[i].textContent) * quantity[i].value;
        counterTotal += parseFloat(subtotal[i].textContent)
        totalValue.textContent = counterTotal;
    }



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