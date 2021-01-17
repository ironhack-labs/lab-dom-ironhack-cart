// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    //... your code goes here

    //Step 1 & 2
    let price = product.querySelector('.price span').innerHTML
    console.log(price)
    let quantity = product.querySelector('.quantity input').value
    console.log(`I have ${quantity} products`)

    //Step 3
    const subtotal = (price *= quantity)

    //Step 4
    product.querySelector('.subtotal span').innerHTML = subtotal

    //Step 5
    return subtotal

}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    //const singleProduct = document.querySelector('.product');
    //updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    //... your code goes here
    const moreProducts = document.getElementsByClassName('product')

    let total = 0

    for (let i = 0; i < moreProducts.length; i++) {
        updateSubtotal(moreProducts[i]);
        total += updateSubtotal(moreProducts[i])

    }


    // ITERATION 3
    //... your code goes here
    document.querySelector('#total-value span ').innerHTML = total
    console.log('OK?')

}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;


    console.log('The target in remove is:', target);
    //... your code goes here

    //let remove = document.querySelector('.quantity')
    //remove.parentNode.removeChild(quantity)
    //no funciona lo que he comentado arriba, y entiendo que he de usar removeChild, pero me cuesta relacionarlo con target.

}

// ITERATION 5

function createProduct() {
    //... your code goes here




}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate')
    calculatePricesBtn.addEventListener('click', calculateAll)

    //... your code goes here


    //const removeButton = document.querySelectorAll('.btn btn-remove')
    //removeButton.addEventListener('click', removeProduct)


    //const createButton = document.getElementById('create')
    //createButton.addEventListener('click', createButton)

})