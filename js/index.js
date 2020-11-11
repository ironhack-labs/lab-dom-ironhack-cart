// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const priceValue = price.innerText;
    const quantityValue = quantity.value;
    const subTotalPrice = quantityValue * priceValue;
    const subTotalElement = product.querySelector('.subtotal span');

    subTotalElement.innerText = subTotalPrice

    return subTotalPrice;

}

function calculateAll() {

    const products = document.querySelectorAll('.product');

    let total = 0;

    products.forEach((element) => {
        total += updateSubtotal(element);
    });

    document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    const table = target.parentNode.parentNode.parentNode;
    const rowParent = target.parentNode.parentNode;
    table.removeChild(rowParent);
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeProductBtns = document.querySelectorAll('.btn-remove');
    removeProductBtns.forEach((button) => {
        button.addEventListener('click', removeProduct);
    });
});