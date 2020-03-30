// ITERATION 1 TODO: /1- Sacar el precio en numeros y la cantidad /2- Que el subtotal cambie
function updateSubtotal($product) {

    const priceElement = document.querySelectorAll(".price > span")

    const price = []

    for (let i = 0; i < priceElement.length; i++) {

        price.push(Number(priceElement[i].innerHTML))

    }
    //----------------------------------------------
    const quantityElement = document.querySelectorAll(".quantity > input")
    const quantity = []

    quantityElement.forEach(elm => {
        quantity.push(elm.value)
    });


    const anteSubtotal = [];

    for (let i = 0; i < price.length; i++) {
        for (let j = 0; j < quantity.length; j++) {
            anteSubtotal.push(price[(i = j)] * quantity[(j = i)])
        }
    }

    const subTotalElement = document.querySelectorAll(".subtotal > span")
    const subTotal = []


    for (let i = 0; i < anteSubtotal.length; i++) {
        for (let j = 0; j < subTotalElement.length; j++) {
            subTotal.push((subTotalElement[(i = j)].innerHTML = anteSubtotal[(i = j)]))
        }
    }
}
//----------------------------------------------

function calculateAll() {
    // ITERATION 2


    const getSubtotal = document.querySelectorAll('.product')

    getSubtotal.forEach(elm => {
        updateSubtotal(elm)
    })


    // ITERATION 3

    const totalElement = document.querySelectorAll('.subtotal > span')
    const total = []

    for (let i = 0; i < totalElement.length; i++) {

        total.push(Number(totalElement[i].innerHTML))

    }


    // --------------------------------------------------
    let sum = 0

    total.forEach(elm => {
        sum += elm
    })


    const finalTotal = document.querySelector('#total-value > span')

    finalTotal.innerHTML = sum.toFixed(2)
}


window.addEventListener("load", () => {
    const $calculateTrigger = document.getElementById("calculate")

    $calculateTrigger.addEventListener("click", calculateAll)
})

// ITERATION 4


const removeButtonElements = document.querySelectorAll(".btn.btn-remove")


removeButtonElements.forEach(ele => {
    ele.addEventListener("click", productRemoveListener)
})

function productRemoveListener(event) {

    const removeButtonClicked = event.target
    removeButtonClicked.parentElement.parentElement.remove()

}


// ITERATION 5

const newButtonElement = document.querySelector('.create-product .btn')
newButtonElement.addEventListener('click', createProduct)


function createProduct(event) {


    const getProductName = document.getElementById('new-name').value
    const getPrice = document.getElementById('new-price').value

    const newProduct = document.querySelector('#cart > tbody > tr').cloneNode(true)
    newProduct.querySelector('.name span').innerHTML = getProductName
    newProduct.querySelector('.price span').innerHTML = getPrice
    newProduct.querySelector('.action .btn-remove').addEventListener('click', productRemoveListener)

    const parentProduct = document.querySelector('#cart > tbody')
    parentProduct.appendChild(newProduct)


    const clearProductName = document.querySelectorAll('tfoot input')[0].value = ""
    const clearPrice = document.querySelectorAll('tfoot input')[1].value = ""
}