// ITERATION 1

function updateSubtotal(product) {
    let price = product.querySelector('.price span');
    let quantity = product.querySelector('.quantity input');
    let productSubtotal = parseFloat(price.innerHTML) * quantity.value;

    product.querySelector('.subtotal span').innerHTML = productSubtotal;

    return productSubtotal


}

//ITERATION 2
function calculateAll() {
    let productList = [...document.querySelectorAll('.product')];

    let totalPrice = 0;

    productList.forEach((product) => {
        totalPrice += updateSubtotal(product);
    });

    //ITERATION 3

    document.querySelector('#total-value span').innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    target.parentNode.parentNode.remove();

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