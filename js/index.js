function updateSubtotal(product) {
  let subtotal = 0;
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  
  const quantity = product.querySelector('.quantity input').value;
    subtotal = price * quantity;
    console.log(subtotal);
    product.querySelector('.subtotal span').innerText = subtotal;
    return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('tr.product');
  allProductsArray = [...allProducts];
  let total = 0;
  allProductsArray.forEach((product) => {
    console.log(product);
    let subtotal = updateSubtotal(product);
    total += subtotal;
  });
  const totalSpan = document.querySelector('h2 span');
  totalSpan.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
    const createProduct = document.querySelector('.create-product');
    console.log(createProduct.value);
    document.querySelector('').innerHTML +=
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
