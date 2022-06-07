// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price =  product.querySelector('.price span').innerHTML 
  let quantity = product.querySelector('.quantity input').value;
  let productSum = price * quantity
  product.querySelector('.subtotal span').innerHTML = productSum;
  console.log(productSum)
  return productSum;
  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
    let productList = document.querySelectorAll('.product')
    let total = 0;
    console.log(productList)
    for(let el of productList) {
      let subTotal = updateSubtotal(el)
      console.log(subTotal)
      total += subTotal
    }
    console.log(total)
    document.querySelector('#total-value span').innerHTML = total;


  // ITERATION 3
  
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
});
