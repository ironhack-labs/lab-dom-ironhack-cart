// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElement = product.querySelector('.subtotal span');

  const priceNumber = parseFloat(price);
  const quantityNumber = parseFloat(quantity);
  
  const subtotal = priceNumber * quantityNumber;
 
  subtotalElement.innerText = subtotal;
 
  return subtotal;
}

function calculateAll() {
 
  // ITERATION 2
  //... your code goes here
  const product = document.getElementsByClassName('product');
  let calculateAll = 0;
  
  for (let i = 0; i < product.length; i++) {
    calculateAll += updateSubtotal(product[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  
  totalPrice.innerText = calculateAll;
  
}

// ITERATION 4

// essa função é chamada após o evento de clique, executando um bloco:
function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const trElement = target.parentNode.parentNode;
  const trElementParent = trElement.parentNode;

 
  trElementParent.removeChild(trElement);
  
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputProductList = document.querySelectorAll('.create-product input')

  let inputProductName = inputProductList[0];
  let inputProductPrice = inputProductList[1];

  let inputProductPriceNumber = Number(inputProductPrice.value).toFixed(2);


  // const tr = `
  // <tr class="product">
  //         <td class="name">
  //           <span>${inputProductName.value}</span>
  //         </td>
  //         <td class="price">$<span>${inputProductPriceNumber}</span></td>
  //         <td class="quantity">
  //           <input type="number" value="0" min="0" placeholder="Quantity" />
  //         </td>
  //         <td class="subtotal">$<span>0</span></td>
  //         <td class="action">
  //           <button class="btn btn-remove" onclick='removeProduct(event)'>Remove</button>
  //         </td>
  //       </tr>`

  // const tBodyElement = document.querySelector('tbody');

  // tBodyElement.insertAdjacentHTML("beforeend", tr);

  const tr = document.createElement('tr');

  tr.classList.add('product');

  tr.innerHTML = `<td class="name">
  <span>${inputProductName.value}</span>
</td>
<td class="price">$<span>${inputProductPriceNumber}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

const tBodyElement = document.querySelector('tbody');

tBodyElement.appendChild(tr);

const removeButtonsNewProduct = tr.querySelector('.btn-remove');

removeButtonsNewProduct.addEventListener('click', removeProduct);


inputProductName.value = '';
inputProductPrice.value = 0;


  }

  
  

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.getElementsByClassName('btn btn-remove');

  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
   
  }

  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct);

});


