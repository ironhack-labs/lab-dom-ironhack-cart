// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseFloat(product.querySelector('.quantity input').value);
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  return subTotal.innerHTML;
  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  let productsArr = [...products];
  let total = productsArr.reduce((acc, product) => acc + parseFloat(updateSubtotal(product)), 0);

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  targetProduct = target.parentNode.parentNode;
  cuerpo = document.getElementsByTagName('tbody')[0];
  cuerpo.removeChild(targetProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let table = document.querySelector("tbody");
  const newProduct = document.getElementsByClassName('create-product')[0];
  let tr = document.createElement("TR");
  let newName = newProduct.querySelector('input[type =text]').value;
  let newPrice = newProduct.querySelector('input[type =number]').value;
  let newItem = 
  `
  <tr class="product">
    <td class="name">
      <span>${newName}</span>
    </td>
    <td class="price">$<span>${newPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  ` ;
  tr.setAttribute("class","product");
  tr.innerHTML = newItem;
  table.appendChild(tr);
  let buttonsRemove = document.querySelectorAll(".btn-remove");
  buttonsRemove[buttonsRemove.length-1].addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeBtns = document.getElementsByClassName('btn-remove');
  let removeArr = [...removeBtns];
  console.log(removeArr);
  removeArr = removeArr.map(buto => buto.addEventListener('click', removeProduct));
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});