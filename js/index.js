// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  //console.log(price)
  //console.log(quantity)
  let subTotalPrice = price * quantity
  //console.log(subTotalPrice)
  let updateSub = product.getElementsByClassName('subtotal')[0];
  updateSub.innerHTML = subTotalPrice;
  return subTotalPrice;
}

  // ITERATION 2
  function calculateAll(){
    const products = document.getElementsByClassName('product')
    const productsArr = [...products];
    let total = 0;
    productsArr.forEach(element => {
      total += updateSubtotal(element)
    });
    console.log(total)
    
  // ITERATION 3
    let totNum = document.querySelector('#total-value span')
    totNum.innerHTML = total
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
})