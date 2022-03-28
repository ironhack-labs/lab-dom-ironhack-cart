// ITERATION 1


function updateSubtotal(product) {
    //alert('Calculating subtotal, yey!')
    price = product.querySelector('.price span').innerHTML
    quantity = product.querySelector('.quantity input ').value
    product.querySelector('.subtotal span').innerHTML = price * quantity

}

function calculateAll() {

    singleProduct = document.getElementsByClassName('product')
    for (i = 0; i < singleProduct.length; i++) {
        updateSubtotal(singleProduct[i])
    }
    totalSum += updateSubtotal(singleProduct[i])
    total = document.getElementById('total-value')
    total = `total:$${totalSum}`

    // subtotal = document.querySelector('.sub').innerHTML
    // result = ((total * 1) + (subtotal * 1))
    // console.log(result)
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