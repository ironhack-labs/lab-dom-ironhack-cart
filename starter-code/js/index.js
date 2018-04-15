function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
  getTotalPrice();
}// run getTotalPrice function to update total price after deleting row

  //two parent divs, "row"
  //delete button div is nested inside of div. So parentNode. is added twice 
  
  // all the prices
  var allPrices = document.getElementsByClassName('single-item-price');
  console.log("all prices: ", allPrices);
  
  // all the products
  var allProducts = document.getElementsByClassName('product-name');
  console.log("======: ", allProducts)
  
  // all the quantities
  var allQuantities = document.getElementsByClassName('quantity-input');
  
  function getPriceByProduct(){
    for(var i=0; i< allProducts.length; i++){
      var totalSingleItemPrice = Number(allPrices[i].innerHTML) * allQuantities[i].value;
      console.log(totalSingleItemPrice);
      document.getElementsByClassName('total-single-item-price')[i].innerHTML = totalSingleItemPrice;
    }
  }
  
  // function updatePriceByProduct(productPrice, index){
  
  // }
  
  var updatedPricesArray = document.getElementsByClassName('total-single-item-price');
  
  console.log("updated array: ", updatedPricesArray);
  
  function sumOfTwoNumbers(a,b){
    return a+b;
  }
  
  function getTotalPrice() {
    getPriceByProduct();
    var newPricesArray = [];
    for(var i=0; i< allProducts.length; i++){
      var singleProductTotalPrice = Number(updatedPricesArray[i].innerHTML);
      // console.log("blah: ", singleProductTotalPrice);
      newPricesArray.push(singleProductTotalPrice);
      console.log("newPricesArray: ", newPricesArray)
    }
    var total = newPricesArray.reduce(sumOfTwoNumbers,0);
    console.log("total is: ", total);
    document.getElementById('final-price').innerHTML = total;
  }
  
  //newName place holder what the user inputs 
  function createNameNode (newName){
    var productDiv = document.createElement('div');
    productDiv.setAttribute("class", "col-lg-2");

    console.log("productDiv", productDiv);

    var productSpan =document.createElement("span");

    productSpan.setAttribute("class", "product-name");
    productSpan.innerHTML = newName;
    productDiv.appendChild(productSpan);

    return productDiv;

  }

  //2nd create price 
  function createSinglePriceNode(newPrice){

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "col-lg-2");

    var dollarSpan = document.createElement("span");

    dollarSpan.innerHTML = "$";
    dollarSpan.setAttribute("class", "dollar-sign");

    var priceSpan = document.createElement("span");

    priceSpan.setAttribute("class", "single-item-price");
    priceSpan.innerHTML = newPrice;
    priceDiv.appendChild(priceSpan);

    console.log("priceDiv: ", priceDiv);
    return priceDiv;

  }
  

  //3rd reate whole row
  
  // function createQuantityInput(){
  
  // }
  
  // function createDeleteButton(){
  
  // }
  
  // function createQuantityNode(){
  
  // }
  
  // function createItemNode(dataType, itemData){
  
  // }
  //3rd creates the whole new
  function createNewItemRow(itemName, itemUnitPrice){
    var productRow = document.createElement ("div");
    productRow = document.createElement("div");
    productRow.setAttribute("class", "row");
    var productName = createNameNode(itemName);
    var productPrice = createSinglePriceNode (itemPrice);
    productRow.appendChild(productName);
    productRow.appendChild(productPrice);

    return productRow; 
  }
 

  //4th sets the row on the DOM, position it above input fields
  function createNewItem(){
    var singleProductName = document.getElementById("new-product-name");
    var singleProductPrice = document.getElementById("new-product-name");
    
  }
  // }
  
  function createNewItem(){
  var singleProductName = document.getElementById("new-product-name").value;
  var singleProductPrice = document.getElementById("new-product-price").value;

  var newItem = createNewItemRow(singleProductName, singleProductPrice);
  var newDiv = document.getElementById("create");

  }
  // }
  
  // 
  window.onload = function(){
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
    calculatePriceButton.onclick = getTotalPrice;
    // createItemButton.onclick = createNewItem;
  
    // for(var i = 0; i<deleteButtons.length ; i++){
      for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
      }
    // }
  };