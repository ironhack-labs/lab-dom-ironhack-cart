// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');

  let sum = price.innerHTML * quantity.value;
  subTotal.innerHTML = sum;
  return sum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 
  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  let sum = 0;
  for(item of products) {
    sum += updateSubtotal(item);
  }

  // ITERATION 3
  let total = document.querySelector("#total-value span" )
  total.innerHTML = sum;
  return sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputName = document.querySelector("create-product input")
  const inputValue = document.querySelector("create-product input[type=number]")

  const newElement = document.createElement("tr")
  
  newElement.className = "product"
  newElement.innerHTML = `"<td class="name"> 
                          <span>${inputName}</span> 
                          <td>
                          <td>...`

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelectorAll(".btn-remove").forEach(function(button) {
    button.addEventListener("click", removeProduct)
  })
  

  document.querySelector('#create').addEventListener("click", createProduct);
  
});
