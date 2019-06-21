
window.onload = function(){

function deleteItem(e){

}

function getPriceByProduct(){

  
}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let unitClass = document.getElementsByClassName("unit");
  let qtyID = document.querySelectorAll("#qty");
  let subClass = document.querySelectorAll(".price");
  let total = 0;

  for (var i = 0; i < unitClass.length; i++) {
    let unitPrice = unitClass[i].innerHTML;
    unitPrice = unitPrice.slice(1);
    let quantity = qtyID[i].value;
    subClass[i].innerHTML = `$${unitPrice * quantity}`;
    total += parseInt(subClass[i].innerHTML.slice(1));
    console.log(total);
    document.querySelector(".total").innerHTML = `$${total}`;
  }
}

document.getElementById('calc-prices-button').addEventListener("click", getTotalPrice);

function createQuantityInput(){

}

function deleteItem(e){
  let theButton = e.currentTarget;
  let info = theButton.parentNode;
  info.remove();
  
}


function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  function createNewItem(){
    let newRow = document.createElement('div');
    newRow.classList = "product-info";
    let name = document.querySelector(".p-name").value;
    let price = document.querySelector(".p-price").value;
  
    newRow.innerHTML = `
        <span>${name}</span>
        <span class="unit">${price}</span>
        <span class="q-group">
          <label for="qty">QTY</label>
          <input type="number" id="qty">
        </span>
        <span class="price">$0.00</span>
        <button class="btn-delete" id="btn-delete">Delete</button>
        `;
        let parent = document.querySelector(".product-wrapper");
        parent.appendChild(newRow);
  
        for(var i = 0; i<deleteButtons.length ; i++){
          deleteButtons[i].onclick = deleteItem;
        }
  }
  

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
