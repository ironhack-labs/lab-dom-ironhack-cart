// ITERATION 1
function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  //step 1
   const price = product.querySelector('.price span').innerHTML;
   const quantity = product.querySelector('.quantity input').value;
  //step 3
  const subTotalPrice = price * quantity;
  //step 4
  const subTotalHolder = product.getElementsByClassName('subtotal')[0];
  //step 5
  subTotalHolder.innerHTML = subTotalPrice;
  return subTotalHolder.innerHTML;
}

function calculateAll() {
  // ITERATION 2
  const subTotalHolderArray  = [...document.getElementsByClassName('product')];
  //const subTotalHolderArray = [...subTotalHolderCollection];
  const totalPerItem = subTotalHolderArray.forEach((element) => {
    updateSubtotal(element);
  });
  // ITERATION 3
  const subTotal = document.querySelectorAll('.subtotal');
  const subTotalPreArray = [...subTotal]
  let subTotalArray = [];
  for (let j = 0; j < subTotalPreArray.length; j++) {
    subTotalArray.push(subTotal[j].innerHTML) 
  }
  const totalContent = subTotalArray.reduce((total, item) => {
    total = Number(total)
    item = Number(item)
    return total += item;
  }, 0)
  let totalHolder = document.querySelector('#total-value span');
  totalHolder.innerHTML = totalContent;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //remove a row from the table 
  let td = event.currentTarget.parentNode;
  let tr = td.parentNode;
  tr.parentNode.removeChild(tr);

  //below I tried to reach the subtotal content to remove it from total (during deleting) but 
  //I couldn't get it in DOM (currentSubtotal)
/*   let currentSubtotal = tr.querySelector('.subtotal span').innerHTML;
  let totalHolder = document.querySelector('#total-value span');
  let totalContent = totalHolder.innerHTML;
  totalContent -= currentSubtotal;
  totalHolder.innerHTML = totalContent; */
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

