// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalSpan = product.querySelector ('.subtotal span');

  let subtotal = price.innerText * quantity.value;

  subtotalSpan.innerText = subtotal;

}

function calculateAll() {
  console.log('calculateAll');

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //console.log (singleProduct);
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  
  const products = document.querySelectorAll('.product');


  products.forEach (function (eachproducts) {
    updateSubtotal(eachproducts)
  });

  

  // ITERATION 3
  //... your code goes here

  const subTotals = document.querySelectorAll('.subtotal span');

  let resultTotal = 0;

  subTotals.forEach ( function (eachsubTotal) {
    console.log (eachsubTotal.innerHTML);
    console.log (eachsubTotal.innerText);

    resultTotal = parseInt(resultTotal)  + parseInt(eachsubTotal.innerHTML) ;

  });

  console.log (resultTotal);
  
 const totalValue = document.getElementById("total-value");
 
 totalValue.innerHTML = `Total: $<span>${resultTotal}</span> `;



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  const table = document.getElementById("cartBody");
  console.log (table);

  table.removeChild(target.parentNode.parentNode);

  calculateAll();

}

// ITERATION 5

function createProduct() {

  //... your code goes here

  ProductName = document.querySelector('.create-product input[type=text]').value;
  ProductPrice = document.querySelector('.create-product input[type=number]').value;
  const newProduct = document.createElement('tr');
  console.log(newProduct);
  newProduct.className = 'product';
  newProduct.innerHTML = 
   `<td class="name"><span>${ProductName}</span></td>
    <td class="price">$<span>${ProductPrice}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"/></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>`;

  console.log (newProduct.className);
  console.log (newProduct.innerHTML);
  
  const body = document.querySelector('tbody');
  console.log(body);

  body.appendChild(newProduct);

  const RemoveBtn = newProduct.querySelector('.btn-remove');
  RemoveBtn.addEventListener('click', removeProduct);


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteProduct = document.getElementsByClassName("btn btn-remove");
  const deleteArray=[...deleteProduct ];

  deleteArray.forEach (function ( deleteBtn) {

  deleteBtn.addEventListener('click', removeProduct);

 });

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click' , createProduct );



});
