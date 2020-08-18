// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  // console.log(price)
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity)
  const subtotal = Number(price)*Number(quantity);
  // console.log(subtotal)
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

}

function calculateAll() {
let total = 0;

  const allProducts = document.querySelectorAll('.product').forEach(function(product){
    total += updateSubtotal(product);
    return total 
  })

  // ITERATION 2
 

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total ;
  

};


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productArray = document.querySelector('tbody')
  productArray.removeChild(target.parentNode.parentNode);
}

  const removeBtn = document.querySelectorAll('.btn-remove') 
  for (let btn of removeBtn) {
  console.log(btn)
  btn.addEventListener('click', removeProduct)
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