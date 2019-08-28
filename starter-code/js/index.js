// function deleteItem(e) {

// }

// // Change the value of a text field:


// function getPriceByProduct(itemNode) {

// }

// function updatePriceByProduct(productPrice, index) {

// }

function getTotalPrice() {
    console.log("clicked")
    let rows = document.getElementsByClassName('row');
    for (let r = 0; r < rows.length; r++) {
        console.log(rows[r]);

        let price = document.querySelector(`#shopping > div:nth-child(${r+1}) > div:nth-child(2) > p`);

        console.log(price.innerText)

        let quantity = document.querySelector(`#shopping > div:nth-child(${r+1}) > form > input`)
        console.log(quantity.value)

        let subTotal = Number(price.innerText) * Number(quantity.value);
        console.log(subTotal)


        document.querySelector(`#shopping > div:nth-child(${r+1}) > div:nth-child(4) > p`).innerHTML = subTotal;

    }
}

// function createQuantityInput() {

// }

// function createDeleteButton() {
// }
document.getElementById('shopping').onclick = function(e) {
        if (e.target.className.includes('btn-delete')) {
            e.target.parentNode.remove();
        }
    }
    // function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {

// }

// function createNewItemRow(itemName, itemUnitPrice) {

// }

function createNewItem() {
    let name = window.prompt("Name of product")
    let price = window.prompt("Cost of Item")
    let rowHtml = `<div class="row">
  <p class="col">${name}</p>
  <div class="col">
    <span>$</span>
    <p class="inline-block initialPrice">${price}</p>
  </div>
  <form class="col">
    <label class="inline-block" for="price">Quantity:</label>
    <input
      class="inline-block initialQuantity"
      type="text"
      name="price"
      placeholder="0"
    />
  </form>
  <div class="col">
    <span>$</span>
    <p class="inline-block individualTotal">0.00</p>
  </div>
  <button class="btn btn-danger btn-delete" >Delete</button>
  </div>`
    document.getElementById('shopping').innerHTML += rowHtml
}

window.onload = function() {
    var calculatePriceButton = document.getElementById('prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
}