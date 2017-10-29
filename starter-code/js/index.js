window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  // Copy the first item on the page when loading.
  var initialItem = document.getElementsByClassName("itemdiv")[0];

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function() {
      deleteItem(this);
      // Reset the total price when deleting an element.
      getTotalPrice();
    };
  }

  // Functions to modify the DOM.
  function deleteItem(e) {
    e.parentNode.remove();
  }

  function getPriceByProduct(itemNode, i) {
    var itemQty = document.getElementsByClassName("quantity");
    return Math.floor(itemQty[i].value) * itemNode;
  }

  function getTotalPrice() {
    var itemPrice = document.getElementsByClassName("price");
    var ttlPrice = document.getElementsByClassName("totalprice");
    var sum = 0;
    for (var i = 0; i < itemPrice.length; i++) {
      var finalPrice = getPriceByProduct(itemPrice[i].innerHTML, i);
      ttlPrice[i].innerHTML = parseFloat(finalPrice).toFixed(2);
      sum += Number(parseFloat(finalPrice).toFixed(2));
    }
    var finalSum = document.getElementById("finalsum");
    finalSum.innerHTML = sum;
  }

  function createNewItem() {
    var totalItemList = document.getElementById("totalitemlist");
    var newItem = document.getElementById("newitem").value;
    var newPrice = document.getElementById("newprice").value;
    // Check if the input fields are empty.
    if (newItem && newPrice) {
      var newItemDiv = initialItem.cloneNode(true);
      // Used querySelector to choose the first element with that class in the div.
      newItemDiv.querySelector(".name").innerHTML = newItem;
      newItemDiv.querySelector(".price").innerHTML = newPrice;
      // Used chilNodes here to try out another way to move inside the div.
      newItemDiv.childNodes[7].childNodes[3].innerHTML = 0.00;
      newItemDiv.childNodes[5].childNodes[3].value = "";
      newItemDiv.querySelector("button").onclick = function() {
        deleteItem(this);
        getTotalPrice();
      };
      // Append the child elements created.
      totalItemList.appendChild(newItemDiv);
      // Eliminate the actual value of the inputs used.
      document.getElementById("newitem").value = "";
      document.getElementById("newprice").value = "";
    } else {
      alert("Input fields are empty! Can't create a new item!");
    }
  }
};
