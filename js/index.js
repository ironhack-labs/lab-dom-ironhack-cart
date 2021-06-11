// ITERATION 1
//for testing (npm run test:watch)

function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;// textContent faster than innerText

  let quantity = product.querySelector('.quantity input').value;

  let subTotal = product.querySelector('.subtotal span')

  subTotal.textContent = price * quantity;

  return subTotal;
}

function calculateAll() {
  
  const products = document.querySelectorAll('.product');
  let totalValue = document.querySelector('#total-value span');

  total = 0;

  for(let i = 0; i < products.length; i++){
    total += Number(updateSubtotal(products[i]).innerHTML);
  }
 
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  
    target.remove(); // it remove the product but the test fail??

    calculateAll() // calculateAll() is place it at the end to recalculate the total price
    
}
// ITERATION 5

function createProduct() {
  let nameNew = document.querySelector('.create-product input[placeholder="Product Name"]').value
  let priceNew = document.querySelector('.create-product input[placeholder="Product Price"]').value
  let tbody = document.querySelector('tbody')

  // create parent and add parent to the body
  let tr = document.createElement('tr')
  tr.classList.add('product')
  tbody.appendChild(tr)

  //add name
  let td = document.createElement('td')
  tr.appendChild(td)

  td.classList.add('name')
  
  let spanName = td.appendChild( document.createElement('span') )
  spanName.innerText = nameNew

  // create and add price
  let tdPrice = document.createElement('td')
  tdPrice.classList.add('price')
  let spanPrice = document.createElement('span')
  spanPrice.innerText = priceNew

  // add to parent
  tr.appendChild(tdPrice)
  tdPrice.innerText = '$'
  tdPrice.appendChild(spanPrice)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for(let i = 0; i < removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
});
