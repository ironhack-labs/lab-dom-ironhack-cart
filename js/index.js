// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerHTML;
	const quantity = product.querySelector(`.quantity input`).value;
	const subtotalAmount = price * quantity;
	const subtotal = (product.querySelector(`.subtotal span`).innerHTML = subtotalAmount);
	return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProd = document.querySelectorAll('.product');
  allProd.forEach((product)=>{
    updateSubtotal(product);
  })

  // ITERATION 3
  const totalAmount = [...allProd].reduce((accum, val) => {
    return accum + updateSubtotal(val)},0);
    const total = document.querySelector(`#total-value span`);
    total.innerHTML = totalAmount;
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
