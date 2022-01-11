// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //... your code goes here
  let priceElement = document.getElementsByClassName("price");
  let quantityElement = document.getElementsByClassName("quantity");
  let subtotalElement = document.getElementsByClassName("subtotal");

  let priceValue = [];
  let quantityValue = [];
  //let subtotalValues = [];
  let subtotal = 0;

  for (let i = 0; i < priceElement.length; i++) {
      priceValue.push(priceElement[i].innerText.slice(1));
      quantityValue.push(quantityElement[i].getElementsByTagName("input")[0].value);
      let subtotal = Number(priceValue[i]) * Number(quantityValue[i]);
      //subtotalValues.push(subtotal);
      subtotalElement[i].innerText  = subtotal;
    }

  subtotalElement.innerText = subtotal;
  
}

function calculateAll(array) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here

  let subtotalElement = document.getElementsByClassName("subtotal");
  let total = 0;

  for (let i = 0; i < subtotalElement.length; i++) {
    total += Number(subtotalElement[i].innerText);
  }
  let totalElement = document.getElementById("total-value");
  totalElement.getElementsByTagName("span")[0].innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.currentTarget.parentElement.parentElement.innerHTML = "";
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  //1 create html structure
  let tr = document.createElement('tr');
  tr.classList.add("product");
  let td = document.createElement('td');
  td.classList.add("name");
  let span = document.createElement('span');
  span.innerHTML = "new product";
  td.appendChild(span);

  let tdprice = document.createElement('td');
  tdprice.classList.add("price");
  let spanprice = document.createElement('span');
  spanprice.innerHTML = "20";
  tdprice.appendChild(spanprice);

  let tdquantity = document.createElement('td');
  tdquantity.classList.add("price");
  let inputuantity = document.createElement('input');
  inputuantity.innerHTML = "1";
  tdquantity.appendChild(inputuantity);

  document.body.appendChild(tr, td, tdprice, tdquantity);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
