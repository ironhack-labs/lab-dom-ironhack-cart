// //*************************** */FIRST VERSION OF MY WORK*****************************************

// window.onload = function(){

//   // buttons
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//   var createItemButton = document.getElementById('new-item-create');

//   // other elements
//   var body = document.getElementsByTagName("body")[0];
//   var allUnitCosts = document.getElementsByClassName("cost-product-unit");
//   var allQuantities = document.getElementsByClassName("quantity-input");
//   var allCostsByProduct = document.getElementsByClassName("cost-product-total");

//   // 1) Calculating the total price of all products

//   function getTotalPrice() {

//     var totalCostCart = document.getElementById("total-cost-cart");
//     var totalCostCartInt = parseInt(totalCostCart.innerHTML);

//     totalCostCartInt = 0;

//     for (let i=0;i<allCostsByProduct.length;i++) {
//       var unitCost = parseInt(allUnitCosts[i].innerHTML);
//       var quantity = parseInt(allQuantities[i].value);
//       var costByProduct = allCostsByProduct[i];

//       var costByProductInt = unitCost * quantity;

//       if (!(isNaN(costByProductInt))) {
//         costByProduct.innerHTML = `${costByProductInt}`;
//       }

//       totalCostCartInt += costByProductInt;
//     }

//     if (isNaN(totalCostCartInt)) {
//       alert("Please enter all quantities or delete items")
//     } else {
//       totalCostCart.innerHTML = `${totalCostCartInt}`;
//     }

//   }

//   calculatePriceButton.onclick = getTotalPrice;

//   // 2) Deleting products

//   function deleteItem(e){
//     var productRow = e.currentTarget.parentNode.parentNode;
//     body.removeChild(productRow);
//     getTotalPrice();
//   }

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }

//   // 3) Adding products
  
//     // copying a existing product
//   var modelRow = document.getElementsByClassName("product")[0];

//   function createNewItem(){
//     // copying a existing product
//     var newItem = modelRow.cloneNode(true);
//     var lastElement = document.getElementById("before-new-line");
//     body.insertBefore(newItem, lastElement);

//     // data we need to update all users' inputs
//     var allProductNamesInput = document.getElementsByClassName("product-input");
//     var allProductPricesInput = document.getElementsByClassName("price-input");
//     var allProductNames = document.getElementsByClassName("product-name");

//     // retrieving user's inputs
//     var theNewProductName = allProductNamesInput[allProductNamesInput.length-1].value;
//     var theNewProductPrice = allProductPricesInput[allProductPricesInput.length-1].value;

//     // using user's inputs to change the newly created object
//     allProductNames[allProductNames.length-1].innerHTML = theNewProductName;
//     allUnitCosts[allUnitCosts.length-1].innerHTML = theNewProductPrice;
//     allQuantities[allQuantities.length-1].value = "";
//     allCostsByProduct[allCostsByProduct.length-1].innerHTML = "0.00";
// -
//     // alert the user to change the quantity of the newly created item
//     alert("Don't forget to choose a quantity!");

//     // be able to delete newly created items
//     newItem.getElementsByTagName("button")[0].onclick = deleteItem;

//   }

//   createItemButton.onclick = createNewItem;

// };


// //*************************** */SECOND VERSION OF MY WORK*****************************************

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var createItemButton = document.getElementById('new-item-create');
  var body = document.getElementsByTagName("body")[0];

  function createNewProduct(productName,productPrice) {

    // creates the new product
    var newItemRow = document.createElement('div');
    newItemRow.setAttribute("class","product");

    // filling the new product div with its elements
    var newProductName = createNewProductName(productName);
    var newProductPrice = createNewProductPrice(productPrice);
    var newProductQuantity = createNewProductQuantity();
    var newProductTotalCost = createNewProductTotalCost();
    var newProductDeleteButton = createNewDeleteButton();
    newItemRow.appendChild(newProductName);
    newItemRow.appendChild(newProductPrice);
    newItemRow.appendChild(newProductQuantity);
    newItemRow.appendChild(newProductTotalCost);
    newItemRow.appendChild(newProductDeleteButton);

    // insert the new product div at the right place in the file
    var lastElement = document.getElementById("before-new-line");
    body.insertBefore(newItemRow, lastElement);

    // enables to delete new product that we add
    newItemRow.getElementsByTagName("button")[0].onclick = deleteItem;

  }
  
  // function that we need to create a new item
  function createNewProductName(productName) {
    var newItemProductNameDiv = document.createElement("div");
    var newItemProductNameSpan = document.createElement("span");
    newItemProductNameSpan.setAttribute("class","product-name");
    newItemProductNameSpan.innerHTML = `${productName}`;
    newItemProductNameDiv.appendChild(newItemProductNameSpan);
    return newItemProductNameDiv;
  }
  
  // function that we need to create a new item
  function createNewProductPrice(productPrice) {
    var newItemProductPriceDiv = document.createElement("div");
    var newItemProductPriceSpan = document.createElement("span");
    newItemProductPriceSpan.setAttribute("class","cost-product-unit");
    newItemProductPriceDiv.innerHTML = "$";
    newItemProductPriceSpan.innerHTML = `${productPrice}`;
    newItemProductPriceDiv.appendChild(newItemProductPriceSpan);
    return newItemProductPriceDiv;
  }

  // function that we need to create a new item
  function createNewProductQuantity() {
    var newItemProductQuantityDiv = document.createElement("div");
    var newItemProductQuantitySpan = document.createElement("span");
    var newItemProductQuantityInput = document.createElement("input");
  
    newItemProductQuantitySpan.setAttribute("class","quantity-label quantity");
    newItemProductQuantitySpan.innerHTML="QTY";
    newItemProductQuantityDiv.appendChild(newItemProductQuantitySpan);
    newItemProductQuantityInput.setAttribute("class","quantity-input");
    newItemProductQuantityInput.setAttribute("type","text");
    newItemProductQuantityDiv.appendChild(newItemProductQuantityInput);
    return newItemProductQuantityDiv;
  }
  
  // function that we need to create a new item
  function createNewProductTotalCost() {
    var newItemProductTotalCostDiv = document.createElement("div");
    var newItemProductTotalCostSpan = document.createElement("span");
    newItemProductTotalCostSpan.setAttribute("class","cost-product-total");
    newItemProductTotalCostDiv.innerHTML = "$";
    newItemProductTotalCostSpan.innerHTML = "0.00";
    newItemProductTotalCostDiv.appendChild(newItemProductTotalCostSpan);
    return newItemProductTotalCostDiv;
  }
  
  // function that we need to create a new item
  function createNewDeleteButton() {
    var newDeleteButtonDiv = document.createElement("div");
    var newDeleteButton = document.createElement("button");
    newDeleteButton.setAttribute("class","btn btn-delete");
    newDeleteButton.innerHTML = "Delete";
    newDeleteButtonDiv.appendChild(newDeleteButton);
    return newDeleteButtonDiv;
  }
  
  // function that we call to delete items
  function deleteItem(e){
    var productRow = e.currentTarget.parentNode.parentNode;
    body.removeChild(productRow);
    getTotalPrice();
  }
  
  // function that we use to calculate the total of each product and the total cart
  function getTotalPrice() {
    var totalCostCart = document.getElementById("total-cost-cart");
    var totalCostCartInt = parseInt(totalCostCart.innerHTML);
    var allUnitCosts = document.getElementsByClassName("cost-product-unit");
    var allQuantities = document.getElementsByClassName("quantity-input");
    var allCostsByProduct = document.getElementsByClassName("cost-product-total");
  
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

  // calling the functions when we click different buttons
  createItemButton.addEventListener("click",function(){
    var productNameInput = document.getElementsByClassName("product-input")[0].value;
    var productPriceInput = document.getElementsByClassName("price-input")[0].value;
    createNewProduct(productNameInput,productPriceInput);
  });

  calculatePriceButton.onclick = getTotalPrice;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};