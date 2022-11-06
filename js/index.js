// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price);
  console.log(quantity);


  return product.querySelector('.subtotal span').innerText = price * quantity;
  
}

function calculateAll() {

  // ITERATION 2s
  //... your code goes here
let items = document.getElementsByClassName('product');
let total = 0
  for (let i=0; i< items.length; i++){
    // updateSubtotal(items);
    total += updateSubtotal(items[i])
  }
  // }
  // ITERATION 3
  //... your code goes here
   return document.querySelector('#total-value span').innerText = total;

}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);

  //... your code goes here
  const tbody = target.parentNode.parentNode.parentNode
  
  target.remove();
}
  
  

// ITERATION 5

function createProduct() {
  //... your code goes here
  function createProduct() {
    const inputs = document.querySelectorAll(".create-product input")
    const name = inputs[0].value
    const price = inputs[1].value
    const tbody = document.querySelector("tbody")
    const row = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
  
    const tr = document.createElement("tr")
    tr.classList.add("product")
    tr.innerHTML = row
  
    tbody.appendChild(tr)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let items = document.getElementsByClassName('product');
  for (let i=0; i< items.length; i++){
    (items[i].addEventListener("click", removeProduct))
    }
});
