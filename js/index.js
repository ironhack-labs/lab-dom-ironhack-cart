// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //step 1
   const price = product.querySelector('.price span').innerHTML;
   const quantity = product.querySelector('.quantity input').value;
  //step 3
  const subTotalPrice = price * quantity;
  //step 4
  const subTotalHolder = product.getElementsByClassName('subtotal')[0];
  //step 5
  subTotalHolder.innerHTML = subTotalPrice;
  //return "subTotalHolder.innerHTML" to use it later in the other functions
  //to use it in another function - invoke it "updateSubtotal(arg)""
  return Number(subTotalHolder.innerHTML);
}

function calculateAll() {
  // ITERATION 2
  const subTotalHolder  = document.getElementsByClassName('product');
  const subTotalHolderArray = [...subTotalHolder];
  //always update the total ()
  let holdTotal = 0;
  const totalPerItem = subTotalHolderArray.forEach((element) => {
    holdTotal += updateSubtotal(element);
  });
  // ITERATION 3
  let totalHolder = document.querySelector('#total-value span');
  totalHolder.innerHTML = holdTotal;  
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //remove a row from the table 
  let td = event.currentTarget.parentNode;
  let tr = td.parentNode;
  tr.parentNode.removeChild(tr);
  //to update total after removing a product
  return calculateAll();
}

// ITERATION 5
function createProduct() {
  //get values of the product and price
  const addProdName = document.querySelector('.create-product input[type="text"]');
  const addProdNameValue = addProdName.value;
  const addProdPrice = document.querySelector('.create-product input[type="number"]');
  const addProdPriceValue = addProdPrice.value;
  //"where to add
  const tbody = document.querySelector('tbody');
  //"what to add"
  const tr = document.createElement('tr');
  //add a class to "what to add" (will do calculations from above functions)
  tr.className = 'product';
  //add the full line to "what to add"
  tr.innerHTML = `<tr class="product">
  <td class="name">
    <span>${addProdNameValue}</span>
  </td>
  <td class="price">$<span>${addProdPriceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
  //add "what to add" to "where to add"
  tbody.appendChild(tr)
  //add a listener for the created button Remove 
  tr.querySelector('.btn-remove').addEventListener('click', removeProduct);
}
//create a product
const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct); 

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtonsArray = [...document.querySelectorAll('.btn-remove')];
  for (let i = 0; i < allRemoveButtonsArray.length; i++) {
    allRemoveButtonsArray[i].addEventListener('click', removeProduct)
  }
});

