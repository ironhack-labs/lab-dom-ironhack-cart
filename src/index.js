// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input ').value;
  //... your code goes here

  let subTotalValue = price * quantity;
  
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalValue;


  return subTotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  let productsNode = document.getElementsByClassName('product')
  let total = 0;
  for(let i = 0; i < productsNode.length; i++){
    total += updateSubtotal(productsNode[i]);
    console.log(productsNode[i]) 
  }
  

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parentDiv = target.parentNode.parentNode.parentNode;
  parentDiv.removeChild(target.parentNode.parentNode);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  let newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  let newProductProperties = document.querySelectorAll('.create-product input')
  let newProductName = newProductProperties[0].value;
  let newProductValue = newProductProperties[1].value; 
  let parent = document.querySelector('tbody');
  newProduct.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductValue}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
let newButton = newProduct.querySelector('button');
newButton.addEventListener('click',removeProduct)
parent.appendChild(newProduct);
  

  
  

  
  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove')
  const addButton = document.getElementById('create')

  for(let i = 0;i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct)
    console.log(removeButtons[i])
    }
  
    addButton.addEventListener('click',createProduct);


  //... your code goes here
});
