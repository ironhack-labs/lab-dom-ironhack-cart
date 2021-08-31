// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let arrSumTot = [];
  for (let i = 0; i < product.length; i++) {
    const price = product[i].querySelector('.price span');
    const quantity = product[i].querySelector('.quantity input');
    const subtotal = product[i].querySelector('.subtotal span');
    let priceNum = parseFloat(price.innerHTML);
    let quantityNum = parseFloat(quantity.value);
    let subTotalNum = priceNum * quantityNum;
    arrSumTot.push(subTotalNum);
    subtotal.innerHTML = `${subTotalNum}`
  }
  return arrSumTot;
} 

function calculateAll() {

  // ITERATION 2
  //... your code goes here
  let multiProduct = document.getElementsByClassName('product');
  // console.log(multiProduct);

  // ITERATION 3
  //... your code goes here
  let arrResultTotal = updateSubtotal(multiProduct);
  let sumTotal = 0;
  for (let i = 0; i < arrResultTotal.length; i++) {
    sumTotal += arrResultTotal[i];
  }
  const total = document.querySelector('#total-value span')
  total.innerHTML = `${sumTotal}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(event)
  console.log('The target in remove is:', target);
  //... your code goes here
  let node = document.querySelector(".product");
  // console.log(node);
  if (node.parentNode) {
  node.parentNode.removeChild(node);
}


  // let deleteProduct = document.querySelector('.product');
  // while (deleteProduct.firstChild) {
  //   deleteProduct.removeChild(deleteProduct.firstChild)
  // }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const btnRemove = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', removeProduct)
  }
});
