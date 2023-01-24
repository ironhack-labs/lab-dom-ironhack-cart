// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  
  let valueNumber = quantity.value;
  

  let subtotal = valueNumber * price.textContent;
  console.log(subtotal);

  let subtotalAmount = product.querySelector('.subtotal span');
  subtotalAmount.innerHTML = subtotal;
  return subtotal;
  
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);  */
   //end of test

let products = document.getElementsByClassName('product');
let total = 0;

for (let i = 0; i < products.length; i++){
  total += updateSubtotal(products[i])
}

document.querySelector('#total-value span').innerHTML = total;

  }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  let parent = target.parentNode.parentNode.parentNode;;
  let children = target.parentNode.parentNode;

parent.removeChild(children);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  let newProductline = document.createElement('tr');

  let createProduct = document.querySelectorAll('.create-product input');
  let createProductName = createProduct[0].value;
  let createProductPrice = createProduct[1].value;

  newProductline.innerHTML = `<td class="name">
  <span>${createProductName}</span>
</td>
<td class="price">$<span>${createProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

newProductline.classList.add('product');

let potitioningTR = document.querySelector('tbody');
potitioningTR.appendChild(newProductline)





}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  
  let removeButton = document.querySelectorAll('.btn-remove')

  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
}

let createbuttonfinal = document.getElementById('create');
createbuttonfinal.addEventListener('click', createProduct);

});
