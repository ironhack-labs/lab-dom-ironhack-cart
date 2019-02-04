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
    product.id = "product";
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
    product.appendChild(deleteButton);
    //SECOND PRODUCT
        //product div
        var product = document.createElement("div");
        product.id = "product2";
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
        product.appendChild(deleteButton);
    //calculate prices button
    var calculatePricesButton = document.createElement("button");
    calculatePricesButton.innerHTML = "Calculate Prices";
    cart.appendChild(calculatePricesButton);
    calculatePricesButton.addEventListener("click", function () {
        for (i = 0; i < document.getElementsByClassName("productCostSpan").length; i++) {
            var totalPrice = parseInt(document.getElementsByClassName("productCostSpan")[i].textContent, 10) * document.getElementsByClassName("productUnitsInput")[i].value;
            document.getElementsByClassName("productTotalPriceSpan")[i].innerHTML = totalPrice + "$";
        }
    });
}

// var calculatePrices = function () {
//     var totalPrice = parseInt(productCostSpan, 10) * productUnitsInput;
//     productTotalPricesSpan = "$ " + totalPrice;
// }


// var text = '42px';
// var integer = parseInt(text, 10);
// // returns 42

// function startGame() {
//     var body = document.getElementsByTagName("body")[0];
//     var startButton = document.createElement("button");
//     startButton.innerHTML = "Start the game!";
//     startButton.id = "start button";
//     body.appendChild(startButton);
//     startButton.addEventListener("click", function() {
//         createImagesFlexbox();
//         createWeaponsFlexbox();
//         createRoomsFlexbox();
//     });
// };



//BACKUP

// function createCart() {
//     var body = document.getElementsByTagName("body")[0];
//     //cart div
//     var cart = document.createElement("div");
//     cart.id = "cart";
//     body.appendChild(cart);
//     //allProducts div
//     var allProducts = document.createElement("div");
//     allProducts.id = "all-products";
//     cart.appendChild(allProducts);
//     //product div
//     var product = document.createElement("div");
//     product.id = "product";
//     allProducts.appendChild(product);
//     product.style.display = "flex";
//     product.style.flexDirection = "row";
//     product.style.justifyContent = "space-around";
//     //name div
//     var productName = document.createElement("div");
//     product.appendChild(productName);
//     var productNameSpan = document.createElement("span");
//     productNameSpan.innerHTML = "IronBubble-head"
//     productName.appendChild(productNameSpan);
//     //cost div
//     var productCost = document.createElement("div");
//     product.appendChild(productCost);
//     var productCostSpan = document.createElement("span");
//     productCostSpan.innerHTML = "25.00$";
//     productCost.appendChild(productCostSpan);
//     //units div
//     var productUnits = document.createElement("div");
//     product.appendChild(productUnits);
//     var productUnitsLabel = document.createElement("label");
//     productUnitsLabel.innerHTML = "QTY";
//     var productUnitsInput = document.createElement("input");
//     productUnitsInput.placeholder = "0";
//     productUnits.appendChild(productUnitsLabel);
//     productUnits.appendChild(productUnitsInput);
//     //total product price
//     var productTotalPrice = document.createElement("div");
//     product.appendChild(productTotalPrice);
//     var productTotalPriceSpan = document.createElement("span");
//     productTotalPriceSpan.innerHTML = "0.00$";
//     productTotalPrice.appendChild(productTotalPriceSpan);
//     //delete button
//     var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "Delete";
//     product.appendChild(deleteButton);
//     //main title
//     var mainTitle = document.createElement("h1");
//     mainTitle.innerHTML = "Ironhack Merchandising Shop";
//     product.before(mainTitle);
//     //calculate prices button
//     var calculatePricesButton = document.createElement("button");
//     calculatePricesButton.innerHTML = "Calculate Prices";
//     cart.appendChild(calculatePricesButton);
//     calculatePricesButton.addEventListener("click", function () {
//         var totalPrice = parseInt(productCostSpan.textContent, 10) * productUnitsInput.value;
//         productTotalPriceSpan.innerHTML = totalPrice + "$";
//         console.log(totalPrice);
//     });
// }