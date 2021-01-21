// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const price = product.querySelector(".price span")
    const quantity = product.querySelector(".quantity input")
    const sub = product.querySelector(".subtotal span")
    const priceNumber = Number(price.innerHTML)
    const quantityNum = Number(quantity.value)
    const mult = (quantityNum * priceNumber)
    console.log(mult)
    sub.innerHTML = mult
    return mult
}


//... your code goes here


// end of test

// ITERATION 2 y 3
function calculateAll() {
    const primer = document.querySelectorAll(".product")[0]
    const segundo = document.querySelectorAll(".product")[1]
    updateSubtotal(primer)
    updateSubtotal(segundo)

    const total = document.querySelector("#total-value span")
    const sumar = Number(updateSubtotal(primer) + updateSubtotal(segundo))
    total.innerHTML = sumar
    return sumar
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

    window.alert("Hola")
});