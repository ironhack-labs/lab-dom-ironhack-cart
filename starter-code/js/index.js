
window.onload = function(){

  //Init btn variables
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  var createItemButton = document.getElementById("new-item-create");

  //Event Listeners
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  //Array of shopping items
  var classes = document.querySelectorAll(".wrapper")
  let items = []
  for(var i = 0; i < classes.length; i++) {
    items.push(classes[i].value)
  }

function getTotalPrice() {
  
  var grandTotal = 0;
  for(let i=0; i<items.length; i++){
    var price = document.getElementsByClassName("price")[i].innerHTML
    var quantity = parseInt(document.getElementsByClassName("qty")[i].value, 10)
    var calc = price*quantity
    document.getElementsByClassName("total")[i].innerHTML = calc.toFixed(2)
    grandTotal += parseInt(document.getElementsByClassName("total")[i].innerHTML, 10)    
  }
  document.getElementById("total-price").innerHTML = grandTotal.toFixed(2)

}

function deleteItem(e){
  let parent = document.getElementsByClassName("shopping-list")[0]
  parent.removeChild(e.currentTarget.parentElement.parentElement)
  items.pop();
}

function createNewItem(){
  
  var itemName = document.getElementsByClassName("newName")[0].value
  var itemUnitPrice = parseInt(document.getElementsByClassName("newPrice")[0].value, 10)

  var newItem = document.createElement("div");
  newItem.className = "wrapper";
  newItem.innerHTML = `<div><span class="item">${itemName}</span></div>
      <div>$<span class="price">${itemUnitPrice.toFixed(2)}</span></div>
      <div class="quantity"><label>QTY <input class="qty" type="number" value="0"></label></div>
      <div>$<span class="total">0.00</span></div>
      <div><button class="btn-delete">Delete</button></div>`

  newItem.lastChild.lastChild.onclick = deleteItem;
  document.getElementsByClassName("shopping-list")[0].appendChild(newItem)
  items.push(newItem)

  document.getElementsByClassName("newName")[0].value = ""
  document.getElementsByClassName("newPrice")[0].value = ""
  
  }
};