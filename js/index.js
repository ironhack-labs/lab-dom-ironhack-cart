// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //this takes only one product. we have to make a loop to calculateAll() function

  //... your code goes here
  //create two variables (we suggest naming them price and quantity) 
  //and use your just gained DOM manipulation skills to GET DOM elements that hold price and quantity. 
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = parseFloat(price.innerText) * quantity
  return parseInt(price.innerText) * quantity;

  
  //console.log(subtotal)
  // console.log(price)
  // console.log(quantity)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  var elements = document.querySelectorAll('.product');
  /*the element is now an array. So.... we call the updateSubtotal for every element
  of the array*/
  console.log(elements)
  let total =0;
  for(element of elements){
    total += updateSubtotal(element)
    
  }
    //now we have to calculate the total
    //.log(total)
    const totals = document.querySelector('#total-value span');
    totals.innerText = total
    

  

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
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
