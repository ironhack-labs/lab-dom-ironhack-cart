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

// function removeProduct(event) {
//     const target = event.currentTarget;
//     console.log('The target in remove is:', target);
//     //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//     //... your code goes here
// }

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);
});