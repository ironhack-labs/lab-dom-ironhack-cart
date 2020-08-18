// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  const multi = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  const sub = subtotal.innerHTML = multi;
  return sub;
}

function calculateAll() {
  // ITERATION 2
  const all = document.querySelectorAll('.product');
  let total = 0
  for (let i = 0; i < all.length; i++){
   total += updateSubtotal(all[i])
  }
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = document.querySelector('tbody')
  const child = target.parentNode.parentNode
  console.log(child)
    parent.removeChild(child);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const target = event.currentTarget;
  const newName = document.querySelectorAll('.create-product input')[0].value;
  const newPrice = document.querySelectorAll('.create-product input')[1].value;
  const parent = document.querySelector('tbody')
  const child = document.querySelector('.product').cloneNode(true);
  child.querySelector('.name').innerHTML = `<span>${newName}</span>`;
  child.querySelector('.price').innerHTML = `$<span>${newPrice}</span>`;
  child.querySelector('.quantity').innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';
  child.querySelector('.subtotal').innerHTML = '$<span>0</span>';
  child.querySelector('.btn-remove').addEventListener('click', removeProduct);
  parent.append(child);
  newName = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
 
  const removeBtn = document.querySelectorAll('.btn-remove');
  //console.log(removeBtn)
  removeBtn.forEach((btn)=> {
    console.log(btn)
    btn.addEventListener('click', removeProduct);
  })

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
