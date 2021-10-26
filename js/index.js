// ITERATION 1

function updateSubtotal(product) {
    // Price and Quantity Variables
    let price = product.querySelector('.price span').innerText;
    let quantity = product.querySelector('.quantity input').value;

    // Multiply those 2 variable to get the subtotal
    let subtotal = price * quantity;

    // Call the element where the subtotal should be
    let subttotalString = product.querySelector('.subtotal span');

    // Redefine his innerHTML value
    subttotalString.innerHTML = subtotal;

    //We made it return a value so then we could use it to calculate the total
    return subtotal;

}

function calculateAll() {
    // ITERATION 2
    // Call every single product using the ClassTag
    let products = document.getElementsByClassName("product");

    // A for with the function and each product
    for (i = 0; i < products.length; i++) {
        updateSubtotal(products[i]);
    };

    // ITERATION 3
    // Declare a subtotal variable
    let subtotal = 0;

    // With the returning value of 'subtotal' function, we SUM it to the new subtotal variable
    for (i = 0; i < products.length; i++) {
        subtotal = updateSubtotal(products[i]) + subtotal;
    }

    // Redifine his innerHTML value
    let totalString = document.getElementById('total-value').querySelector('span');
    totalString.innerHTML = subtotal;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;

    var i = target.parentNode.parentNode.rowIndex;

    document.getElementById("cart").deleteRow(i);

    calculateAll();

}

// ITERATION 5

function createProduct() {
    // Variables Name and Price
    let name = document.getElementById('create_table').querySelector('td input[name="name"]').value;
    let price = document.getElementById('create_table').querySelector('td input[name="price"]').value;

    // Variable of the Main table
    const table = document.getElementById("cart");

    // Number Of Actual Rows
    let countRows = table.rows.length;

    // Declaring a variable for the row
    let tr = table.insertRow(countRows);

    // Creating the row and adding his Class 'product'
    tr = table.insertRow(countRows - 2);
    tr.className += "product";

    // Create the Cells
    var cell1 = tr.insertCell(0);
    var cell2 = tr.insertCell(1);
    var cell3 = tr.insertCell(2);
    var cell4 = tr.insertCell(3);
    var cell5 = tr.insertCell(4);

    //Cell 1 - Name
    cell1.innerHTML = name;
    cell1.className += "name";

    //Cell 2 - UnitPrice
    let uprice = document.createElement("span");
    uprice.innerText = parseFloat(price).toFixed(2);
    cell2.innerHTML = '$';
    cell2.appendChild(uprice);
    cell2.className += "price";

    //Cell 3 - Quantity
    let inputQuantity = document.createElement("input");
    inputQuantity.type = "number";
    inputQuantity.value = 0;
    inputQuantity.min = 0;
    cell3.appendChild(inputQuantity);
    cell3.className += "quantity";

    //Cell 4 - SubTotal
    let usubtotal = document.createElement("span");
    usubtotal.innerText = 0;
    cell4.innerHTML = '$';
    cell4.appendChild(usubtotal);
    cell4.className += "subtotal";

    //Cell 5 - Remove Button 
    //TODO Fix Remove BUG
    let uremove = document.createElement("button");
    uremove.className = "btn btn-remove";
    uremove.innerHTML = "Remove"
    uremove.setAttribute = ("onclick", "removeProduct");
    cell5.appendChild(uremove);
    cell5.className += "action";



}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeProductsBtn = document.getElementsByClassName('btn-remove');
    for (i = 0; i < removeProductsBtn.length; i++) {
        removeProductsBtn[i].addEventListener('click', removeProduct);
    };

    const createProductsBtn = document.getElementById('create');
    createProductsBtn.addEventListener('click', createProduct);
});