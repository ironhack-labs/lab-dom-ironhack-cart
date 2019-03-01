
function deleteItem(e){      
        var parent = document.querySelector('#product-table');
        var child = e.currentTarget.parentNode.parentNode;
       
        parent.removeChild(child);    
}


function getPriceByProduct(){
    var allProducts = document.getElementsByClassName("flex-product");   
    
    for (i=0; i < allProducts.length; i++) {
        var priceUnit = allProducts[i].querySelector(".price-unit").textContent;
        var quantity = allProducts[i].querySelector(".quantity").value;
        var totalProduct = allProducts[i].querySelector(".total-product");
        var result = parseInt(priceUnit) * parseInt(quantity);
        totalProduct.innerText = result;
    }
}

function getTotalPrice() {
    getPriceByProduct();
    var allTotalProducts = document.getElementsByClassName("total-product");
    var totalPrice = document.querySelector(".total-price");
    var accumulator = 0;
    for (i=0; i < allTotalProducts.length; i++) {
        accumulator += parseInt(allTotalProducts[i].innerHTML);
    }
    totalPrice.innerText = accumulator;
}

// function createNewItem(){
//   var productTable = document.getElementById("product-table");
//   productTable.innerHTML += "<div class = "row"></div> <div><input class "product-name" type = "text">IronBubble-head</div> <div><span>$</span><input class = "price-unit" type = "class" value = "0"</div>"
// }

// function createQuantityInput(){
//   var allRows = document.getElementsByClassName("row")
//   allRows[allRows.length].innerHTML += "<div><label>QTY</label><input class = "quantity" type = "text" value = "0"></div>"
// }

// function createDeleteButton(){
//   var allRows = document.getElementsByClassName("row")
//   allRows[allRows.length].innerHTML += "<div><button class = "btn btn-delete" name = "delete">Delete</button></div>"
// }


// Buttons

// function createNewItem(){
//   var btnAdd = document.getElementsByName("add");
//   btnAdd.onclick = createNewItemRow();
//   btnAdd.onclick = createQuantityInput();
//   btnAdd.onclick = createDeleteButton();
// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButton = document.getElementsByName('delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButton.onclick = deleteItem(deleteButton.onclick);
}