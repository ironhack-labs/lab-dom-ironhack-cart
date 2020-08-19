// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey', product);
  
  //... your code goes here
  const price = product.querySelector('.price span');
  // console.log(price);
  const quantity = product.querySelector('.quantity input');
  // console.log(price);
  // console.log(quantity);
  const calculate = price.innerHTML * quantity.value;
  // console.log(calculate);
  return (product.querySelector('.subtotal span').innerHTML = calculate);
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // below is var for tr
  let total = 0;
  const singleProduct = document.querySelectorAll('.product');
  console.log(singleProduct)
  
  singleProduct.forEach(element => {
    // console.log(" this is the element", element);
   total += updateSubtotal(element);
   console.log(total);
   
  })
  document.querySelector('#total-value span').innerHTML = total;
  // end of test

  // ITERATION 2
  //... your code goes here
// const everyProduct = document.querySelectorAll('.product');
// console.log(everyProduct)
// updateSubtotal(everyProduct);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const tbody = document.querySelector("tbody");
  console.log(tbody)
  console.log(target);
  tbody.removeChild(target.parentNode.parentNode);
}

// ITERATION 5
// product name customizable and the unit price
// create button will push its price to calculateAll
function createProduct() {
  // access to inputs for name and price
  const createInput = document.querySelectorAll('.create-product input')[0].value;
  const createPrice = document.querySelectorAll('.create-product input')[1].value;
  console.log(createPrice)
  // clone product row 
  const parent = document.querySelector('tbody');
  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
  newProduct.querySelector('.name span').innerHTML= createInput;
  console.log(newProduct.querySelector('.price').innerHTML)
  newProduct.querySelector('.price span').innerHTML = createPrice;
  newProduct.querySelector('.quantity').innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />` 
  newProduct.querySelector('.subtotal').innerHTML = `$<span>0</span>`
  newProduct.querySelector('.action').innerHTML = `<button class="btn btn-remove">Remove</button>`
  console.log(newProduct);
  parent.appendChild(newProduct)
//  remove new row 
  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let btn of removeBtn){
   btn.addEventListener('click', removeProduct);
  }

  
  // copy the parents node
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll('.btn-remove');
 for (let btn of removeBtn){
  btn.addEventListener('click', removeProduct);
 }
  //... your code goes her
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
  // console.log(createBtn);
  
});
