// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let total = quantity.value * price.innerText;
  let totalHTML = product.querySelector('.subtotal span');
  totalHTML.innerText = total;
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  const multipleProducts = document.getElementsByClassName("product");
  for (let i = 0; i < multipleProducts.length; i++) {
    total += updateSubtotal(multipleProducts[i]);
  }

  
  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const elementRemove = target.parentNode.parentNode;
  elementRemove.remove();
}

// ITERATION 5

function addLine(name, cost){
  let table = document.getElementById('cart');
  let line, cell, input;

  // Defining a line of the Table
  line = document.createElement('tr');
  line.setAttribute("class", "product");
 
  //First Cell
  cell = document.createElement('td');
  cell.setAttribute("class", "name");

  input = document.createElement('span');
  input.innerText = name

  cell.appendChild(input);
  line.appendChild(cell);

  // Second Cell
  cell = document.createElement('td');
  cell.innerText = "$";
  cell.setAttribute("class", "price");


  input = document.createElement('span');
  input.innerText = parseFloat(cost).toFixed(2);


  cell.appendChild(input);
  line.appendChild(cell);

  // Third Cell
  cell = document.createElement('td');
  cell.setAttribute("class", "quantity");

  input = document.createElement('input');
  input.setAttribute("type", "number");
  input.setAttribute("min", "0.00");
  input.value = 0;


  cell.appendChild(input);
  line.appendChild(cell);

  // Fourth Cell
  cell = document.createElement('td');
  cell.innerText = "$"
  cell.setAttribute("class", "subtotal");
  input = document.createElement('span');
  input.innerText = 0;

  cell.appendChild(input);
  line.appendChild(cell);
  
  // Fith Cell
  cell = document.createElement('td');
  cell.setAttribute("class", "action");

  input = document.createElement('button');
  input.innerText = "Remove";
  input.setAttribute("class", "btn btn-remove");
  input.addEventListener('click', removeProduct)

  cell.appendChild(input);
  line.appendChild(cell);

  console.log(line);
  table.appendChild(line);

}


function createProduct() {
  //... your code goes here
  const newProduct = document.getElementsByClassName("create-product");
  let productName = newProduct[0].querySelectorAll('td input')[0];
  let productValue = newProduct[0].querySelectorAll('td input')[1];


  if (productName.value !== "" && productValue.value !== ""){
    console.log(productName.value + " and costs " + productValue.value);

    let newLine = document.createElement('h3');
    addLine(productName.value, productValue.value);

    productName.value = "";
    productValue.value = "";
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.action .btn.btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
   removeButtons[i].addEventListener('click', removeProduct);
  }

  const addProductButton = document.getElementById("create");
  addProductButton.addEventListener('click', createProduct)
});
