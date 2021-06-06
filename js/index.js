// ITERATION 1


function formatNumbers(num) {
  if (num < 10) { return num }
  else { return num.toFixed(2) }
};

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity input").value
  let subTotalElement = product.querySelector(".subtotal span");
  let subTotalProduct = price * quantity;
  subTotalElement.innerHTML = formatNumbers(subTotalProduct);

  return subTotalProduct;


  // Apparently 6 * 10.95 = 65.69999999? 
}


// ITERATION 3
//... your code goes here

function calculateAll() {

  const productArr = document.querySelectorAll(".product");
  let totalSum = 0;
  for (let i = 0; i < productArr.length; i++) {
    totalSum += updateSubtotal(productArr[i])
  }
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = formatNumbers(totalSum);



}



// ITERATION 4

function removeProduct(event) {
  let parent = document.querySelector("#cart tbody")
  const target = event.currentTarget;
  let td = target.parentNode;
  let tr = td.parentNode;
  parent.removeChild(tr);
  calculateAll();
}

// ITERATION 5

// Hint: Clone Node 



/// THE LONG WAY

function createProduct() {
  let newProductName = document.querySelector(".create-product td:nth-child(1) input").value;
  let newProductPrice = document.querySelector(".create-product td:nth-child(2) input").value;
  let nPrPrFormat = newProductPrice + ".00";
  let parent = document.querySelector("#cart tbody");

  // Create ROW 

  let row = document.createElement('tr');
  row.setAttribute("class", "product");

  // FIRST CELL -- Name

  let nameColumn = document.createElement('td')
  let nameSpan = document.createElement('span');
  nameSpan.innerHTML = newProductName;
  nameColumn.setAttribute('class', 'name');
  nameColumn.appendChild(nameSpan)

  // SECOND CELL -- Price 

  let priceColumn = document.createElement('td');
  priceColumn.setAttribute('class', 'price');
  priceColumn.innerHTML = '$'
  let priceSpan = document.createElement('span');
  priceSpan.innerHTML = nPrPrFormat;
  priceColumn.appendChild(priceSpan);

  // THIRD CELL -- Quantity

  let quantityColumn = document.createElement('td');
  quantityColumn.setAttribute('class', 'quantity');
  let quantityInput = document.createElement('input');
  quantityInput.min = "0";
  quantityInput.type = "number";
  quantityInput.value = "0";
  quantityInput.placeholder = "Quantity";
  quantityColumn.appendChild(quantityInput);


  // FOURTH CELL -- Subtotal

  let subtotalColumn = document.createElement('td');
  subtotalColumn.setAttribute('class', 'subtotal');
  subtotalColumn.innerHTML = '$';
  let subtotalSpan = document.createElement('span');
  subtotalSpan.innerHTML = '0';
  subtotalColumn.appendChild(subtotalSpan);



  // FIFTH CELL -- Remove Button

  let removeColumn = document.createElement('td');
  removeColumn.setAttribute('class', 'action');
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = "Remove";
  removeBtn.setAttribute('class', 'btn btn-remove');
  removeBtn.addEventListener('click', removeProduct)
  removeColumn.appendChild(removeBtn);


  row.appendChild(nameColumn);
  row.appendChild(priceColumn);
  row.appendChild(quantityColumn);
  row.appendChild(subtotalColumn);
  row.appendChild(removeColumn);
  parent.appendChild(row);


}


// THE SHORTER WAY 

function createProductQuick (){


  
}






window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName("btn btn-remove")
  for (let i = 0; i < removeBtns.length; i++) { removeBtns[i].addEventListener("click", removeProduct) }

  const createProductBtn = document.getElementById("create")
  createProductBtn.addEventListener("click", createProduct)
});
