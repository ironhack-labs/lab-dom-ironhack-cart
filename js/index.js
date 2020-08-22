// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  product.querySelector(".subtotal").innerHTML = subtotal

  return subtotal
  //... your code goes here
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product")
  allProducts.forEach(elm => updateSubtotal(elm));

  // ITERATION 3
  let total = 0
  allProducts.forEach(elm => {
    let totalList = elm.querySelector(".subtotal").innerHTML
    total += parseFloat(totalList)
  });
  const totalBill = document.querySelector("#total-value span")
  totalBill.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const cartList = document.querySelector(".cartList")
  const productRemoved = target.parentNode.parentNode
  cartList.removeChild(productRemoved)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector("create-name").innerHTML
  const price = document.querySelector("create-name").innerHTML

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(elm => elm.onclick = removeProduct);

  const createBtn = document.querySelector("#create")
  createBtn.addEventListener('click', createProduct)
});
