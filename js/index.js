// ITERATION 1

function updateSubtotal(product) {

  // INIT VARIABLE
  let price = 0;
  let quantity = 0;
  let unitPrice;

  quantity = product.querySelector('.quantity input').value;
  unitPrice = product.querySelector('.price span').innerHTML;
  let subtotal =  product.querySelector('.subtotal span');
  
  convertValue(unitPrice);

  price = (quantity * unitPrice);

  let transFormPrice = price.toFixed(2);
  subtotal.innerHTML = transFormPrice;
  
  return price;
  //... your code goes here
}

const convertValue = (price) => {
  let newPrice;
  let res;
  if(typeof price == 'string') {
    res = Number(price);
  }
  return res;
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
  var total = 0;
  for(let i = 0; i < products.length; i++ ) {
    //execute
    let subtotalLine = updateSubtotal(products[i]);
    total += subtotalLine;
  }
  // console.log('total value after loop: ', total);

  let transformTotal = total.toFixed(2);
  
  document.querySelector('#total-value span').innerHTML = transformTotal;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let currentParentNode=target.parentNode.parentNode.parentNode;

  let currentChildNode = target.parentNode.parentNode;
  
  currentParentNode.removeChild(currentChildNode);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct(evt) {
  //... your code goes here
  const target = event.currentTarget;
  const inputNameProduct = document.querySelector('.create-product input[type=text]').value;
  const inputUnitPriceProduct = document.querySelector('.create-product input[type=number]').value;

  let transFormPrice = Number(inputUnitPriceProduct).toFixed(2);
  let targetParentNode = document.querySelector('#cart tbody');
  let tplTr = document.createElement('tr');
  tplTr.classList.add('product');
  tplTr.innerHTML += `<td class="name"><span>${inputNameProduct}</span></td><td class="price">$<span>${transFormPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td><td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
 
  if(inputNameProduct.length < 1 || inputUnitPriceProduct == 0) {
    return alert("Can't create a new product wihout price and name !");
  }

  targetParentNode.appendChild(tplTr);
  targetParentNode.lastChild.lastChild.childNodes[1].addEventListener("click", removeProduct);
  
  document.querySelector('.create-product input[type=text]').value = '';
  document.querySelector('.create-product input[type=number]').value = 0;
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const btnCreateProduct = document.getElementById('create')
  
  const removeItemsBtn = document.querySelectorAll('.product .action .btn-remove').forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  btnCreateProduct.addEventListener('click', createProduct);
  //... your code goes here
});
