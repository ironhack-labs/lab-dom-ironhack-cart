
//Define the total price of the product
function getTotalPrice() {
  var qtys = document.getElementsByClassName("quantity");
  var prices = document.getElementsByClassName("costUnit");
  var totals = document.getElementsByClassName("totalPrice");
  var totalPrice = document.getElementById("total").innerHTML;
  var sum = 0;
  for(var x = 0; x < prices.length; x++){
    var fCost = prices[x].innerHTML.substring(1);
    var result = qtys[x].value * fCost;
    sum += result;
    totals[x].innerHTML = "$" + result;
  }
  totalPrice = totalPrice.split(" ");
  totalPrice.pop();
  totalPrice.push("$" + sum);
  totalPrice = totalPrice.join(" ");
  total.innerHTML = totalPrice;
}

//Create a new item
function createNewItem(){
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var sub = document.getElementsByClassName("subGeneral");
  var clonedTree = sub[0].cloneNode(true);
  clonedTree.querySelector(".productName").innerHTML = document.getElementById("t1").value;
  clonedTree.querySelector(".costUnit").innerHTML = "$" + document.getElementById("t2").value;
  clonedTree.querySelector(".quantity").value = "";
  clonedTree.querySelector(".totalPrice").innerHTML = "$0";
  clonedTree.querySelector(".btn-delete").onclick = function(){
    this.parentNode.parentNode.remove();
  }
  bigContainer.appendChild(clonedTree);
}

//General function
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  //Delete
  for(var x = 0; x < deleteButtons.length; x++){
    deleteButtons[x].onclick = function(){
      this.parentNode.parentNode.remove();
    };
  }

};
