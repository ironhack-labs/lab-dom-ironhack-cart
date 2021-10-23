// ITERATION 1

function updateSubtotal(product) {


  console.log('Calculating subtotal, yey!');

  let total_price =0;
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  total_price=(quantity.value*price.textContent)
  product.querySelector(".subtotal span").textContent = total_price
}

function calculateAll() {  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.i');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  let products = [...document.getElementsByClassName("product")]
  let total = 0;
  products.forEach(products => {
    updateSubtotal(products)
    {
      total += parseFloat(products.querySelector(".subtotal span").textContent) 
    }

  });

  
  // ITERATION 3
 document.querySelector("#total-value span").textContent = total}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
//... your code goes here
  const parent = target.parentNode.parentNode
  parent.parentNode.removeChild(parent)
  calculateAll()
  

}

// ITERATION 5

function createProduct() {
  
  const productName = document.querySelector(".create-product input[type='text']")
  const unitPrice = document.querySelector(".create-product input[value='0']")

  const clone = document.querySelector(".product").cloneNode(true)
  document.querySelector("tbody").appendChild(clone)
  clone.querySelector('.name').textContent = productName.value
  clone.querySelector('.price span').textContent = unitPrice.value
  productName.value = ""
  unitPrice.value = 0
  //... your code goes here
}

window.addEventListener('click', () => {
  //Calculate price
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Remove Items
  const removeItemsBtn = document.querySelectorAll('.product .action button')
  removeItemsBtn.forEach(removeItemsBtn => {
    removeItemsBtn.addEventListener('click',removeProduct)
  });
  const createItemBtn = document.querySelector('.create-product button')
  createItemBtn.addEventListener('click',createProduct)

});
