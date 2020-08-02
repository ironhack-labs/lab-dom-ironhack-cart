// ITERATION 1
function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerText

    const quantity = product.querySelector('.quantity input').value

    const subTotal = price * quantity

    let sub = product.querySelector('.subtotal span')

    sub.innerText = subTotal

    return subTotal
}
// ITERATION 2
function calculateAll() {
    const products = document.querySelectorAll('.product')

    let total = 0

    products.forEach(elm => {

        total += updateSubtotal(elm)
    })

    const totalPrice = document.querySelector('#total-value span')

    totalPrice.innerText = total
}

// ITERATION 3
function removeProduct(event) {
    const target = event.currentTarget;

    console.log('The target in remove is:', target);

    let parent = target.parentNode

    let grandParent = parent.parentNode

    let visGrandParent = grandParent.parentNode

    visGrandParent.removeChild(grandParent)

    calculateAll()
}
// ITERATION 4
function createProduct() {
    const newProduct = document.querySelector('.product').cloneNode(true)

    newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value

    newProduct.querySelector('.subtotal span').innerText = 0

    newProduct.querySelector('.price span').innerText = document.querySelector('.new-price input').value

    newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)

    const newTbody = document.querySelector('tbody')

    newTbody.appendChild(newProduct)

}
// ITERATION 5
window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');

    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeButtons = document.querySelectorAll('.btn-remove')

    removeButtons.forEach(elm => {

        elm.addEventListener('click', removeProduct)
    })

    const addProduct = document.querySelector('#create')

    addProduct.addEventListener('click', createProduct)
});