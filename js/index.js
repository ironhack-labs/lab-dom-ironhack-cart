// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    //getting the first element with class="price" and "quantity" from the query.
    const priceSpanElement = product.querySelector('.price span');
    const quantityInputElement = product.querySelector('.quantity input')

    //converting the priceSpanElement string into a number
    const price = parseFloat(priceSpanElement.innerText);

    //setting the quantity value as a number
    const quantity = quantityInputElement.valueAsNumber;

    //calculating the subtotal
    const subTotal = price * quantity

    //getting the first element with class="subtotal" from the query.
    const subTotalElement = product.querySelector('.subtotal span');

    //sending subtotalelement to inner text
    subTotalElement.innerText = subTotal;
    return subTotal;
}


//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.

function calculateAll() {
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);

    // ITERATION 2


    const products = document.getElementsByClassName('product')
    let totalValue = 0;

    for (let counter = 0; counter < products.length; counter++) {
        const element = products[counter];
        totalValue += updateSubtotal(element);
    }



    //     // ITERATION 3
    document.querySelector('#total-value span').innerHTML = totalValue;

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