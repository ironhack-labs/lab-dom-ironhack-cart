var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var randomProductRow = document.querySelectorAll(".product")


// Iretation 1.1
function updateSubtot($product) {
    let pQuantity = $product.querySelector('.qty input').value;
    let pPrice = $product.querySelector('.pu span').innerHTML;
    return pQuantity * pPrice;
}

// Iteration 1.2


function calcAll() {
    var pTotal = 0
    for (let i = 0; i < randomProductRow.length; i++) {
        randomProductRow[i].querySelector('.subtot span').innerHTML = updateSubtot(randomProductRow[i])
        pTotal += updateSubtot(randomProductRow[i])
    }
    document.querySelector('#totalAmount span').innerHTML = pTotal
}


$calc.addEventListener("click", function() {
    calcAll()

})