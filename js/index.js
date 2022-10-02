// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  let price = parseFloat(product.querySelector('.price span').innerHTML);

  let quantity = parseInt(product.querySelector('.quantity input').value);
 
  let totalPrice = price * quantity;

  product.querySelector('.subtotal span').innerHTML = totalPrice;
  return totalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed. 
    let test = document.getElementsByClassName('product');
  let copiedArray = [...test];
  let totalValue = 0;
   copiedArray.forEach((product) => 
     totalValue += updateSubtotal(product));

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalValue;
  //... your code goes here
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let totalValue = parseFloat(document.querySelector('#total-value span').innerHTML);
  let removedValue = parseFloat(target.parentNode.previousElementSibling.querySelector('span').innerHTML);
 totalValue -= removedValue ;
  document.querySelector('#total-value span').innerHTML = totalValue;
  target.parentNode.parentNode.style.display = "none";
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  let productName = document.querySelector('.create-product input').value;

  let productPrice = parseFloat(document.querySelector('.create-product').children[1].querySelector('input').value);

  let table = document.getElementById('cart').children[1];

  table.innerHTML += (`<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`);
document.querySelectorAll('.btn.btn-remove').forEach((button) => {
  button.addEventListener('click', removeProduct);
});

//this method below that I tried first did not work

  // let row = table.insertRow();
  // let cell = row.insertCell();
  // cell.innerHTML = `<td class="name">
  //           <span>${productName}</span>
  //         </td>`;
  // cell = row.insertCell();
  // cell.innerHTML = `<td class="price">$<span>${productPrice}</span></td>`;
  // cell = row.insertCell();
  // cell.innerHTML = `<td class="quantity">
  //           <input type="number" value="0" min="0" placeholder="Quantity" />
  //         </td>`;
  // cell = row.insertCell();
  // cell.innerHTML = `<td class="subtotal">$<span>0</span></td>`;
  // cell = row.insertCell();
  // cell.innerHTML = `<td class="action">
  //           <button class="btn btn-remove">Remove</button>
  //         </td>`;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  
  document.querySelectorAll('.btn.btn-remove').forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click',createProduct)

});
