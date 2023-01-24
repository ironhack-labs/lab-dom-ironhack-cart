function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = product.querySelector('.price span').innerHTML; //get price from direct child spans from class price.
  //.innerHTML let's you access the content inside the span.

  let quantity = product.querySelector('.quantity input').value; // get quantity from direct child input from class quantity.
// You can access the attributes of the element with dot notation, or with the get Attributes
  let subtotal = price * quantity; 

  let subTotalPrice =  product.querySelector('.subtotal span') // Select span inside subtotal class.
  subTotalPrice.innerHTML = subtotal; // use innerHTML to change the value of the selected content.
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  // ITERATION 3
  //... your code goes here
  let getProduct = document.getElementsByClassName('product');
  let total = 0;
/*   let getSubtotal = document.querySelector('.product .subtotal');
  let getProductName = document.querySelector('.name span').innerHTML; */
  
  for (let i = 0; i < getProduct.length; i++) {
    total += updateSubtotal(getProduct[i]);
  }
  document.querySelector('#total-value span').innerHTML = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  //... your code goes here
/*   let getRemove = getElementsByClassName('btn-remove'); // Get an array-like object with all remove btns.

  for (let i = 0; i < getRemove.length; i++) { // loop through all the remove btns
    let addEvent = getRemove[i].addEventListener('click', removeProduct); // Add a click event to each remove btns
    //getRemove[i].onclick = removeProduct(getRemove[i]);
    let removeChild = target.getRemove.removeChild(getRemove[i]); // Remove the child
    return removeChild;
  } */
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.querySelector('.create-product input').innerHTML;
  let productValue = document.querySelector('.create-product input').value;

  let target = querySelector('#tbody');
  let add = target.createElement('tr');
  add.classList.add('product');
  add.innerHTML(productName);
  add.innerHTML(productValue);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  let removedProduct = document.querySelectorAll('.btn-remove');
  removedProduct.forEach(product => product.addEventListener('click', removeProduct));

  let createdProduct = document.querySelector('#create');
  createdProduct.addEventListener('click', createProduct);
});
