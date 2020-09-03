// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // INIT VARIABLE
  let price = 0;
  let quantity = 0;
  let unitPrice;
  console.log(product);

  quantity = product.querySelector('.quantity input').value;
  unitPrice = product.querySelector('.price span').innerHTML;
  let subtotal =  product.querySelector('.subtotal span');

  unitPrice = Number(unitPrice);
  // console.log(unitPrice, typeof unitPrice);
  price = (quantity * unitPrice);
  console.log('fixed', price);
  let transFormPrice = price.toFixed(2);
  subtotal.innerHTML = transFormPrice;
  
  return price;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // let subtotalLine = updateSubtotal(singleProduct);
  //console.log('in calculate all, subtotalline: ', subtotalLine);
  // end of test

  // ITERATION 2
  //... your code goes here

  let products = document.querySelectorAll('.product');
  console.log('les prducts: ', products);
  var total = 0;
  for(let i = 0; i < products.length; i++ ) {
    //execute
    let subtotalLine = updateSubtotal(products[i]);
    console.log(subtotalLine);
    total += subtotalLine;
  }
  console.log('total value after loop: ', total);

  let transformTotal = total.toFixed(2);
  console.log('transform total: ', transformTotal)
  document.querySelector('#total-value span').innerHTML = transformTotal;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let currentParentNode=target.parentNode.parentNode.parentNode;
  console.log('The target in remove is:', target);
  let currentChildNode = target.parentNode.parentNode;
  
  currentParentNode.removeChild(currentChildNode);
  //... your code goes here
}

// ITERATION 5

function createProduct(evt) {
  //... your code goes here
  console.log(evt.currentTarget);
  const target = event.currentTarget;
  const inputNameProduct = document.querySelector('.create-product input[type=text]').value;
  console.log('inputNameProduct',inputNameProduct);

  const inputUnitPriceProduct = document.querySelector('.create-product input[type=number]').value;
  console.log('inputUnitPriceProduct',inputUnitPriceProduct);
  let transFormPrice = Number(inputUnitPriceProduct).toFixed(2);
  console.log(transFormPrice + ' ' + typeof transFormPrice);

  let targetParentNode = document.querySelector('#cart tbody');
  console.log('targetParentNode', targetParentNode);

  let tplTr = document.createElement('tr');
  tplTr.classList.add('product');
  tplTr.innerHTML += `<td class="name"><span>${inputNameProduct}</span></td><td class="price">$<span>${transFormPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
  console.log('inputUnitPriceProduct',inputUnitPriceProduct + ' ' + typeof inputUnitPriceProduct); 
  if(inputNameProduct.length < 1 || inputUnitPriceProduct == 0) {
    return alert("Can't create a new product wihout price and name !");
  }
  targetParentNode.appendChild(tplTr);
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const btnCreateProduct = document.getElementById('create')
  
  const removeItemsBtn = document.querySelectorAll('.product .action .btn-remove').forEach((btn) => {
    btn.addEventListener("click", removeProduct);
    console.log(btn.parentNode);
  });
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  btnCreateProduct.addEventListener('click', createProduct);
  //... your code goes here
});
