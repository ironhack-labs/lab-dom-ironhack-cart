// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value)
  const subtotal = product.querySelector('.subtotal span')

  let totalPrice = price * quantity

  subtotal.innerHTML = totalPrice
}

function calculateAll() {
  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach((singleProduct) => {
    updateSubtotal(singleProduct);
  })

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let subtotals = document.querySelectorAll('.subtotal span')

  let netTotal = [...subtotals].reduce((totalValue, currValue) => {
    return (totalValue += parseFloat(currValue.innerHTML))
  },0)

  total.innerHTML = netTotal

//You need to return totalprice from updateSubtotal()
    // let total = 0;
    // const products = document.getElementsByClassName('product');
  
    // for (let i = 0; i < products.length; i++) {
    //   total = total + updateSubtotal(products[i]);
    // }
  
    // document.querySelector('#total-value span').innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  console.log(event.currentTarget.parentNode.parentNode)
  //... your code goes here
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  let name = document.querySelector('.newName').value
  let price = document.querySelector('.newPrice').value
  let quantity = document.querySelector('.newQuantity').value
  let subtotal = updateSubtotal()

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove')

  removeBtns.forEach((eachRmvBtn) => {
    eachRmvBtn.addEventListener('click', removeProduct);
  })
  
  const createAProduct = document.getElementById("create")
  createAProduct.addEventListener('click', createProduct);

});
