

function deleteItem(e){
  document.getElementById("cart").removeChild(e.currentTarget.parentNode.parentNode);
  getTotalPrice();
}

function getTotalPrice() {

  var total = 0;
  var rows = document.getElementsByClassName("product");

  //calculating the subtotal price for the product, setting it on the HTML and adding it to the total amount
  for (var i=0; i < rows.length; i++){
    var pricePerLine = rows[i].querySelector(".unit-cost").innerHTML * rows[i].querySelector(".quantity-amount").value;
    rows[i].querySelector(".product-line-price").innerHTML = pricePerLine;
    total += pricePerLine;
  }

  document.getElementById("total-price").innerHTML = total;
}

function createNewItem(){
  //Obtaining values entered
  var newItemName = document.getElementById("new-item-name").value;
  var newItemPrice = document.getElementById("new-item-price").value;

  //Clearing the values of the input for future use
  document.getElementById("new-item-name").value = "";
  document.getElementById("new-item-price").value = "";

  //create new product
  var product = document.createElement("div");
  product.classList.add("product");

  product.innerHTML = `
    <div class = "product-name">
      <span>
        ${newItemName}
      </span>
    </div>
    <div>
      $
      <span class="unit-cost">
      ${newItemPrice}
      </span>
    </div>
    <div>
      <form action="input" method="GET">
        <label for="quantity">QTY</label>
        <input type="number" value ="0"name="quatity-amount" class= "quantity-amount"min="0" max="100">
      </form>
    </div>
    <div>
      $ 
      <span class = "product-line-price">
        0.00
      </span>
    </div>
    <div>
      <button class = "btn btn-delete" onclick="deleteItem(event)">Delete</button>
    </div>
    `;


  //Add new item to the cart

  document.getElementById("cart").appendChild(product);


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
