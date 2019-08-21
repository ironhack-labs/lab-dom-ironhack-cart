function deleteItem(event) {
    let prod = event.currentTarget.parentElement.parentElement;
    prod.parentElement.removeChild(prod);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {

    let sumUp = 0;
    prodArray = document.querySelectorAll('.product');
    for (let i = 0; i < prodArray.length; i++) {
        let inputVal = document.querySelectorAll('.quantity')[i].value || 0;
        const costString = document.querySelectorAll('.costPerUnit')[i].innerText;
        const costNumber = Number(costString.slice(1));
        let totalprice = costNumber * inputVal;
        document.querySelectorAll('.totalPrice')[i].innerText = `$${totalprice.toFixed(2)}`;
      sumUp += totalprice;
      console.log(prodArray)
    }
    document.querySelector('h2').innerText = `Total Price: $${sumUp}`;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  let productName = document.body.querySelectorAll('.productName')[0].value;
  
    let productCost = document.body.querySelectorAll('.productName')[1].value;
    let createProduct = document.createElement('div');
    createProduct.className = 'product';
  createProduct.innerHTML = 
    `
  <div class="ProductName"><span >${productName}</span></div>
  <div ><span class="costPerUnit">$${Number(productCost).toFixed(2)}</span></div>
  <div>
      <label for="QTY">QTY</label>
      <input class="quantity input" type="text" />
  </div>
  <div class="totalPrice"><span>$0.00</span></div>
  <div><button class="btn btn-delete">Delete</button></div>
 `;

    let lastProductLocation = document.querySelector('#products');

    lastProductLocation.appendChild(createProduct);
}

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
    calculatePriceButton.onclick = getTotalPrice;
    // createItemButton.onclick = createNewItem;

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
};


