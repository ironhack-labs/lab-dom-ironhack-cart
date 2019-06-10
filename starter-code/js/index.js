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

// window.onload = function() {
//     var calculatePriceButton = document.getElementById("calc-prices-button");
//     var createItemButton = document.getElementById("new-item-create");
//     var deleteButtons = document.getElementsByClassName("btn-delete");

//     calculatePriceButton.onclick = getTotalPrice;
//     createItemButton.onclick = createNewItem;

//     for (var i = 0; i < deleteButtons.length; i++) {
//         deleteButtons[i].onclick = deleteItem;
//     }
// };

window.onload = function() {
    document.getElementById("calc-prices-button").onclick = function(e) {
        e.preventDefault();

        let itemsProducts = document.querySelectorAll(".wrapper");
        let totalItemsPrice = 0;
        let costUnitElement;
        let qtyElement;

        for (let cont = 0; cont <= itemsProducts.length - 1; cont++) {
            costUnitElement = 0;
            qtyElement = 0;
            let itemProd = itemsProducts[cont];
            costUnitElement = parseFloat(
                itemProd.querySelector(".cost-unit").innerHTML.replace("$", "")
            );

            qtyElement = parseInt(itemProd.querySelector(".units").value);
            if (isNaN(qtyElement) || qtyElement.value <= 0) {
                qtyElement = 0;
            }
            itemProd.querySelector(".total-price-product").innerText =
                "$" + costUnitElement * qtyElement;

            totalItemsPrice = totalItemsPrice + costUnitElement * qtyElement;
        }
        document.querySelector(".total-price-lbl").innerText =
            "$" + totalItemsPrice;
    };

    let removeCartItemButtons = document.querySelectorAll(".btn-delete");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        console.log(removeCartItemButtons[i]);
        let button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    function removeCartItem(event) {
        let buttonCliked = event.target;
        buttonCliked.parentElement.parentElement.remove();
        updateCartTotal();
    }

    function updateCartTotal() {
        let cartItemContainer = document.querySelector(".list-items");
        let cartRows = cartItemContainer.querySelectorAll(".wrapper");

        let total = 0;
        for (let i = 0; i < cartRows.length; i++) {
            let cartRow = cartRows[i];
            let priceElement = cartRow.querySelector(".cost-unit");
            let quantityElement = cartRow.querySelector(".units");

            let price = parseFloat(priceElement.innerText.replace("$", ""));
            let quantity = quantityElement.value;
            total = total + price * quantity;
        }
        total = Math.round(total * 100) / 100;
        document.querySelector(".total-price-lbl").innerText = "$" + total;
    }

    let addToCartButtons = document.getElementsByClassName("btn-create");
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }

    function addToCartClicked(event) {
        let button = event.target;
        let shopItem = button.parentElement.parentElement;
        let title = document.querySelector("#new-id-item").value;
        let price = parseFloat(document.querySelector("#new-id-cost").value);
        addItemToCart(title, price);
        updateCartTotal();
    }

    function addItemToCart(title, price) {
        console.log(`product-name = ${title}, cost-unit=${price}`);
        let cartRow = document.createElement("div");
        cartRow.classList.add("wrapper");
        let cartItems = document.getElementsByClassName("list-items")[0];

        let cartRowContents = `
        <div class="product-name">
            <span class="product">${title}</span>
        </div>
        <div>
            <span class="cost-unit">$${price}</span>
        </div>
        <div class="quantity">
            <label for="units">QTY</label>
            <input class="units" type="text" placeholder="0">
        </div>
        <div>
            <span class="total-price-product">$0</span>
        </div>
        <div>
            <button class="btn btn-delete">Delete</button>
        </div>`;

        cartRow.innerHTML = cartRowContents;
        cartItems.append(cartRow);
        cartRow
            .getElementsByClassName("btn-delete")[0]
            .addEventListener("click", removeCartItem);
    }
};