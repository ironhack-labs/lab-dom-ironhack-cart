// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  // <td class="price">$
  //   <span>25.00</span>
  // </td>
  const price=product.querySelector('.price span');
  // <td class="quantity">
  //   <input type="number" value="1" min="0" placeholder="Quantity" />
  // </td>
  const quantity=product.querySelector('.quantity input');
  const subtotal=price.textContent*quantity.value;
  /* const subtotal=price*quantity; */
  // <td class="subtotal">
  //    $<span>0</span>
  // </td>
  let subtotalTag=product.querySelector('.subtotal span');
  subtotalTag.textContent=subtotal;
  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2
  let totalAmount=0;
  //targeting product class
  const productList=document.querySelectorAll('.product');
  //iterates all over the product list
  productList.forEach((item) => {
    //updates each product subtotal
    const eachItem=updateSubtotal(item);
    //accumulates all values to show final import
    totalAmount+=eachItem;
  });
  // ITERATION 3
  //target <h2 id="total-value">Total: $<span>0</span></h2>
  let finalAmount=document.querySelector('#total-value span');
  //inserting final import on HTML
  finalAmount.textContent=totalAmount;
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
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});