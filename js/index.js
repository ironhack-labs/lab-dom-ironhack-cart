// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');


    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;

    product.querySelector('.product .subtotal span').innerHTML = price * quantity;

    console.log(price * quantity)

    //... your code goes here
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.


    // end of test

    // ITERATION 2
    //... your code goes here
    const products = document.querySelectorAll('.product');

    products.forEach(p => updateSubtotal(p))


    // ITERATION 3
    calculateTotal()
        //... your code goes here
}

function calculateTotal() {
    const products = document.querySelectorAll('.product');
    let total = 0

    products.forEach(p => {
        const subtotal = p.querySelector('.product .subtotal span').innerHTML

        total = total + Number(subtotal)


    })

    document.querySelector("#total-value span").innerHTML = total



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