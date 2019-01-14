function CalculatePrices() {
  var calculateBtn = document.querySelector(".btn-success");
  calculateBtn.onclick = function() {
    console.log("coucou CALCULATE BTN");
    var priceUnit = document.querySelector(".price");
    var qty = document.querySelector("input");
    var priceTotal = document.querySelector(".total");
    var calculPriceTotal = (priceTotal.innerHTML =
      qty.value * priceUnit.innerHTML);
    return calculPriceTotal;
  };
}

//--------------------------------------------
//--------------------------------------------

CalculatePrices();

function CalculateAllPrices() {
  var calculateBtn = document.querySelector(".btn-success");
  calculateBtn.onclick = function() {
    var priceUnitArr = document.querySelectorAll(".price");
    var qtyArr = document.querySelectorAll("input");
    var priceTotalArr = document.querySelectorAll(".total");

    // Display the two totals
    priceTotalArr.forEach(function(onePriceTotal, i) {
      return (onePriceTotal.innerHTML =
        qtyArr[i].value * priceUnitArr[i].innerHTML);
    });

    // Make the global total (addition of the two totals)
    var finalTotal = document.querySelector(".finalTotal");
    var finalTt = 0;
    priceTotalArr.forEach(function(onePriceTotal) {
      finalTt += Number(onePriceTotal.innerHTML);
    });

    return (finalTotal.innerHTML = finalTt);
  };
}

CalculateAllPrices();

//--------------------------------------------
//--------------------------------------------

function deleteButton() {
  var deleteBtnArray = document.querySelectorAll(".btn-delete");
  deleteBtnArray.forEach(function(oneButton) {
    oneButton.onclick = function() {
      console.log("DELETE BUTTON");
      // get the PARENT of the PARENT of the <button> to delete the whole product
      var deleteProduct = oneButton.parentNode.parentNode;
      deleteProduct.remove();
    };
  });
}

deleteButton();

//--------------------------------------------
//--------------------------------------------

function createNewProduct() {
  var createProduct = document.querySelector(".createBtn");
  createProduct.onclick = function() {
    console.log("CREATE");
    var productInfo = document.querySelector(".createProduct");
    var priceInfo = document.querySelector(".createPrice");

    var newProduct = document.createElement("div");

    newProduct.classList.add("flex");

    var newName = document.createElement("div");
    newName.classList.add("product");
    newProduct.appendChild(newName);
    newName.innerHTML = "<span>" + productInfo.value + "</span>";

    var newPrice = document.createElement("div");
    newProduct.appendChild(newPrice);
    newPrice.innerHTML = "$<span class='price'>" + priceInfo.value + "</span>";

    var newQty = document.createElement("div");
    newProduct.appendChild(newQty);
    newQty.innerHTML =
      "<label>QTY<input type='number' placeholder='0' class='quantity'/></label>";

    var newTotal = document.createElement("div");
    newProduct.appendChild(newTotal);
    newTotal.innerHTML = "$<span class='total'>" + "0.00" + "</span>";

    // Recreate the button with the same class as the ones before
    // but the function deleteButton() don't take acount this new one
    var newBtn = document.createElement("div");
    newProduct.appendChild(newBtn);
    newBtn.innerHTML = "<button class='btn btn-delete'>Delete</button>";

    // Add the new product
    var list = document.querySelector(".list");
    list.appendChild(newProduct);

    // Reset the input when a new product is added
    productInfo.value = "";
    priceInfo.value = "";

    console.log(newProduct);
  };
}

createNewProduct();

// function deleteItem(e) {}

// function getPriceByProduct(itemNode) {}

// function updatePriceByProduct(productPrice, index) {}

// function getTotalPrice() {}

// function createQuantityInput() {}

// function createDeleteButton() {}

// function createQuantityNode() {}

// function createItemNode(dataType, itemData) {}

// function createNewItemRow(itemName, itemUnitPrice) {}

// function createNewItem() {}

// // window.onload = function(){
// //   var calculatePriceButton = document.getElementById('calc-prices-button');
// //   var createItemButton = document.getElementById('new-item-create');
// //   var deleteButtons = document.getElementsByClassName('btn-delete');

// //   calculatePriceButton.onclick = getTotalPrice;
// //   createItemButton.onclick = createNewItem;

// //   for(var i = 0; i<deleteButtons.length ; i++){
// //     deleteButtons[i].onclick = deleteItem;
// //   }
// // };
