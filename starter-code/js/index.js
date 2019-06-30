window.onload = function(){

  // buttons
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var createItemButton = document.getElementById('new-item-create');

  // other elements
  var body = document.getElementsByTagName("body")[0];
  var allUnitCosts = document.getElementsByClassName("cost-product-unit");
  var allQuantities = document.getElementsByClassName("quantity-input");
  var allCostsByProduct = document.getElementsByClassName("cost-product-total");

  // 1) Calculating the total price of all products

  function getTotalPrice() {

    var totalCostCart = document.getElementById("total-cost-cart");
    var totalCostCartInt = parseInt(totalCostCart.innerHTML);

    totalCostCartInt = 0;

    for (let i=0;i<allCostsByProduct.length;i++) {
      var unitCost = parseInt(allUnitCosts[i].innerHTML);
      var quantity = parseInt(allQuantities[i].value);
      var costByProduct = allCostsByProduct[i];

      var costByProductInt = unitCost * quantity;

      if (!(isNaN(costByProductInt))) {
        costByProduct.innerHTML = `${costByProductInt}`;
      }

      totalCostCartInt += costByProductInt;
    }

    if (isNaN(totalCostCartInt)) {
      alert("Please enter all quantities or delete items")
    } else {
      totalCostCart.innerHTML = `${totalCostCartInt}`;
    }

  }

  calculatePriceButton.onclick = getTotalPrice;

  // 2) Deleting products

  function deleteItem(e){
    var productRow = e.currentTarget.parentNode.parentNode;
    body.removeChild(productRow);
    getTotalPrice();
  }

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  // 3) Adding products

  function createNewItem(){
    // copying a existing product
    var modelRow = document.getElementsByClassName("product")[0];
    var newItem = modelRow.cloneNode(true);
    var lastElement = document.getElementById("before-new-line");
    body.insertBefore(newItem, lastElement);

    // data we need to update all users' inputs
    var allProductNamesInput = document.getElementsByClassName("product-input");
    var allProductPricesInput = document.getElementsByClassName("price-input");
    var allProductNames = document.getElementsByClassName("product-name");

    // retrieving user's inputs
    var theNewProductName = allProductNamesInput[allProductNamesInput.length-1].value;
    var theNewProductPrice = allProductPricesInput[allProductPricesInput.length-1].value;

    // using user's inputs to change the newly created object
    allProductNames[allProductNames.length-1].innerHTML = theNewProductName;
    allUnitCosts[allUnitCosts.length-1].innerHTML = theNewProductPrice;
    allQuantities[allQuantities.length-1].value = "";
    allCostsByProduct[allCostsByProduct.length-1].innerHTML = "0.00";

    // alert the user to change the quantity of the newly created item
    alert("Don't forget to choose a quantity!");

    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  }

  createItemButton.onclick = createNewItem;

};