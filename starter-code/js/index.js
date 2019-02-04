function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


document.body.onload = createCart;

function createCart() {
    var body = document.getElementsByTagName("body")[0];
    //cart div
    var cart = document.createElement("div");
    cart.id = "cart";
    body.appendChild(cart);
    //allProducts div
    var allProducts = document.createElement("div");
    allProducts.id = "all-products";
    cart.appendChild(allProducts);
    //product div
    var product = document.createElement("div");
    product.className = "product";
    allProducts.appendChild(product);
    product.style.display = "flex";
    product.style.flexDirection = "row";
    product.style.justifyContent = "space-around";
    //main title
    var mainTitle = document.createElement("h1");
    mainTitle.innerHTML = "Ironhack Merchandising Shop";
    product.before(mainTitle);
    //name div
    var productName = document.createElement("div");
    product.appendChild(productName);
    var productNameSpan = document.createElement("span");
    productNameSpan.innerHTML = "IronBubble-head";
    productName.appendChild(productNameSpan);
    //cost div
    var productCost = document.createElement("div");
    product.appendChild(productCost);
    var productCostSpan = document.createElement("span");
    productCostSpan.className = "productCostSpan";
    productCostSpan.innerHTML = "25.00$";
    productCost.appendChild(productCostSpan);
    //units div
    var productUnits = document.createElement("div");
    product.appendChild(productUnits);
    var productUnitsLabel = document.createElement("label");
    productUnitsLabel.innerHTML = "QTY ";
    var productUnitsInput = document.createElement("input");
    productUnitsInput.placeholder = "0";
    productUnitsInput.className = "productUnitsInput";
    productUnits.appendChild(productUnitsLabel);
    productUnits.appendChild(productUnitsInput);
    //total product price
    var productTotalPrice = document.createElement("div");
    product.appendChild(productTotalPrice);
    var productTotalPriceSpan = document.createElement("span");
    productTotalPriceSpan.innerHTML = "0.00$";
    productTotalPriceSpan.className = "productTotalPriceSpan";
    productTotalPrice.appendChild(productTotalPriceSpan);
    //delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "deleteButton";
    product.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteProduct);
    //SECOND PRODUCT
        //product div
        var product = document.createElement("div");
        product.className = "product";
        allProducts.appendChild(product);
        product.style.display = "flex";
        product.style.flexDirection = "row";
        product.style.justifyContent = "space-around";
        //name div
        var productName = document.createElement("div");
        product.appendChild(productName);
        var productNameSpan = document.createElement("span");
        productNameSpan.innerHTML = "IronShirt";
        productName.appendChild(productNameSpan);
        //cost div
        var productCost = document.createElement("div");
        product.appendChild(productCost);
        var productCostSpan = document.createElement("span");
        productCostSpan.className = "productCostSpan";
        productCostSpan.innerHTML = "15.00$";
        productCost.appendChild(productCostSpan);
        //units div
        var productUnits = document.createElement("div");
        product.appendChild(productUnits);
        var productUnitsLabel = document.createElement("label");
        productUnitsLabel.innerHTML = "QTY ";
        var productUnitsInput = document.createElement("input");
        productUnitsInput.placeholder = "0";
        productUnitsInput.className = "productUnitsInput";
        productUnits.appendChild(productUnitsLabel);
        productUnits.appendChild(productUnitsInput);
        //total product price
        var productTotalPrice = document.createElement("div");
        product.appendChild(productTotalPrice);
        var productTotalPriceSpan = document.createElement("span");
        productTotalPriceSpan.innerHTML = "0.00$";
        productTotalPriceSpan.className = "productTotalPriceSpan";
        productTotalPrice.appendChild(productTotalPriceSpan);
        //delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "deleteButton";
        product.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteProduct);
    //total price of the cart
    var cartTotalPrice = document.createElement("div");
    cart.appendChild(cartTotalPrice);
    var cartTotalPriceTitle = document.createElement("h2");
    cartTotalPriceTitle.innerHTML = "Total Price: <span>0$</span>";
    cartTotalPrice.appendChild(cartTotalPriceTitle);
    //calculate prices button
    var calculatePricesButton = document.createElement("button");
    calculatePricesButton.innerHTML = "Calculate Prices";
    cart.appendChild(calculatePricesButton);
    calculatePricesButton.addEventListener("click", function () {
        var finalPrice = 0;
        for (i = 0; i < document.getElementsByClassName("productCostSpan").length; i++) {
            var totalPrice = parseInt(document.getElementsByClassName("productCostSpan")[i].textContent, 10) * document.getElementsByClassName("productUnitsInput")[i].value;
            document.getElementsByClassName("productTotalPriceSpan")[i].innerHTML = totalPrice + "$";
            finalPrice += totalPrice;
        };
        console.log(finalPrice);
        cartTotalPriceTitle.innerHTML = "Total Price: <span>" + finalPrice + "$<span>";
    });
    //new product
    var newProductDiv = document.createElement("div");
    allProducts.appendChild(newProductDiv);
    newProductDiv.style.display = "flex";
    newProductDiv.style.flexDirection = "row";
    newProductDiv.style.justifyContent = "space-around";
    var nameInput = document.createElement("input");
    nameInput.placeholder = "New item";
    newProductDiv.appendChild(nameInput);
    var priceInput = document.createElement("input");
    priceInput.placeholder = "Price";
    newProductDiv.appendChild(priceInput);
    var newProductButton = document.createElement("button");
    newProductButton.innerHTML = "create";
    newProductDiv.appendChild(newProductButton);
    newProductButton.addEventListener("click", function() {
        //product div
        var lastAddedProductDiv = document.createElement("div");
        lastAddedProductDiv.className = "product";
        newProductDiv.before(lastAddedProductDiv);
        lastAddedProductDiv.style.display = "flex";
        lastAddedProductDiv.style.flexDirection = "row";
        lastAddedProductDiv.style.justifyContent = "space-around";
        //name div
        var productName = document.createElement("div");
        lastAddedProductDiv.appendChild(productName);
        var productNameSpan = document.createElement("span");
        productNameSpan.innerHTML = nameInput.value;
        productName.appendChild(productNameSpan);
        //cost div
        var productCost = document.createElement("div");
        lastAddedProductDiv.appendChild(productCost);
        var productCostSpan = document.createElement("span");
        productCostSpan.className = "productCostSpan";
        productCostSpan.innerHTML = priceInput.value + "$";
        productCost.appendChild(productCostSpan);
        //units div
        var productUnits = document.createElement("div");
        lastAddedProductDiv.appendChild(productUnits);
        var productUnitsLabel = document.createElement("label");
        productUnitsLabel.innerHTML = "QTY ";
        var productUnitsInput = document.createElement("input");
        productUnitsInput.placeholder = "0";
        productUnitsInput.className = "productUnitsInput";
        productUnits.appendChild(productUnitsLabel);
        productUnits.appendChild(productUnitsInput);
        //total product price
        var productTotalPrice = document.createElement("div");
        lastAddedProductDiv.appendChild(productTotalPrice);
        var productTotalPriceSpan = document.createElement("span");
        productTotalPriceSpan.innerHTML = "0.00$";
        productTotalPriceSpan.className = "productTotalPriceSpan";
        productTotalPrice.appendChild(productTotalPriceSpan);
        //delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "deleteButton";
        lastAddedProductDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteProduct);
    })
};


function deleteProduct () {
    document.getElementById("all-products").removeChild(event.currentTarget.parentNode);
}