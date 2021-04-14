// ITERATION 1

function updateSubtotal(product) {
  //ITERATION 1
  const price = product.querySelector('.price span').innerHTML //find "price" in html doc and form this take only the inner HTML
  const quantity =  product.querySelector('.quantity input').value //find "quantity" in html doc and from this take only the value
  
  const subtotal = price * quantity //calculate subtotal
  
  const subtotalHolder = product.querySelector('.subtotal span') //find where the subtotal must go

  subtotalHolder.innerText = subtotal //add the subtotal to the subtotal holder

  return subtotal
}

function calculateAll() {
//ITERATION 2

  const products = [...document.querySelectorAll('.product')]; //create an array of products
  /* products.forEach((product) => updateSubtotal(product)); */ //iterate over the products to make the subtotal

//ITERATION 3
  let total = 0; //set total to 0
  products.forEach(product => total += updateSubtotal(product))//iterate the products and sum the subtotal to the total

  const totalHolder = document.querySelector("#total-value span") // fund where the total must go
  totalHolder.innerText = total // at the total at the total holder
}

// ITERATION 4

function removeProduct(event) {
 
  event.target.parentNode.parentNode.remove() //ESTA MAL: no entiendo porque me borra el producto tambien si pincho quantity

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = [...document.querySelectorAll('.btn-remove')];
  removeBtns.forEach((btn) => addEventListener('click',removeProduct))
});
