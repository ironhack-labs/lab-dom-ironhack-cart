// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTotal = product.querySelector('.subtotal span');

  const subTotalCal = price * quantity;
  console.log(subTotalCal);
  subTotal.textContent = subTotalCal;

    console.log(price);
    console.log(quantity);
    console.log(subTotal);
    console.log(subTotalCal);

  return subTotalCal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  //  end of test
  // ITERATION 2
  const productsAll = document.getElementsByClassName('product')
  const productsArr = [...productsAll]
  let totalAllPrices = 0

  productsArr.forEach(productObj => {
    totalAllPrices += updateSubtotal(productObj);
  })

  // ITERATION 3

  let totalSpan = document.querySelector('#total-value span')
 
  totalSpan.textContent = totalAllPrices
  console.log(`totalSpan es ${totalSpan}`);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

let button = document.getElementById("add-item-button");
 
button.onclick = function(){
  console.log("adding an element to the list");
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
