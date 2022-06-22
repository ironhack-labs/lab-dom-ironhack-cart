// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
    const price = product.querySelector('.price span');
    const priceValue = Number(price.innerText);
  
    const quantity = product.querySelector('.quantity input');
    const quantityValue = quantity.valueAsNumber;

    const subtotal = product.querySelector(".subtotal span");
    subtotal.innerText = priceValue * quantityValue;
    
    return subtotal.innerText;
    
};


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  const productsHtmlCollection = document.getElementsByClassName("product");
  const productsArr = [...productsHtmlCollection];
  const subTotalArr = [];
  productsArr.forEach ( element => {
    subTotalArr.push(Number(updateSubtotal(element)));
  }); 

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = subTotalArr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  },0);
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  target.parentNode.removeChild(target);
  removeProduct(target);
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
