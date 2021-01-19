// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = price.innerText * quantity.value;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  document.querySelectorAll('.product').forEach(product => total += updateSubtotal(product));

  // ITERATION 3
  // document.getElementById('total-value').children[0].innerText = total;
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);

  // current ancestor with className = product
  const currentAncestor = target.parentNode.parentNode
  // remove the current product element
  currentAncestor.parentNode.removeChild(currentAncestor);
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelectorAll('.create-product input');

  // get the first product and clone it
  const clonedNode = document.querySelector('.product').cloneNode(true);
  const name = newProduct[0].value;
  const price = newProduct[1].value;

  // add some logic to ensure the input makes sense
  if (name === '' || price === 0) {
    alert("Please enter the product's name or price!")
  } else {
    // updating new product information
    clonedNode.querySelector('.name span').innerText = name;
    clonedNode.querySelector('.price span').innerText = Number.parseFloat(price).toFixed(2);

    // addventListener to the new clonedNode remove button
    // since the bottom code only executed when the DOM is loaded
    clonedNode.querySelector('.btn-remove').addEventListener('click', removeProduct);
    document.querySelector('#cart tbody').appendChild(clonedNode);
    
    // remove existing text
    newProduct[0].value= '';
    newProduct[1].value = 0;
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(el => el.addEventListener('click', removeProduct));
  document.getElementById('create').addEventListener('click', createProduct);
});
