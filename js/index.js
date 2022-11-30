// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  const subTotalElm = product.querySelector('.subtotal span');
  subTotalElm.innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  /*** You need to select all the products that you have in the document and execute the function for every single one of them*/
  let subTotals = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(element => {
    subTotals += updateSubtotal(element);
  });
  //console.log(subTotals);

  // ITERATION 3
  /*** You need to display the total on the end off your cart*/
  const grandTotal = document.querySelector('#total-value span');
  grandTotal.innerHTML = subTotals;
}

// ITERATION 4
/*** You need to apply the event listeners to the buttons and create the functions to remove the whole row. We have a property that is .parentNode that you can call multiple times on the same element*/
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  // no idea..

  
}

// ITERATION 5
/*** You should create a new product dynamically, remember to get the information from the inputs like the name and the price and you also will create a new delete button that needs functionality*/
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const btnElements = document.querySelectorAll('button');
  //console.log(btnElements.length);
  
  let allRemoveBtns = '';
  const findBtns = Array.from(btnElements, function (element, index) {
    //console.log(element);
    allRemoveBtns = [...document.getElementsByClassName('btn-remove')];
  });
  //console.log('*** GOING IN CIRCLES HERE ***');
  //console.log(allRemoveBtns);
  const removeBtn = allRemoveBtns.forEach((elm) => {
    elm.addEventListener("click", (e) => {
        console.log(e.target);
    });
  });
  //console.log('*** GETTING SOMEWHERE ***');
});
