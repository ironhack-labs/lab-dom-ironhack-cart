// ITERATION 1
function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').textContent
    const quantity = product.querySelector('.quantity input').value
    const subtotal = product.querySelector('.subtotal span')
    const newSubtotal = quantity * price
    subtotal.textContent = newSubtotal
    return newSubtotal
}


function calculateAll() {
    // ITERATION 2
    const products = document.querySelectorAll('.product')
    let newTotal = 0
    products.forEach(element => newTotal += updateSubtotal(element))

    // ITERATION 3
    const total = document.querySelector('#total-value span')
    total.textContent = newTotal
}

// ITERATION 4
function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    target.closest('.product').remove()
    calculateAll()
}

// ITERATION 5
function createProduct() {
    const productHTML = `<tr class="product">
                            <td class="name">
                                <span>Ironhack Rubber Duck</span>
                            </td>
                            <td class="price">$<span>25.00</span></td>
                            <td class="quantity">
                                <input type="number" value="0" min="0" placeholder="Quantity" />
                            </td>
                            <td class="subtotal">$<span>0</span></td>
                            <td class="action">
                                <button class="btn btn-remove">Remove</button>
                            </td>
                        </tr>`
    const newProduct = document.createElement('tr')
    newProduct.setAttribute('class', 'product')
    newProduct.innerHTML = productHTML
    const nameInput = document.querySelector('.create-product input[type=text]')
    newProduct.querySelector('.name span').textContent = nameInput.value
    const priceInput = document.querySelector('.create-product input[type=number]')
    newProduct.querySelector('.price span').textContent = priceInput.value
    document.querySelector('#cart tbody').appendChild(newProduct)
    nameInput.value = ''
    priceInput.value = 0
    calculateAll()
    newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)
}


window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const buttons = document.querySelectorAll('.btn-remove')
    buttons.forEach(element =>
        element.addEventListener('click', removeProduct)
    )

    const createButton = document.querySelector('#create')
    createButton.addEventListener('click', createProduct)
});