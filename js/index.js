// ITERATION 1

function updateSubtotal(product) {
  //ITERATION 1
  const price = Number(product.querySelector('.price span').innerText) //find "price" in html doc and form this take only the inner HTML
  const quantity =  Number(product.querySelector('.quantity input').value) //find "quantity" in html doc and from this take only the value
  
  const subtotal = price * quantity //calculate subtotal
  
  const subtotalHolder = product.querySelector('.subtotal span') //find where the subtotal must go

  subtotalHolder.innerText = subtotal //add the subtotal to the subtotal holder

  return subtotal
}

function calculateAll() {
//ITERATION 2

  const products = document.querySelectorAll('.product'); //create an array of products
  /* products.forEach((product) => updateSubtotal(product)); */ //iterate over the products to make the subtotal

//ITERATION 3
  let total = 0; //set total to 0
  products.forEach(product => total += updateSubtotal(product))//iterate the products and sum the subtotal to the total

  const totalHolder = document.querySelector("#total-value span") // fund where the total must go
  totalHolder.innerText = total // at the total at the total holder
}

// ITERATION 4

function removeProduct(event) {
    const removeBtn = event.target;
    removeBtn.parentNode.parentNode.remove() 

    calculateAll()
}  

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create [type="text"]').innerText;
  const productPrice = document.querySelector('.create [type="number"]').innerText;
  
 /*  const createBtn = event.target;
  const line =  createBtn.parentNode.parentNode.createElement('tr')
  line.classList.add("product")

  line.append('tbody') */

}

document.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((btn) => btn.addEventListener('click',removeProduct))

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
