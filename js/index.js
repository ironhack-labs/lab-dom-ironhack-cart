// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity =  parseInt(product.querySelector('.quantity input').value);
  let subtotal = price*quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productCollection = document.querySelectorAll('.product');
  var totalPrice=0;
  // console.log(productCollection);
  productCollection.forEach((element)=>{
    
    totalPrice += updateSubtotal(element);
    console.log(totalPrice)
  });
  console.log("Total Price: " + totalPrice)
  console.log(productCollection);
  //... your code goes here

  // ITERATION 3
  document.getElementById('total-value').innerHTML ="Total: $<span>"+totalPrice+"</span>";
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('remove', () => {
  
  const itemToRemove = document.getElementsByClassName('btn-remove');
  itemToRemove.addEventListener('click', removeProduct);

  //... your code goes here
});
