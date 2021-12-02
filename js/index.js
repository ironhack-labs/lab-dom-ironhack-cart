// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span') ;
  const quantity = product.querySelector('.quantity input') ;
  let subTotalAmount = parseFloat((price.innerHTML * quantity.value).toFixed(2));
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalAmount;
  return subTotalAmount;
  
  //... your code goes here
}

function calculateAll() {
  const productList = document.querySelectorAll('.product');
  const totalValue = document.querySelector('#total-value span');
  const totalAmount = [];
  productList.forEach((product) => { 
    totalAmount.push(updateSubtotal(product));
  });
  
  totalValue.innerHTML = totalAmount.reduce((sum, subTotal) => {
    return sum + subTotal;
  }, 0);

}

// ITERATION 4

function removeProduct(element) {
  // const target = event.currentTarget;
  
  console.log('The target in remove is:', element);
  
  let trNode = element.parentNode.parentNode;
  trNode.parentNode.removeChild(trNode);
  
}

// ITERATION 5

function createProduct() {
  const nameProduct = document.querySelector('.create-product input[type=text]');
  const valueProduct = document.querySelector('.create-product input[type=number]') ;
  
  let newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = 
  (`<td class="name">
  <span>${nameProduct.value}</span>
  </td>
  <td class="price">$<span>${valueProduct.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`)
  let tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newProduct);
   
   //... your code goes here
}

function clearInput() {
  document.getElementById('reset1').value='Product Name';
  document.getElementById('reset2').value='0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  /* const btnRemoveItens = [...document.getElementsByClassName('btn-remove')];
  btnRemoveItens.forEach( e => e.addEventListener ('click', removeProduct)) */
  
  const btnCreateProduct = document.getElementById('create');
  btnCreateProduct.addEventListener('click', createProduct);

  const clearInp = document.getElementById('create');
  clearInp.addEventListener('click', clearInput);
  //... your code goes here

  const tableCart = document.getElementById("cart");
  tableCart.addEventListener('click', (event) => {
    let element = event.target;
  
    if(element.classList.contains("btn-remove")) {
      removeProduct(element);
    };
  })
});
