// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  let total = 0;
  // ITERATION 2
  document.querySelectorAll('#cart .product').forEach(function(product) {
    //updateSubtotal(product);
    let subTotal = updateSubtotal(product);
    total += subTotal;
    document.querySelector('#total-value span').innerHTML = total;
  });


  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = event.currentTarget.parentNode.parentNode;
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value;
  const price = document.querySelectorAll('.create-product input')[1].value;
  const parentNode = document.querySelector('#cart tbody');
  const newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name').innerHTML = `<span>${name}</span>`;
  newProduct.querySelector('.price').innerHTML = `$<span>${price}</span>`;
  newProduct.querySelector('.quantity').innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';
  newProduct.querySelector('.subtotal').innerHTML = '$<span>0</span>';
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  parentNode.append(newProduct);
//   const newListItem = `<tr class="product">
//   <td class="name">
//     <span>${name}</span>
//   </td>
//   <td class="price">$<span>${price}</span></td>
//   <td class="quantity">
//     <input type="number" value="0" min="0" placeholder="Quantity" />
//   </td>
//   <td class="subtotal">$<span>0</span></td>
//   <td class="action">
//     <button class="btn btn-remove">Remove</button>
//   </td>
// </tr>`;
  
// parentNode.innerHTML += newListItem;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function(button) {
    button.addEventListener('click', removeProduct);
  } )
  const addBtn = document.querySelector('#create');
  addBtn.addEventListener('click', createProduct);

  //... your code goes here
});
