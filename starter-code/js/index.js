window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.querySelectorAll('.btn-delete');

  deleteButtons.forEach(function(oneButton){
    oneButton.onclick = deleteItem;
  });

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  function getTotalPrice(itemNode){

    var itemNode = document.querySelectorAll(".item");
    var totalPrice = 0;

    itemNode.forEach(function(oneItem){

      var productPrice = oneItem.querySelector(".cost");
      productPrice = parseFloat(productPrice.innerHTML);

      var productQuantity = oneItem.querySelector(".quantity").value;

      var totalProductPrice = productPrice*productQuantity;

      var itemTotal = oneItem.querySelector(".itemTotal");
      itemTotal.innerHTML = totalProductPrice.toFixed(2) + "€";

      totalPrice += totalProductPrice;

    });
    var showTotal = document.querySelector(".totalPrice");
    
    showTotal.innerHTML = totalPrice.toFixed(2) + "€";
  }

  function deleteItem(){
    
    var clickedBtn = event.target;
    var clickedItem = clickedBtn.parentNode;
  
    var itemWrap = document.querySelector(".itemWrap");
    itemWrap.removeChild(clickedItem);
  }

  function createNewItem(){

    var newName = document.querySelector(".addProduct").value;
    var newPrice = document.querySelector(".setPrice").value;

    if(newName === "" || newPrice === ""){
      return;
    }
    else{
      newPrice = parseFloat(newPrice).toFixed(2);

      var newProduct = document.createElement("div");
      newProduct.className = "item";
      
      var itemWrap = document.querySelector(".itemWrap");
      itemWrap.appendChild(newProduct);

      var newProductContent = '<div class="productName">' + newName + '</div>';
      newProductContent += '<div class="cost">' + newPrice + '€</div>';
      newProductContent += '<div class="quantityWrap">';
      newProductContent += '<label>Qty</label>';
      newProductContent += '<input type="text" value="0" class="quantity" />';
      newProductContent += '</div>';
      newProductContent += '<div class="itemTotal">0.00€</div>';
      newProductContent += '<button class="btn-delete btn">Delete</button>';

      newProduct.innerHTML = newProductContent;

      var newDeleteBtn = newProduct.querySelector(".btn-delete");
      newDeleteBtn.onclick = deleteItem;
      
      document.querySelector(".addProduct").value = "";
      document.querySelector(".setPrice").value = "";
    }
  }
};
