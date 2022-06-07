// ITERATION 1

function updateSubtotal(product) {
  
  

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');


  subtotal.innerHTML = price.innerHTML * quantity.value;
  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product');
  const allSubTotal = document.querySelectorAll('.subtotal span');
  let total = 0;
  let result = document.querySelector('#total-value span');
  
  for (let i = 0; i < singleProduct.length; i++) {
    updateSubtotal(singleProduct[i]);
    
    let num = parseInt(allSubTotal[i].innerHTML);
    total += num;
    
    //total.innerHTML += result;
  }
  result.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode);
  //... your code goes here
  //target.parentNode.parentNode.removeChild(target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const input = document.querySelector('.create-product input');
  const price = document.querySelector('.create-product :nth-child(2)');
  let tb = document.querySelector('tbody');
  let newRow = tb.insertRow();
  //console.log(newRow);
  newRow.classList.add('product');
  //newRow.innerHTML = input.value;
  newRow.insertCell(0).innerHTML = input.value;
  newRow.cells[0].classList.add('name');
  newRow.insertCell(1).innerHTML = "$" + "<span>"+ price.value +"</span>";
  newRow.cells[1].classList.add('price');
  newRow.insertCell(2).innerHTML = '<input type="number" value="0" min="0"></input>';
  newRow.cells[2].classList.add('quantity');
  newRow.insertCell(3).innerHTML =  "$" + "<span>0.00</span>";
  newRow.cells[3].classList.add('subtotal');
  newRow.insertCell(4).innerHTML = '<button class="btn btn-remove">Remove</button>';
  newRow.cells[4].classList.add('action');




  //newRow.cells.innerHTML = input.value;
  //newRow.classList.add('name');
  //newRow.ins = newRow.insertCell();
  console.log(price.value);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeItem = document.querySelectorAll('.btn-remove');
  const createNewProduct = document.getElementById('create');

  createNewProduct.addEventListener('click', createProduct)
  calculatePricesBtn.addEventListener('click', calculateAll);
  //console.log(removeItem);

  for(let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener('click', removeProduct);
  }

  //... your code goes here
});
