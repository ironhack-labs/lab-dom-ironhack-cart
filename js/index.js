// ITERATION 1

//const { ConsoleMessage } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceSpan = product.querySelector('.price span');
  let price = priceSpan.innerHTML;
  let quantityInput = product.querySelector('.quantity input');
  let quantity = quantityInput.value;
  let subtotal = product.querySelector('.subtotal span');
  
  let totalPriceByArticle = quantity * price;
  subtotal.innerHTML = totalPriceByArticle;
  
  return totalPriceByArticle;

}


function calculateAll() {

  const allProducts = document.getElementsByClassName('product');
  // ITERATION 2
  let values = [];
  for (product of allProducts ){
    
    
      values.push(updateSubtotal(product));
    
    
    console.log(values)
  }
  

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let acc = 0;
  for(element of values){
    acc += element;
  }
  
  
  total.innerHTML = acc ;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let dlt = target.parentNode.parentNode;
  
  if(dlt.parentNode){
    dlt.parentNode.removeChild(dlt);
    
  }
  calculateAll();
}

// ITERATION 5

let createBtn = document.getElementById('create');


function clearInputs(input1,input2){
  input1.value = '';
  input2.value = '';
}
function createProduct() {
  let inputs = document.querySelectorAll('.create-product input');
  
  let inputProduct = inputs[0];
  let inputPrice = inputs[1];
  
  let newProduct = inputProduct.value;
  let newProductPrice = inputPrice.value;
  
  let table = document.querySelector('tbody');
  let newRow = document.createElement('tr');
  newRow.className = 'product';

  newRow.innerHTML = 
  `
  <td class="name">
    <span>${newProduct}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

const btn = newRow.querySelector('.btn.btn-remove');
btn.addEventListener('click', removeProduct);
calculateAll(newRow);



table.appendChild(newRow);

clearInputs(inputProduct, inputPrice);


}

createBtn.addEventListener('click', createProduct)


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtns = document.querySelectorAll('.btn.btn-remove');

  for(btn of removeBtns){

    btn.addEventListener('click', removeProduct);
  }
});
