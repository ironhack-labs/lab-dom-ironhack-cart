// ITERATION 1

function updateSubtotal(product) {
    const $price = product.querySelector('.price span').innerHTML
    const $quantity = product.querySelector('.quantity input').value
    let $subtotal = product.querySelector('.subtotal span')
    $subtotal.innerHTML = $price * $quantity
    return $subtotal.innerHTML
}

function calculateAll() {
    let $product = document.getElementsByClassName('product')
    let $total = document.querySelector('#total-value span')
    let total = 0
    for (let i = 0; i < $product.length; i++) {
        total += parseFloat(updateSubtotal($product[i]))
    }
    $total.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    const product = target.parentNode.parentNode
    product.parentNode.removeChild(product)

}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const removeBtns = document.querySelectorAll('.btn-remove')
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeProduct)
    }
});