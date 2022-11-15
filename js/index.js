// ITERATION 1

function updateSubtotal(product) {

  let price, quantity, subtotal;
  price = product.querySelector('.price span').innerText;
  quantity = product.querySelector('.quantity input').value;
  subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
};



function calculateAll() {

  // ITERATION 2
  // let products = [...document.querySelectorAll('.product')];
  // products.forEach((product) => updateSubtotal(product))

  // ITERATION 3
  let products, total, totalDOM;
  
  products = Array.from(document.querySelectorAll('.product'));
  totalDOM = document.querySelector('#total-value > span');
  total = 0;

  products.forEach((product) => total+=updateSubtotal(product));
  totalDOM.innerHTML = total; 
};


// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  //let parent = target.parentNode.parentNode; 
  let parentProduct = target.closest(".product")
  parentProduct.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {

  let product, clonedProduct, productsArea;
  product = document.querySelector('.product');
  clonedProduct = product.cloneNode(true);
  productsArea = document.querySelector('#cart > tbody')
   
  productsArea.appendChild(clonedProduct);

  //We modify the diff elements of the newly made product, which takes the values of the cloned one
  //To do this, we use the input values of the create product inputs
  let newProduct = productsArea.lastChild;
  newProduct.querySelector('.name > span').innerText = document.querySelector('.create-product input[placeholder="Product Name"]').value;
  newProduct.querySelector('.price > span').innerText = document.querySelector('.create-product input[placeholder="Product Price"]').value;
  newProduct.querySelector('.quantity > input').value = 0;
  newProduct.querySelector('.subtotal > span').innerText = 0;
  //as well as making sure that the content is "brand new", we ensure that the functionality is what it should
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);

  //Reset create product inputs so we can create a new product again
  document.querySelector('.create-product input[placeholder="Product Name"]').value = "";
  document.querySelector('.create-product input[placeholder="Product Price"]').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ITERATION 4
  const removeProductBtn = [...document.getElementsByClassName('btn-remove')];
  removeProductBtn.forEach(function(btn){btn.addEventListener('click', removeProduct)})

  // ITERATION 5
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});
