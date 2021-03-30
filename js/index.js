// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTotal = price * quantity;
  product.querySelector('.subtotal').innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');
  let subTotal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    subTotal += updateSubtotal(allProducts[i]);
    console.log(subTotal);
  }
  document.querySelector('#total-value span').innerHTML = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentElement = target.parentNode.parentNode.parentNode;
  parentElement.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(".create-product input[type='text']").value;
  const price = document.querySelector(".create-product input[type='number']").value;


  const parentNode = document.querySelector('tbody');
  const newItem = document.createElement('tr');
  newItem.setAttribute('class', 'product');
  parentNode.appendChild(newItem);
  console.log(parentNode)
  // const itemName = document.createElement('td').classList.add('name');
  // itemName.appendChild(document.createElement('span').innerText(price))
  // const itemPrice = document.createElement('td').classList.add('price');
  // const itemQuantity = document.createElement('td').classList.add("mystyle");
  // const itemSubtotal = document.createElement('td');
  // const itemRemove = document.createElement('td');
  
  //document.createElement('block').appendChild( document.createElement('b')
  // newItem.appendChild(itemName);

  
  // parentNode.appendChild(newItem);

 
  // parentNode.append --> to add child element 
  


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
  document.querySelector('#create').addEventListener('click', createProduct);
});
