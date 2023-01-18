// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('input').value

  let subtotalPrice = price * quantity
  
  let subTotal = product.querySelector('.subtotal span')
subTotal.innerHTML = subtotalPrice

return subtotalPrice
}


function calculateAll() {
/*   // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2 & 3
  const allProducts = document.querySelectorAll('.product')
  let sum = 0
  allProducts.forEach(function(element) {
  sum+= updateSubtotal(element)
  });

  let total = document.querySelector('h2 span')
total.innerHTML = sum

    return sum
  
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
  
  calculateAll()

}

// ITERATION 5

function createProduct(event) {
const inputText = document.querySelector("input").type
const value = document.querySelector("input").value



}

/* function addTodo() {
  console.log("add todo")

  const input = document.querySelector("input")
  const value = input.value
  console.log(value)

  const todo = document.createElement("li")
  todo.innerText = value
  todo.addEventListener("click", toggleTodo)

  console.log(todo)

  const list = document.querySelector("ul")
  list.appendChild(todo)

  input.value = ""
 */

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  removeBtn.forEach(function(button){
    button.addEventListener('click', removeProduct)

    const createBtn = document.getElementById('create')
    createBtn.addEventListener('click', createProduct);
  })  
 
});
