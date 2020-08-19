// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity= product.querySelector('.quantity input').value;
  const subTotalPrice = price*quantity;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = `${subTotalPrice}`
  return subTotalPrice;
}

  // ITERATION 2
  // const getAllTotal= 
  


  // ITERATION 3
  //... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total= 0;
  const allProducts =document.querySelectorAll('.product').forEach(function(element){
    updateSubtotal(element);
    total += updateSubtotal(element)
  }) 
  console.log(total)
  document.querySelector(`#total-value span`).innerHTML = total

  }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const grandParent= target.parentNode.parentNode;
  grandParent.remove();
  console.log(grandParent);
  calculateAll();
}

// ITERATION 5

function createProduct(product) {
  const productName = document.querySelector(".create-product input[type='text']").value;
  console.log(productName);
  const productPrice= document.querySelector(".create-product input[type='number']").value;
  console.log(productPrice);
  const newRow= document.createElement('tr') 
  newRow.innerHTML= `
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `
  newRow.classList.add("product");
  const table= document.querySelector('tbody').appendChild(newRow);
  newRow.querySelector(".btn-remove").addEventListener('click',removeProduct)
  console.log(table);
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(function(button){
  button.addEventListener('click',removeProduct);
  });

  const createProductBtn= document.getElementById('create');
  createProductBtn.addEventListener('click',createProduct);
});
