// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal
return subTotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;
  
  // ITERATION 2
  //... your code goes here
  document.querySelectorAll('#cart .product').forEach(function(product) {
    // updateSubtotal(product);
    subTotal = updateSubtotal(product)
    total += subTotal
    document.querySelector('#total-value span').innerHTML = total;
  })

  // ITERATION 3
  //... your code goes here

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = event.currentTarget.parentNode.parentNode;
 parent.remove();
 calculateAll()
}


// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product td input').value
  const price = document.querySelectorAll('.create-product td input')[1].value
  const parentNode = document.querySelector('#cart tbody')
  const newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name').innerHTML = name;
  newProduct.querySelector('.price').innerHTML = `<span>${price}</span>`;
  newProduct.querySelector('.quantity').innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  newProduct.querySelector('.subtotal').innerHTML =`$<span>0</span>`; 
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)
  parentNode.append(newProduct)
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function (button) {
    button.addEventListener('click', removeProduct)
  })
  //... your code goes here
  const addBtn = document.querySelector('#create');
  addBtn.addEventListener('click', createProduct);
});
