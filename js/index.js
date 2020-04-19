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
  let total = productsArr.reduce((acc,product) => acc + parseFloat(updateSubtotal(product)),0);

  // ITERATION 3
  let totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = total
  console.log(totalValue)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let toBeRemoved = target.parentElement.parentElement
  toBeRemoved.parentElement.removeChild(toBeRemoved)
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  
  console.log('product to be created !')
  let table = document.querySelector("tbody")
  let tr = document.createElement("TR");

  let newName = document.querySelector('#createName').value
  let newPrice = document.querySelector('#createPrice').value
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
  ` 

  tr.setAttribute("class","product")
  tr.innerHTML = newItem
  table.appendChild(tr)

  let lastButton = document.querySelectorAll(".btn-remove")
  lastButton[lastButton.length-1].addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove');
  const removeArray = [...removeButton]
    for (i=0;i<removeArray.length;i++) {
      removeArray[i].addEventListener('click', removeProduct);
    }
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
