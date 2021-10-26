// ITERATION 1

function updateSubtotal(product) {
    // Price and Quantity Variables
    let price = product.querySelector('.price span').innerText;
    let quantity = product.querySelector('.quantity input').value;

    // Multiply those 2 variable to get the subtotal
    let subtotal = price * quantity;

    // Call the element where the subtotal should be
    let subttotalString = product.querySelector('.subtotal span');

    // Redefine his innerHTML value
    subttotalString.innerHTML = subtotal;

    //We made it return a value so then we could use it to calculate the total
    return subtotal;

}

function calculateAll() {
    // ITERATION 2
    // Call every single product using the ClassTag
    let products = document.getElementsByClassName("product");

    //A for with the function and each product
    for (i = 0; i < products.length; i++) {
        updateSubtotal(products[i]);
    };

    // ITERATION 3
    // Declare a subtotal variable
    let subtotal = 0;

    // With the returning value of 'subtotal' function, we SUM it to the new subtotal variable
    for (i = 0; i < products.length; i++) {
        subtotal = updateSubtotal(products[i]) + subtotal;
    }

    // Redifine his innerHTML value
    let totalString = document.getElementById('total-value').querySelector('span');
    totalString.innerHTML = subtotal;
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