// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  return product.querySelector('.subtotal span').innerHTML = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
    total += Number(products[i].querySelector('.subtotal span').innerText);
  }
  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.currentTarget.parentNode.parentNode.parentNode.removeChild(event.currentTarget.parentNode.parentNode);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const products = document.querySelectorAll('.create-product input')
  let newItem = document.createElement('tr')
  let body = document.querySelector('tbody');
  body.appendChild(newItem)
  newItem.classList.add('product');
  newItem.innerHTML =`<td class="name"><span>Ironhack Metal Duck</span></td><td class="price">$<span>47.00</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
  newItem.querySelector('.name span').textContent = products[0].value;
  newItem.querySelector('.price span').textContent = products[1].value;
  newItem.getElementsByClassName('btn btn-remove')[0].addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removes = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removes.length; i++){
    removes[i].addEventListener('click', removeProduct);
  }
  const creation = document.getElementById('create');
  creation.addEventListener('click', createProduct);
});
