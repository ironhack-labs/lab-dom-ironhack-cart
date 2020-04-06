// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerText = price*quantity;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0
  let x = document.getElementsByClassName('product')
  for(i=0;i<x.length;i++)
  {
    updateSubtotal(x[i])
    total = total + parseFloat(x[i].querySelector('.subtotal span').innerText);
  }
  //x.forEach(element => console.log(element))

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name = document.querySelector('#createName input').value
  let price = parseFloat(document.querySelector('#createPrice input').value)
  price = price.toFixed(2);
  document.querySelector("tbody").innerHTML += `<tr class="product">
  <td class="name"><span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
document.querySelector('#createName input').value = ''
document.querySelector('#createPrice input').value = 0
const removeItem = document.getElementsByClassName('btn-remove') 
for(i=0;i<removeItem.length;i++)
{
  removeItem[i].addEventListener('click', removeProduct);
}
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeItem = document.getElementsByClassName('btn-remove') 
  for(i=0;i<removeItem.length;i++)
  {
    removeItem[i].addEventListener('click', removeProduct);
  }
  const createItem = document.getElementById('create');
  createItem.addEventListener('click',createProduct);
    //... your code goes here
});
