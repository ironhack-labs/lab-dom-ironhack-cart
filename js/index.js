// ITERATION 1
function updateInput(product) {
    product.addEventListener("input", (e) => {
        let $modifiedProduct = e.currentTarget
        updateSubtotal($modifiedProduct)
    })
}

function updateBtn(product) {
    product.querySelector(".btn-remove").addEventListener("click", (e) => {
        removeProduct(e)
        calculateAll()
    })
}

let $products = document.querySelectorAll('.product')
$products.forEach(product => {
    updateInput(product)
    updateBtn(product)
})

function updateSubtotal(product) {
    const quantity = product.querySelector(".quantity input").value
    const price = product.querySelector(".price span").innerText
    const subTotal = (quantity * price).toFixed(2)
    product.querySelector(".subtotal span").innerText = subTotal
}

function calculateAll() {
    $products = document.querySelectorAll('.product')
    let total = 0
    $products.forEach(product => {
        total += parseFloat(product.querySelector(".subtotal span").innerText)
    })
    document.querySelector("#total-value span").innerText = total.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget.parentElement.parentElement;
    const $tbody = document.querySelector("tbody")
    $tbody.removeChild(target)
}

// ITERATION 5

function createProduct() {
    const $tbody = document.querySelector("tbody")
    let newProductName = document.querySelector('tfoot input[type="text"]').value
    let newProductPrice = document.querySelector('tfoot input[type="number"]').value
    const $newProductLine = document.createElement("tr")
    $newProductLine.classList.add("product")
    $newProductLine.innerHTML = `
        <td class="name">
            <span>${newProductName}</span>
        </td>
        <td class="price">$<span>${parseFloat(newProductPrice).toFixed(2)}</span></td>
        <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
            <button class="btn btn-remove">Remove</button>
        </td>
    `
    $tbody.appendChild($newProductLine)

    updateInput($newProductLine)
    updateBtn($newProductLine)

    document.querySelector('tfoot input[type="text"]').value = ""
    document.querySelector('tfoot input[type="number"]').value = 0
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);
});