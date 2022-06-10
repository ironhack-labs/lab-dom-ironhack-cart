// ITERATION 1

//const { getQueryHandlerAndSelector } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);
  //console.log (quantity);
  subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  //console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const trNodes = document.getElementsByClassName('product');
  let sum = 0;
  for(item of trNodes){
    sum = sum + updateSubtotal(item);
  }
  document.querySelector('#total-value span').innerText = sum;   

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
function removeProduct(event){
      const target = event.currentTarget.parentNode.parentNode;
      console.log('The target in remove is:', target);
      target.remove()
}

// ITERATION 5


function createProduct() { 

  const newName = document.querySelector('input[type="text"]').value;  
  const newPrice = document.querySelector('input[placeholder="Product Price"]').value;
  console.log(newName)
  console.log(newPrice)

  const newProduct = document.createElement('tr');
  const newProductName = document.createElement('td');
  const newProductPrice = document.createElement('td');
  const newProductQuantity = document.createElement('td');
  const newProductSubtotal = document.createElement('td');
  const newProductReboveBtn = document.createElement('td');

  newProduct.classList.add('product'); 
  newProductName.classList.add('name');
  newProductPrice.classList.add('price');
  newProductPrice.textContent = '$';
  newProductQuantity.classList.add('quantity');  
  newProductSubtotal.classList.add('subtotal');
  newProductSubtotal.textContent = '$';
  newProductReboveBtn.classList.add('action');  

  const tableBody = document.querySelector('tbody');

  tableBody.appendChild(newProduct)
  newProduct.appendChild(newProductName)
  newProduct.appendChild(newProductPrice)
  newProduct.appendChild(newProductQuantity)
  newProduct.appendChild(newProductSubtotal)
  newProduct.appendChild(newProductReboveBtn)

  let spanName = document.createElement('span')
  let spanPrice = document.createElement('span')
  
  const inputQuantity = document.createElement('input')
  function setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
      }
    }
 // añadir todos los atributos al elemento HTML "input"
  setAttributes(inputQuantity,{"type" : "number", "value" : "0", "min" : "0", "placeholder" : "Quantity"});

 const spanSubtotal = document.createElement('span')
 spanSubtotal.textContent = 0;
 const removeButton = document.createElement('button')
 removeButton.textContent = 'Remove'; 
 removeButton.addEventListener('click', removeProduct)
 removeButton.classList.add('btn', 'btn-remove')

 newProductName.appendChild(spanName)
 newProductPrice.appendChild(spanPrice)
 newProductQuantity.appendChild(inputQuantity)
 newProductSubtotal.appendChild(spanSubtotal)
 newProductReboveBtn.appendChild(removeButton)

spanName.textContent = newName
spanPrice.textContent = newPrice 

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.querySelectorAll('.action button');
  allRemoveButtons.forEach(btn => btn.addEventListener('click', removeProduct));
  
  const addProductButton = document.querySelector('#create');
  addProductButton.addEventListener('click', createProduct);

  //... your code goes here
});
