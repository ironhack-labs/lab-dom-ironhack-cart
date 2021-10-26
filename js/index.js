// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity
  //set the subtotal inner html to the sub total value
  product.querySelector(".subtotal span").innerHTML = subTotal

  return subTotal
}

updateSubtotal(document)

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 
    let runningTotal = 0
    const products = Array.from(document.querySelectorAll(".product"))
    products.forEach(product => {
      console.log(product)
      runningTotal += updateSubtotal(product)
    })

  // ITERATION 3
  // put total into the total-value html
  document.querySelector("#total-value").innerHTML = `Total: $${runningTotal}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const child = target.parentNode.parentNode;
  const parent = target.parentNode.parentNode.parentNode;

  parent.removeChild(child);

  calculateAll();
}



// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  const newProduct = document.querySelector('.create-product')
    newProduct.addEventListener('click', createProduct)
});
