// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = product.querySelector('.subtotal span')
  let sub = price * quantity;
  subTotal.innerHTML = sub
  return subTotal
}

function calculateAll() {
  
  // console.log(products);

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 
  const products = document.querySelectorAll('.product')
  products.forEach((product) => updateSubtotal(product))
  //... your code goes here

  // ITERATION 3
  const allSubTotal = document.querySelectorAll('.product .subtotal span')
  let sum = 0;
  const totalValue = document.querySelector("#total-value span")
  allSubTotal.forEach((oneTotal) => sum += +oneTotal.innerHTML)
  totalValue.innerText = sum;
 
}

// ITERATION 4

function removeProduct(event) {
  //Hiiiii TA!!! I don't know what I did wrong... It removes the product but I don't get the green thing.. It removes the project and it recalculates the total. I think I didn't understand the assisment correct 
  const target = event.currentTarget.parentNode.parentNode
  target.remove()
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn-remove');
 
  removeBtns.forEach((btn) =>{
    btn.addEventListener('click', removeProduct)
  })

 


  //... your code goes here
});
