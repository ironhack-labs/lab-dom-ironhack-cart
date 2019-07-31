function getPriceByProduct() {
    let valueItem = document.getElementsByClassName('valueitem');
    return Number(valueItem[0].innerText);
}

function getQtyByProduct() {
    let qtyProduct = document.getElementsByClassName('quantity')[0].value;
    return Number(qtyProduct);
}

function getTotal() {
    let total = 0;
    let valueItem = document.getElementsByClassName('valueitem');
    let qtyProduct = document.getElementsByClassName('quantity');
    let subtotal = document.getElementsByClassName('totalperproduct');
    for (let i = 0; i < qtyProduct.length; i++) {
        let firstValue = Number(valueItem[i].innerText);
        let secondValue = Number(qtyProduct[i].value);
        let product = firstValue * secondValue;
        subtotal[i].innerHTML = product;
        total += product;

    }
    updateTotalPrice(total);
}

function updateTotalPrice(value) {
    let finalSoma = document.getElementById("totalValue");
    finalSoma.innerHTML = value;
}


let deleteRow = (event) => {
    let father = document.getElementsByClassName('rows')[0];
    let children = father.childNodes;
    let cellulla = event.target;
    father.removeChild(event.target.parentElement);
    getTotal();
    if (father.children.length === 0) setup();
}

let createNewRow = (event) => {
    let firstInput = document.getElementsByClassName("firstInput")[0];
    let firstDescription = firstInput.value;
    let secondInput = document.getElementsByClassName("unit")[0];
    let secondDescription = secondInput.value;
    let rows = document.getElementsByClassName("rows")[0];
    if (!firstDescription || !secondInput) {
        return false;
    } else {
        rows.appendChild(createNewItem(firstDescription, secondDescription));
        cleanInput(firstInput);
        cleanInput(secondInput);
    }
    if (rows.children.length === 1) setup();

}

let cleanInput = (input) => {
    input.value = "";
}

let setup = () => {
    let rows = document.getElementsByClassName("rows");
    let size = rows[0].children.length;
    let calculatePrice = document.getElementById("calc-prices-button");
    let divResult = document.getElementsByClassName("result")[0];
    if (size === 1) {
        calculatePrice.style.visibility = "visible";
        divResult.hidden = false;
    } else if (size === 0) {

        calculatePrice.style.visibility = "hidden";
        divResult.hidden = true;
    }
}

function createNewItem(description, receivedValue) {

    let row = document.createElement('row');
    row.setAttribute("class", "row");

    let product = document.createElement('row');
    product.setAttribute("class", "product");
    let spanDescrition = document.createElement('span');
    spanDescrition.innerHTML = description;
    product.appendChild(spanDescrition);
    row.appendChild(product);

    let valueitem = document.createElement('row');
    valueitem.innerHTML = "$";
    let value = document.createElement('span');
    value.setAttribute("class", "valueitem");
    value.innerHTML = receivedValue;
    valueitem.appendChild(value);
    row.appendChild(valueitem);

    let amount = document.createElement('row');
    amount.setAttribute("class", "amount");
    let label = document.createElement('label');
    label.setAttribute("for", "quantity");
    label.innerHTML = "QTY";
    amount.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute("class", "quantity");
    input.setAttribute("type", "number");
    input.setAttribute("name", "quantity");
    amount.appendChild(input);
    row.appendChild(amount);

    let totalperproduct = document.createElement('row');
    totalperproduct.innerHTML = "$";
    let spanDetails = document.createElement('span');
    spanDetails.setAttribute("class", "totalperproduct");
    spanDetails.innerHTML = "0.0";
    totalperproduct.appendChild(spanDetails);
    row.appendChild(totalperproduct);

    let btnDelete = document.createElement('button');
    btnDelete.setAttribute("class", "btn btn-delete");
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", deleteRow);
    row.appendChild(btnDelete);
    return row;

}


window.onload = function() {
    setup();
    let createButton = document.getElementsByClassName("btn-create")[0];
    createButton.onclick = createNewRow;
    let calculatePriceButton = document.getElementById("calc-prices-button");
    calculatePriceButton.onclick = getTotal;
};