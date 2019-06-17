let totalRows = document.getElementsByClassName("row");

let getUnitPrices = document.getElementsByClassName("unit-price");
let getQtyInputs = document.getElementsByClassName("qty-input");
let getTotalPrices = document.getElementsByClassName("total-price");

function calculatePrices() {
  let total = 0;

  for(let i = 0; i < totalRows.length; i++) {
    const unitPrice = parseFloat(getUnitPrices[i].innerText.split("$")[1]);
    const qty = parseInt(getQtyInputs[i].value);

    const totalProduct = unitPrice * qty;
    total += totalProduct;

    getTotalPrices[i].innerText = `$${totalProduct}.00`
    
    renderTotal(total)
  }
}

function renderTotal(total) {
  let totalText = document.getElementById("total-text");
  totalText.innerText = `Total Price: $${total}.00`
}

function deleteRow(button) {
  button.parentElement.parentElement.remove();
}

function createRow() {
  let container = document.getElementById('items-container');

  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;

  if(!productName || !productPrice) {
    return
  }

  const row = document.createElement('div');
  row.classList.add('product-container');
  row.classList.add('row');

  const col1 = document.createElement('div');
  const spanName = document.createElement('span');
  spanName.innerText = productName;
  col1.appendChild(spanName);

  const col2 = document.createElement('div');
  const spanPrice = document.createElement('span');
  spanPrice.classList.add("unit-price");
  spanPrice.innerText = `$${productPrice}.00`
  col2.appendChild(spanPrice)

  const col3 = document.createElement('div');
  const label = document.createElement('label');
  label.innerText = 'QTY';
  const input = document.createElement('input');
  input.classList.add("qty-input");
  input.setAttribute("type", "number");
  input.setAttribute("value", "0");
  input.setAttribute("min", "0");
  col3.appendChild(label);
  col3.appendChild(input);

  const col4 = document.createElement('div');
  const totalSpan = document.createElement('span');
  totalSpan.classList.add("total-price")
  totalSpan.innerText = "$0.00";
  col4.appendChild(totalSpan);

  const col5 = document.createElement('div');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add("btn-delete");
  deleteButton.classList.add("btn");
  deleteButton.id = "btn-delete";
  deleteButton.setAttribute("onclick", "deleteRow(this)");
  deleteButton.innerText = "Delete";
  col5.appendChild(deleteButton);


  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  container.appendChild(row);
}
