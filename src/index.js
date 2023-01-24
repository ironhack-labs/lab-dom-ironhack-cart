// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span");
  let inputNum = product.querySelector(".quantity input");
  let subTotalPrice = product.querySelector(".subtotal span")
  
  return subTotalPrice.innerHTML = price.innerHTML * inputNum.value
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  let eachProduct = document.getElementsByClassName("product");
    
  
    for(let i = 0; i < eachProduct.length; i++){
      updateSubtotal(eachProduct[i])
    }
    
  
  
  

  // ITERATION 3
  let total = document.querySelector("#total-value span");
  let sum = 0
  for(let i = 0; i < eachProduct.length; i++){
    sum += updateSubtotal(eachProduct[i])
    total.innerHTML = sum
  }
  return sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
    let eachRemove = target.parentNode.parentNode
    eachRemove.remove()
  }
  

  


// ITERATION 5

function createProduct() {
  let createRow = document.querySelector(".create-product");
  let newProductInput = createRow.querySelector("input");
  let newProductValue = newProductInput.value;
  let newProductPrice = createRow.querySelector("input[type='number']");
  let newPriceValue = Number(newProductPrice.valueAsNumber).toFixed(2);

 
  let newTableRow = document.createElement('tr');
  newTableRow.className = "product"
  newTableRow.innerHTML = `
      <td class="name">
      <span>${newProductValue}</span>
    </td>
    <td class="price">$<span>${newPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
    `
  
  const parent = document.querySelector('#cart tbody');

  
  parent.appendChild(newTableRow);

  
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);


  newProductInput.value = '';
  newProductPrice.value = 0;

  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  //... your code goes here
const removeButton = document.getElementsByClassName("action")
for(let i = 0; i < removeButton.length; i++){
  removeButton[i].addEventListener("click", removeProduct)
}

const createButton = document.getElementById("create")
if(createButton){
createButton.addEventListener("click", createProduct)
}
});
