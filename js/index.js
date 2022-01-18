

// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
    const price = product.querySelector('.price span').innerText;
    console.log(price)
    const quantity = product.querySelector('.quantity input').value;
    const subTotal =  (price * quantity).toFixed(2)
   product.querySelector('.subtotal span').innerHTML = subTotal

    }

function calculateAll() {
  // ITERATION 2
  
  //const product = document.querySelectorAll('.tr')/
  const products = document.querySelectorAll('.product')
  const totalPrice = document.querySelector('#total-value span')
  //reseting the total value for every ne function call
  totalPrice.innerText = 0;

  // dummy value

  let total = 0;
    for (let i = 0; i < products.length; i++) {
      updateSubtotal(products[i]);
      const subTotal = Number(products[i].querySelector('.subtotal span').innerHTML)
      total += subTotal
      console.log(total)
    }
    totalPrice.innerText = total
};
  
  document.querySelector('.subtotal span').innerHTML

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here

 target.remove(target)
}


// ITERATION 5

function createProduct(event) {
//const getProduct = document.querySelector('.product')
//for (const product of getProduct) {
 //product
//}
// target.remove(target)
//}
  const createRow = document.querySelector('.create-product');
  let newProdNameInput= createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;;
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
  <button class="btn btn-remove">Remove</button>
</td>
`;

// getting the parent of this newly created row
const parent = document.querySelector('#cart tbody');

// appending the new row to the child
parent.appendChild(newTableRow);

// ensurering the new remove-btn inherits the same behaviour as the other
const removeProductBtn = newTableRow.querySelector('.btn-remove');
removeProductBtn.addEventListener('click', removeProduct);

// cleaning the input fields
newProdNameInput.value = '';
newProdPriceValue.value = 0

}
// EVENTLISTENER 
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProducts = document.querySelectorAll('.btn-remove');
  for (let product of removeProducts) {
    product.addEventListener('click', removeProduct);
  }
  

  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  console.log('created a new product:')
  }
})