// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
    const calculateSubtotal = price * quantity;
    product.querySelector('.subtotal span').innerHTML = calculateSubtotal
    console.log(calculateSubtotal)
    return calculateSubtotal;
}

function calculateAll() {

  const calculatetotal = document.getElementsByClassName('product');
  console.log(calculatetotal)
  let total=0
    for (let i = 0; i < calculatetotal.length; i++) {
     total += updateSubtotal(calculatetotal[i]);
  }
  let totalspan = document.querySelector('#total-value span')

  totalspan.innerHTML = total

  console.log(totalspan)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

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
