var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var newTr = document.querySelector('.product').cloneNode(true);

function updateSubtot($product) {
    const quantify = $product.querySelector('.qty label input').value;
    const price = $product.querySelector('.pu span').innerHTML;
    let subTotal = $product.querySelector('.subtot span');
    subTotal.innerHTML = quantify * price;
    return parseFloat(subTotal.innerHTML);
}
document.querySelector('input').onkeypress = calcAll;

function calcAll() {
    const allItems = $cart.querySelectorAll('#cart .product');
    let total = 0;
    allItems.forEach(element => {
        total += updateSubtot(element);
    })
    document.querySelector('h2 span').innerHTML = total;

}
$calc.onclick = calcAll;
//Borrar
function listener() {
    document.querySelectorAll('.btn-delete').forEach((element, index) => {
        element.addEventListener("click", button => {
            button.target.parentNode.parentNode.remove();
        });
    });
    document.querySelectorAll('.qty input').forEach((element, index) => {
        element.addEventListener("change", button => {
            calcAll();
        });
    });
}

function cloneNode(newProduct, newPrice) {
    if (document.querySelector('.product') !== null) {
        newTr = document.querySelector('.product').cloneNode(true);
    }
    newTr.querySelector('.name span').innerHTML = newProduct;
    newTr.querySelector('.pu span').innerHTML = parseFloat(newPrice).toFixed(2);
    newTr.querySelector('.qty label input').innerHTML = 0;
    newTr.querySelector('.subtot span').innerHTML = 0;
    $cart.appendChild(newTr);
}
//Añadir
document.getElementById('create').addEventListener("click", function() {
    let newProduct = document.querySelectorAll('.new td input')[0].value;
    let newPrice = document.querySelectorAll('.new td input')[1].value;
    // Check input en blanco
    if (newPrice !== "" && newProduct !== "") {
        cloneNode(newProduct, newPrice);

        // Ponemos las values a 0 de nuevo
        document.querySelectorAll('.new td input')[0].value = "";
        document.querySelectorAll('.new td input')[1].value = "";
        //Refrescamos los listeners
        listener();
        document.querySelectorAll('.qty input').onkeypress = calcAll();
    }
})

window.onload = load => {
    listener();
}
