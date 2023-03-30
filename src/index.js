// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;

  //console.log(price)
  //console.log(quantity)

  let subtotal = price * quantity;
  //console.log(subtotal)
  product.querySelector('.subtotal span').innerHTML = subtotal;
  

  return subtotal;
  //console.log('Calculating subtotal, yey!');
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  let total = 0;

  let subtotal = document.querySelectorAll('.product')
  
  for (singleProduct of subtotal) total += updateSubtotal(singleProduct)
  
  // ITERATION 2
  //... your code goes here
  console.log(total)
  
  document.querySelector('h2 span').innerText = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const tbody = target.parentNode.parentNode.parentNode
  tbody.removeChild(target.parentNode.parentNode)

  calculateAll()
  //console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  console.log('click')
  const inputs = document.querySelectorAll(".create-product input")
  const name = inputs[0].value
  const price = inputs[1].value
  const tbody = document.querySelector("tbody")
  const rowContent = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`

  const row = document.createElement("tr")
  row.classList.add("product")
  row.innerHTML = rowContent

  tbody.appendChild(row)
  
  let removeProductBtn = row.querySelector(".btn-remove")
  removeProductBtn.addEventListener("click", removeProduct)

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsBtns = document.querySelectorAll('.btn-remove')
  removeProductsBtns.forEach(function (removeProductBtn) {
    removeProductBtn.addEventListener('click', removeProduct)
  })

  const addProductsBtn = document.getElementById('create')
  addProductsBtn.addEventListener('click', createProduct)

  //... your code goes here
});
