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
    //main title
    var mainTitle = document.createElement("h1");
    mainTitle.innerHTML = "Ironhack Merchandising Shop";
    product.before(mainTitle);
    //name div
    var productName = document.createElement("div");
    productName.className = "first-flex";
    product.appendChild(productName);
    var productNameSpan = document.createElement("span");
    productNameSpan.innerHTML = "IronBubble-head";
    productName.appendChild(productNameSpan);
    //cost div
    var productCost = document.createElement("div");
    productCost.className = "second-flex";
    product.appendChild(productCost);
    var productCostSpan = document.createElement("span");
    productCostSpan.className = "product-cost-span";
    productCostSpan.innerHTML = "25.00$";
    productCost.appendChild(productCostSpan);
    //units div
    var productUnits = document.createElement("div");
    productUnits.className = "third-flex";
    product.appendChild(productUnits);
    var productUnitsLabel = document.createElement("label");
    productUnitsLabel.innerHTML = "QTY ";
    var productUnitsInput = document.createElement("input");
    productUnitsInput.placeholder = "0";
    productUnitsInput.className = "product-units-input";
    productUnits.appendChild(productUnitsLabel);
    productUnits.appendChild(productUnitsInput);
    //total product price
    var productTotalPrice = document.createElement("div");
    productTotalPrice.className = "fourth-flex";
    product.appendChild(productTotalPrice);
    var productTotalPriceSpan = document.createElement("span");
    productTotalPriceSpan.innerHTML = "0.00$";
    productTotalPriceSpan.className = "product-total-price-span";
    productTotalPrice.appendChild(productTotalPriceSpan);
    //delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn-delete btn";
    product.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteProduct);
    //SECOND PRODUCT
        //product div
        var product = document.createElement("div");
        product.className = "product";
        allProducts.appendChild(product);
        //name div
        var productName = document.createElement("div");
        productName.className = "first-flex";
        product.appendChild(productName);
        var productNameSpan = document.createElement("span");
        productNameSpan.innerHTML = "IronShirt";
        productName.appendChild(productNameSpan);
        //cost div
        var productCost = document.createElement("div");
        productCost.className = "second-flex";
        product.appendChild(productCost);
        var productCostSpan = document.createElement("span");
        productCostSpan.className = "product-cost-span";
        productCostSpan.innerHTML = "15.00$";
        productCost.appendChild(productCostSpan);
        //units div
        var productUnits = document.createElement("div");
        productUnits.className = "third-flex";
        product.appendChild(productUnits);
        var productUnitsLabel = document.createElement("label");
        productUnitsLabel.innerHTML = "QTY ";
        var productUnitsInput = document.createElement("input");
        productUnitsInput.placeholder = "0";
        productUnitsInput.className = "product-units-input";
        productUnits.appendChild(productUnitsLabel);
        productUnits.appendChild(productUnitsInput);
        //total product price
        var productTotalPrice = document.createElement("div");
        productTotalPrice.className = "fourth-flex";
        product.appendChild(productTotalPrice);
        var productTotalPriceSpan = document.createElement("span");
        productTotalPriceSpan.innerHTML = "0.00$";
        productTotalPriceSpan.className = "product-total-price-span";
        productTotalPrice.appendChild(productTotalPriceSpan);
        //delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "btn-delete btn";
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
    calculatePricesButton.className = "btn btn-success";
    calculatePricesButton.innerHTML = "Calculate Prices";
    cart.appendChild(calculatePricesButton);
    calculatePricesButton.addEventListener("click", function () {
        var finalPrice = 0;
        for (i = 0; i < document.getElementsByClassName("product-cost-span").length; i++) {
            var totalPrice = parseInt(document.getElementsByClassName("product-cost-span")[i].textContent, 10) * document.getElementsByClassName("product-units-input")[i].value;
            document.getElementsByClassName("product-total-price-span")[i].innerHTML = totalPrice + "$";
            finalPrice += totalPrice;
        };
        cartTotalPriceTitle.innerHTML = "Total Price: <span>" + finalPrice + "$<span>";
    });
    //new product
    var newProductDiv = document.createElement("div");
    newProductDiv.className = "new-product";
    allProducts.appendChild(newProductDiv);
    var nameInput = document.createElement("input");
    nameInput.className = "new-product-name";
    nameInput.placeholder = "New item";
    newProductDiv.appendChild(nameInput);
    var priceInput = document.createElement("input");
    priceInput.className = "new-product-price";
    priceInput.placeholder = "Price";
    newProductDiv.appendChild(priceInput);
    var newProductButton = document.createElement("button");
    newProductButton.className = "btn";
    newProductButton.innerHTML = "create";
    newProductDiv.appendChild(newProductButton);
    newProductButton.addEventListener("click", function() {
        //product div
        var lastAddedProductDiv = document.createElement("div");
        lastAddedProductDiv.className = "product";
        newProductDiv.before(lastAddedProductDiv);
        //name div
        var productName = document.createElement("div");
        productName.className = "first-flex";
        lastAddedProductDiv.appendChild(productName);
        var productNameSpan = document.createElement("span");
        productNameSpan.innerHTML = nameInput.value;
        productName.appendChild(productNameSpan);
        //cost div
        var productCost = document.createElement("div");
        productCost.className = "second-flex";
        lastAddedProductDiv.appendChild(productCost);
        var productCostSpan = document.createElement("span");
        productCostSpan.className = "product-cost-span";
        productCostSpan.innerHTML = priceInput.value + "$";
        productCost.appendChild(productCostSpan);
        //units div
        var productUnits = document.createElement("div");
        productUnits.className = "third-flex";
        lastAddedProductDiv.appendChild(productUnits);
        var productUnitsLabel = document.createElement("label");
        productUnitsLabel.innerHTML = "QTY ";
        var productUnitsInput = document.createElement("input");
        productUnitsInput.placeholder = "0";
        productUnitsInput.className = "product-units-input";
        productUnits.appendChild(productUnitsLabel);
        productUnits.appendChild(productUnitsInput);
        //total product price
        var productTotalPrice = document.createElement("div");
        productTotalPrice.className = "fourth-flex";
        lastAddedProductDiv.appendChild(productTotalPrice);
        var productTotalPriceSpan = document.createElement("span");
        productTotalPriceSpan.innerHTML = "0.00$";
        productTotalPriceSpan.className = "product-total-price-span";
        productTotalPrice.appendChild(productTotalPriceSpan);
        //delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "btn-delete btn";
        lastAddedProductDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteProduct);
    })
};


function deleteProduct () {
    document.getElementById("all-products").removeChild(event.currentTarget.parentNode);
}