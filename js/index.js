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
    const $newProduct = document.querySelector('#new-product')
    const $newPrice = document.querySelector('#new-price')
    const $cart = document.querySelector('#cart tbody')

    const newP = document.createElement('tr')
    newP.innerHTML = `
    <td class="name">
        <span>${$newProduct.value}</span>
    </td>
    <td class="price">$<span>${$newPrice.value}</span></td>
    <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
        <button class="btn btn-remove">Remove</button>
    </td>`
    $cart.appendChild(newP)
    $newProduct.value = ''
    $newPrice.value = ''
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeBtns = document.querySelectorAll('.btn-remove')
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeProduct)
    }

    const createBtn = document.querySelector('#create')
    createBtn.addEventListener('click', createProduct)
});