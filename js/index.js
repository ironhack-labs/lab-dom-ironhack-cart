// ITERATION 1


  

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector('.subtotal span');
  const sumSubtotal = Number(price) * Number(quantity.value);
  return subtotal.innerText = Number(sumSubtotal);
}

function calculateAll(product) {
  const totalValue = document.querySelector('#total-value span');
  const allTheInputs = document.querySelectorAll(".product");
  let total = 0;
  for (eachInput of allTheInputs){
    updateSubtotal(eachInput);
    total += updateSubtotal(eachInput);
  }
  return totalValue.innerText = Number(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = document.getElementById('productID');
  console.log(parent);
  const child = parent.getElementsByClassName('product');
  for(let i = 0; i < child.length; i++){
    parent.removeChild(child[i]);
  }
}
  



// ITERATION 5

function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value;
  let price = document.querySelectorAll('.create-product input')[1].value;
  price = Number(price).toFixed(2);
  const htmlString = `
  
  <td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
      
  `
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = htmlString;
  document.querySelector('tbody').appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removePricesBtn = document.querySelectorAll(".btn-remove");
    for (let i = 0; i < removePricesBtn.length; i++){
      removePricesBtn[i].addEventListener('click', removeProduct);
  }
  
  const createNewProduct = document.querySelector('#create.btn');
  createNewProduct.addEventListener('click', createProduct);
  
});


