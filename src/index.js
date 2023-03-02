 // ITERATION 1

function updateSubtotal(product) {

  console.log ('Calculating subtotal,yey!'); 
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const totPrice= price.innerHTML * quantity;
  product.querySelector('.subtotal span').innerText=totPrice; 
  return product.querySelector('.subtotal span').innerText;
} 
 
 //Following code is not working
  /*const priceVal=parseFloat(price.innerHTML);
  if (isNaN(priceVal) || isNaN(quantity)) {
    console.log("Invalid input for price or quantity");
    return 0;
  }
  const quanVal=parseInt(quantity.value);
  const subTotalVal = priceVal * quanVal;  */
  //const subTotalElement=product.querySelector('subTotal span').innerText;
 // return subTotalElement;
//let subTotalElement = product.querySelector('.subtotal span');
 //subTotalElement.innerHTML = subTotalVal;
 //return subTotalVal;


  


 // ITERATION 2
function calculateAll() {
  let total = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    const subtotal = updateSubtotal(product);
    total += subtotal;
    
  });
  // Updating the total value in the DOM
  const totalElement = document.querySelector('#total-value  span');
  totalElement.textContent = total.toFixed(2);
  return total;
  /*const products = document.getElementsByClassName('product');
 
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  } 
  
  //Iteration 3
  const totalValue = document.querySelector('#total-value > span');
  totalValue.textContent = total.toFixed(2); */
}

// ITERATION 4
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
});

function removeProduct(event) {
  const targetButton = event.currentTarget;
  const targetRow = targetButton.parentNode.parentNode;
  const targetPrice = targetRow.querySelector('.price span').textContent;
  targetRow.parentNode.removeChild(targetRow);
  calculateAll();
  alert(`Product removed. Total price: ${targetPrice}`);
 

}

// ITERATION 5
const createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct);

function createProduct() {
  const productName = document.querySelector('#cart tbody tr:last-child .name input').value;
  const productPrice = document.querySelector('#cart tbody tr:last-child .price input').value;
  const productRow = document.createElement('tr');
  productRow.classList.add('product');
  productRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here 
});
