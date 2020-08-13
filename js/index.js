// ITERATION 1
let $products = document.querySelectorAll('.product')
$products.forEach(product => {
    product.addEventListener("input", (e) => {
        let $modifiedProduct = e.currentTarget
        updateSubtotal($modifiedProduct)
    })
})


function updateSubtotal(product) {
    const quantity = product.querySelector(".quantity input").value
    const price = product.querySelector(".price span").innerText
    const subTotal = quantity * price

    product.querySelector(".subtotal span").innerText = subTotal
}

function calculateAll() {
    let total = 0
    $products.forEach(product => {
        total += parseInt(product.querySelector(".subtotal span").innerText)
    })
    document.querySelector("#total-value span").innerText = total

    // ITERATION 2
    //... your code goes here

    // ITERATION 3
    //... your code goes here
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

});