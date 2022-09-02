// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')

  let newPrice = price.innerHTML;
  let newQuantity = quantity.value;

  let calculatedSubtotal = newPrice * newQuantity;

  // console.log(price)
  // console.log(newQuantity)
  // console.log(calculatedSubtotal)


  subtotal.innerHTML = calculatedSubtotal;
  //return calculatedSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  
  
  let eachProduct = document.getElementsByClassName('product');

  console.log(eachProduct);

  

  for (let i = 0; i < eachProduct.length; i++) {
    
    updateSubtotal(eachProduct[i]);
    
  }

  /*

  //let total = 0;

  for (let i = 0; i < eachProduct.length; i++) {
    
    total = total + updateSubtotal(eachProduct[i]);
    
  } 
  //console.log(total)

  let total2 = document.querySelector('#total-value span');
  total2.innerHTML = total;
  
*/




  // ITERATION 3
  //... your code goes here

  let subtotals = document.querySelectorAll('.subtotal span');

  
  //console.log(subtotals);
  
  let total = 0;

  /*
  subtotals.forEach(element => {
    console.log(Number(element.textContent))
    total = total + Number(element.textContent);

  })

  console.log(total)
  let total2 = document.querySelector('#total-value span');
  total2.innerHTML = total;

*/

  for (let i = 0; i < subtotals.length; i++) {
    console.log(subtotals[i].textContent)
  
    total = total + Number(subtotals[i].textContent);
    
  }

  
let total2 = document.querySelector('#total-value span');
  total2.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  
  let newProductName = document.querySelector('.create-product input[type="text"]');
  let newProductPrice = document.querySelector('.create-product input[type="number"]');
  let tBody = document.querySelector('tbody');

  let newNameP = newProductName.value;
  let newPriceP = newProductPrice.value;

  let newRow = (`<tr class="product">
  <td class="name">
    <span>${newNameP}</span>
  </td>
  <td class="price">$<span>${newPriceP}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`);

tBody.innerHTML += newRow
 
  

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => createProduct());
});
