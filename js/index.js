// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent
  let quantity = product.querySelector('.quantity input').value

  let total = price * quantity
  product.querySelector('.subtotal span').textContent = total
  return total;

  //... your code goes here
}

function calculateAll() {
  let total = 0
  // ITERATION 2
  const singleProduct = document.querySelectorAll('.product');
    for (product of singleProduct){
      total += updateSubtotal(product);
    }
    console.log('The total is:', total);
  // ITERATION 3
  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  target.parentElement.parentNode.remove();
  console.log('The target in remove is:', target);
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const product = document.querySelector('.product').cloneNode(true);
  const name = document.getElementById("name").value
  const price = document.getElementById("price").value

  if(name === '' || price === ''){
    alert('Please enter a name and price');
    return;
  }

  product.querySelector('.name span').textContent = name
  product.querySelector('.price span').textContent = price
  product.querySelector('.quantity input').value = 1
  product.querySelector('.action .btn-remove').addEventListener('click', removeProduct)

  document.querySelector('#cart tbody').append(product);

  calculateAll()

 document.getElementById("name").value = "";
 price = document.getElementById("price").value = 0
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn  = document.querySelectorAll('.action .btn-remove');
  for(btn of removeBtn){
    btn.addEventListener('click', removeProduct);
  }
  const addBtn = document.getElementById('create');
  addBtn.addEventListener('click', createProduct);

});
