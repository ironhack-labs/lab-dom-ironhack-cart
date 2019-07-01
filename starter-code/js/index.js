function getPriceByProduct() {
    let length = (document.getElementsByClassName("number-of-item")).length;
    for (let i = 0; i < length; i++) {
        let y = document.getElementsByClassName("number-of-item")[i].value
        let x = document.getElementsByClassName("item-price")[i].innerHTML
        x = parseInt(x)
        y = parseInt(y)
        document.getElementsByClassName("subTotal")[i].innerHTML = x * y;
    }
}

function getTotalPrice() {
    let length = (document.getElementsByClassName("number-of-item")).length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        let sum1 = parseInt(document.getElementsByClassName("subTotal")[i].innerHTML);
        sum = sum + sum1;
    }
    document.getElementsByClassName("totalPrices")[0].innerHTML = sum;
}

function createNewItemRow() {
    let name = document.getElementById("newName").value;
    let price = document.getElementById("newPrice").value;
    let newRow = document.createElement("div")
    newRow.innerHTML = `
    <div>
        <p class="item-name">${name}</p>
    </div>
    <div>
        <p>$ <span class="item-price">${price}</span></p>
    </div>
    <div>QTY<input class="number-of-item" type="text" value="0" onchange="getPriceByProduct()"></div>
    <div>
        <p>$ <span class="subTotal">0.00</span></p>
    </div>
    <div><button class="btn btn-delete">Delete</button></div>
    `
    newRow.setAttribute("class", "shopping-item");
    let newItem = document.getElementsByClassName("cart")[0]
    newItem.appendChild(newRow);
    hangDeleteFuncs();
}

function deleteItem(e) {
    debugger
    let item = e.currentTarget.parentNode.parentNode;
    let parent = document.getElementsByClassName("cart")[0];
    parent.removeChild(item);
    getTotalPrice();
    debugger
}

function hangDeleteFuncs() {
    var deleteButtons = document.getElementsByClassName('btn-delete');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
};

window.onload = hangDeleteFuncs;