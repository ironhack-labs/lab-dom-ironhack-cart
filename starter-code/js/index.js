var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// Iteration 1.1
function updateSubtot(item) {
    debugger
    var price = parseInt(item.querySelectorAll(".pu span")[0].innerHTML);
    var quantity = parseInt(item.getElementsByTagName("input")[0].value);
    item.querySelectorAll(".subtot span")[0].innerHTML = price * quantity;
}



$calc.onclick = function() {
    var products = document.getElementsByClassName("product"); // get the products
    for (let i = 0; i < products.length; i++) {
        updateSubtot(products[i]); // loop over the products and pass each product to updateSubtotal
    }

};
// Iteration 1.2
function calcAll() {
    var totalPriceForProduct = document.querySelectorAll(".subtot span");
    var total = document.getElementById("total");
    for (let j = 0; j < totalPriceForProduct.length; j++) {
        total.innerHTML = parseInt(total.innerHTML) + parseInt(totalPriceForProduct[j].innerHTML);
        debugger
    }
    return total;

}
debugger
//$calc.onclick = updateSubtot