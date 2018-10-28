function addProduct() {

    let randomQty = Math.floor(Math.random() * 10)

    let prodName = document.querySelector('#product-name-input').value;
    let prodCost = document.querySelector('#product-cost-input').value;

    //New Id generator: making sure no Ids repeat
    let products = document.querySelectorAll('.product');
    let usedIds = [];
    products.forEach(function(product){
        usedIds.push(parseInt(product.getAttribute('class').slice(9)))
    });
    let prodId = 0;
    debugger
    let i=-1;
    do {
        i++
        prodId = i}
    while (usedIds.includes(i));
    //============================================

    newProduct = `<div class="product p${prodId}">
    <div>
      <span class="product-name">${prodName}${prodId}</span>
    </div>
    <div>
      <span class="unit-cost">$${prodCost}</span>
    </div>
    <div class="quantity">
      <label for="units">QTY</label>
      <input name="units" type="text" placeholder="0" value="${randomQty}">
    </div>
    <div>
      <span class="total-price">0</span >
    </div >
        <div class="">
            <button onclick="deleteRow(${prodId})" class="btn-delete p${prodId}">Delete</button>
        </div>`
    document.querySelector('.product-container').innerHTML += newProduct
}

function updatePrices() {

    if (document.querySelectorAll('.product').length === 0) return;

    let products = document.querySelectorAll('.product');
    let grandTotal = 0;
    for (i = 0; i < products.length; i++) {
        document.querySelectorAll('.total-price')[i].innerHTML = `$${parseFloat(document.querySelectorAll('.unit-cost')[i].innerHTML.slice(1)) * parseFloat(document.querySelectorAll('.quantity input')[i].value)}`;
        grandTotal += parseFloat(document.querySelectorAll('.unit-cost')[i].innerHTML.slice(1)) * parseFloat(document.querySelectorAll('.quantity input')[i].value);
    }
    document.querySelector('#grand-total').innerHTML = `Grand Total: $${grandTotal}`;
}

function deleteRow(prodId) {
    document.querySelector('.product-container').removeChild(document.querySelector(`.product.p${prodId}`));
}