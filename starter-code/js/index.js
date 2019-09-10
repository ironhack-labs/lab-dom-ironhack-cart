var rows = document.getElementsByClassName("row");
var productPrice = document.getElementsByClassName("product-price");


function deleteItem(e){
  var allProducts = document.getElementById("products");
  allProducts.removeChild(e.currentTarget.parentNode.parentNode);
}

function getTotalPrice() {

  var prodPrice = "";

  for(i = 0; i < rows.length; i++){
    rows[i].querySelector(".product-price").innerHTML = Number(rows[i].querySelector(".price").innerHTML) * Number(rows[i].querySelector("input").value)
    prodPrice = Number(rows[i].querySelector(".product-price").innerHTML);
  }
  
  var totalPrice = 0;

  for(i = 0; i < productPrice.length; i++){
    totalPrice += (parseInt(productPrice[i].innerHTML));
  }

  var finalPriceDiv = document.getElementById("final-price");
  finalPriceDiv.innerHTML = "Total Price: $" + totalPrice;

  document.body.appendChild(finalPriceDiv);
}

function createNewItem(){

  var newProdName = document.getElementById("new-prod-name").value;
  var newProdPrice = document.getElementById("new-prod-price").value;

  document.getElementById("new-prod-name").value = "";
  document.getElementById("new-prod-price").value = "";

  var div = document.createElement("div");
  div.classList.add("row");

 div.innerHTML =  `
<div>
    <span>
      ${newProdName}
    </span>
</div>
<div>
    <span>
      $ <span class="price">${newProdPrice}</span>
    </span>
</div>
<div>
  <form>
    <label for="qty">QTY</label>
    <input type="number" name="qty" id="qty" value="0">
  </form>
</div>
<div>
    <span>
      $ <span class="product-price">0.00</span>
    </span>
</div>
<div>
  <button class="btn btn-delete" onclick="deleteItem(event)" type="button" value="Delete">Delete</button>
</div>
  `
  var allProducts = document.getElementById("products");
  allProducts.appendChild(div);
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
