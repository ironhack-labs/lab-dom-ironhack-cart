// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerText = price * quantity;
  let subtotal = price*quantity;
  
  console.log(subtotal)
  return subtotal;
}

function calculateAll() {
  
  let allProducts = document.getElementsByClassName('product');
  // console.log(allProducts);

  let total = 0;

  for(let item of allProducts){
    total +=updateSubtotal(item);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let prodName = document.querySelector('.create-product td input[type=text]'); 
  let prodPrice = document.querySelector('.create-product td input[type=number]');
  // let storeExample = document.querySelector('.product');
  // let tableClone = storeExample.cloneNode(true);
  // tableClone.querySelector('.name span').innerText = prodName;
  // tableClone.querySelector('.price span').innerText = prodPrice;
  console.log(prodPrice);
  if(!prodName.value) {
    prodName.classList.add('missing-info');
    return
  } else if (prodPrice.value == 0) {
    prodPrice.classList.add('missing-info');
    return
  }
  prodName.classList.remove('missing-info');
  prodPrice.classList.remove('missing-info');


  let newContentList = document.createElement('tr');
  newContentList.setAttribute('class', 'product');
  newContentList.innerHTML = `<td class="name"><span>${prodName.value}</span></td><td class="price">$<span>${prodPrice.value}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
    
  document.querySelector('#cart tbody').appendChild(newContentList);

  newContentList.querySelector('.btn-remove').addEventListener('click', removeProduct);

  prodName.value = '';
  prodPrice.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeListItem = document.querySelectorAll('.btn-remove');
  for(let btn of removeListItem) {
    btn.addEventListener('click', removeProduct);
  }

  const addListItem = document.getElementById('create');
  addListItem.addEventListener('click',createProduct);

});
