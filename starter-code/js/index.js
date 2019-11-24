var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



function updateSubtot($product) {
    var price = parseInt($product.getElementsByClassName("price")[0].innerHTML);
    var quantity = parseInt($product.getElementsByClassName("input")[0].value);
    var subtotal = $product.getElementsByClassName("subtotal")[0];
    subtotal.innerHTML = quantity * price;
}

function updateAllSubtotals() {
    var products = document.getElementsByClassName("product");
    for (let i = 0; i < products.length; i++) {
        updateSubtot(products[i]);
    }
}


function updateFinalPrice() {
    var totalPrice = document.getElementById("totalsum");
    totalPrice.innerHTML = 0;
    var subtotals = document.getElementsByClassName("subtotal");
    for (let i = 0; i < subtotals.length; i++) {
        subvalues = parseInt(subtotals[i].innerHTML);
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + subvalues;
    }
}


function deleteRow(e) {
    var child = e.currentTarget.parentNode.parentNode;
    $cart.removeChild(child);
    updateFinalPrice();
}

var buttons = document.getElementsByClassName('btn-delete');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deleteRow);
}

function calcAll() {
    updateAllSubtotals();
    updateFinalPrice();

}
$calc.addEventListener("click", calcAll);