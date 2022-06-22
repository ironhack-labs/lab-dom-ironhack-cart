// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let quantity = product.querySelector('.quantity input').value;
  let price = product.querySelector('.price span').innerText;
  // let totalvalue = document.querySelector("#total-value span").innerText;
  let subTotal = 0;
subTotal = (quantity * price).toFixed(2); //toFixed returns String!
 
product.querySelector('.subtotal span').innerHTML = `${subTotal}`

return subTotal;

}

function calculateAll() {
  let total = 0;

  console.log(document.querySelectorAll(".product"));
  document.querySelectorAll(".product").forEach ((element) => {
    total +=  Number(updateSubtotal(element));
  })

  document.querySelector('#total-value span').innerHTML = `${total}`

}

// ITERATION 4

function removeProduct(event) {
  // target.parentElement.remove(); -->td  // parent*2 --> tr
  event.currentTarget.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(element => element.addEventListener('click', removeProduct));
});

