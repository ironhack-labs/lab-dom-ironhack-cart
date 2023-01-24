// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value
  let priceVal = product.querySelector('.subtotal span')
  let calcule = price * quantity;
  priceVal.innerText = calcule
   return calcule;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here
  let eachProd = document.getElementsByClassName('product');
  
  for(let i = 0 ; i < eachProd.length; i++){
    updateSubtotal(eachProd[i])
  
  }
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span')
  for(let i = 0 ; i < eachProd.length; i++){
    updateSubtotal(eachProd[i])
    let result = updateSubtotal(eachProd[i]) + updateSubtotal(eachProd[i + 1])
    total.innerHTML = result
    return result
  }
  
  
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
    let remov = target.parentNode.parentNode;
    remov.remove()
  }
  


// ITERATION 5

function createProduct() {
  //... your code goes here
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;
  // get the parent of this newly created row
  const parent = document.querySelector('#cart tbody');

  // append the newly created row to the parent
  parent.appendChild(newTableRow);

  // make sure remove button inherits the same behavior as other remove buttons
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // clean the fields
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}
  



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removButton = document.getElementsByClassName('action')
  for(let i = 0; i < removButton.length; i++){
    removButton[i].addEventListener('click', removeProduct)
  }
  const createButton = document.getElementById("create")
if(createButton){
createButton.addEventListener("click", createProduct)
}
  
});
