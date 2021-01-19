// ITERATION 1

let subTotalArr = [];
const total = document.querySelector('#total-value span');

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const totalSubtotal = price * quantity;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = totalSubtotal;
  subTotalArr.push(totalSubtotal);

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  subTotalArr = [];
  // ITERATION 2
  //... your code goes here
  
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => updateSubtotal(product));

  // ITERATION 3
  //... your code goes here
  const totalPrice = subTotalArr.reduce(function(num1,num2){
    return num1 + num2 
  })

  
  total.innerHTML = totalPrice;
  
}



// ITERATION 5

function createProduct() {
  //... your code goes here

  let element = document.createElement('tr');
  element.className = "product";
  element.innerHTML = '<td class="name"><span></span></td><td class="price">$<span></span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span></span></td><td class="action"><button class="btn btn-remove">Remove</button></td>';
  const parent = document.querySelector('#cart tbody');
  
  const newProductName = document.getElementById('newName').value;
  const newProductPrice = document.getElementById('newPrice').value;
  
  element.querySelector('.name span').innerText = newProductName;
  element.querySelector('.price span').innerText = newProductPrice;

  element.querySelector('.btn.btn-remove').addEventListener('click', removeProduct)

  parent.appendChild(element);

  document.getElementById('newName').value = '';
  document.getElementById('newPrice').value = '';

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  //... your code goes here
  

  const productElemt = target.parentElement.parentElement;
  const parentProductElements = target.parentElement.parentElement.parentElement;
  parentProductElements.removeChild(productElemt);
  const removedValue = productElemt.querySelector('.subtotal span').innerHTML;

  total.innerHTML = total.innerHTML - removedValue;
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => button.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  
});
