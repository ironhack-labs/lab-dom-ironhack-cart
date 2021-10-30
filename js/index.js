// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //getting dom elements needed
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //extracting
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  //total value
  const subtotalValue = priceValue * quantityValue;
  
  //I will inject you 
  const subTotal = product.querySelector('.subtotal span');

  //the insides of subTotal will be the contents in subtotalValue 
  subTotal.innerText = subtotalValue;

  return subtotalValue;
 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //getting dom for the products
  const allProducts = document.getElementsByClassName('product');

  //logging allProducts -> get html collection
  //console.log('the products are:', allProducts);

//turning html collection into an array
  let productsArray = [...allProducts];
  //console.log(allProducts);
  productsArray.forEach(updateSubtotal);

  // ITERATION 3
 const total = document.querySelector('#total-value span');
 //console.log(total.innerHTML);

 let totalPrice = 0;
 for(let i =0; i< productsArray.length; i++) {
  let prod = productsArray[i].querySelector('.subtotal span');
   totalPrice += +(prod.innerHTML);
 }
 total.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  //const target = event.currentTarget;
  //console.log('The target in remove is:', target);
 
  const target = event.currentTarget.parentNode.parentNode;
  console.log('the target in remove is:', target);

  let deletedProduct = target.parentNode.removeChild(target);

  calculateAll(); 

}

// ITERATION 5

function createProduct() {
  console.log('new product');
  const newProductInput = document.querySelector('.newProduct');
  const productPrice = document.querySelector('.newPrice').value;
console.log('product price', productPrice)

}

 function checkButton() {
  const removeProductButtons = document.getElementsByClassName('.btn-remove');
  let removeProductBtns = [...removeProductButtons];

  removeProductBtns.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct); 
} 

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  checkButton();
});
