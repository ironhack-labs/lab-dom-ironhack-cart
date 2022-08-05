// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    //Getting values of html
    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;

    //Calculating values of single product
    const singleTotal = price * quantity

    //Sending singleTotal to HTML
    product.querySelector('.subtotal span').innerText = singleTotal

    return singleTotal
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.getElementsByClassName('product');

    // end of test

    // ITERATION 2
    let totalProduct = 0;
    for (let product of singleProduct) {
        totalProduct += updateSubtotal(product);
    }


    // ITERATION 3
    document.querySelector('#total-value span').innerText = totalProduct


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