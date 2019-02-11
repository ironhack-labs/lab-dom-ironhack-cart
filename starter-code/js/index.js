
// Get Total Price

function getTotalPrice(){
  
  var orderTotal = 0
  for (i = 0; i < document.getElementsByTagName("ul").length; i++) {
    
    var price = document.getElementsByClassName("product-price")[i].innerHTML;
   
    var quantity = document.getElementsByClassName("product-quantity")[i].value;
    
    var productTotalCost = price * quantity;
    
    var subTotal = document.getElementsByClassName("subtotal")[i]
    subTotal.innerHTML = productTotalCost
    orderTotal += productTotalCost;
  };

  document.getElementById("baskettotal").innerHTML = orderTotal;
}

// Delete

function deleteRow(e){
  var cartItems = document.getElementById("shoppingItems");
  var productRow = e.currentTarget.parentNode.parentNode;
  cartItems.removeChild(productRow);
}

// Add products
  
function addItem() {
  var newItemName = document.getElementById("add-item").value;
  var newItemPrice = document.getElementById("add-price").value;
  var cartItems = document.getElementById("shoppingItems");

  cartItems.insertAdjacentHTML("beforeend",`
        <ul class=item> 
        <li class="name">${newItemName}</li>
        <li>$<span class="product-price">${newItemPrice}</span></li>
        <li>
            <form>
            <label>QTY</label>
            <input class="product-quantity" type="text" name="qnt" placeholder="1">
          </form>
        </li>
        <li>$<span class="subtotal">0</span></li>
        <li><button class="btn btn-delete">Delete</button></li>
      </ul>
      `)
}

//Onclick events

window.onload = function () {
  var calculatePriceButton = document.getElementById("calculate-total");
  var deleteButton = document.getElementById("btn-delete");
  var addItemButton = document.getElementById("addItem");

  calculatePriceButton.onclick = getTotalPrice;
  deleteButton.onclick = deleteRow;
  addItemButton.onclick = addItem;
};

