// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').valuegot ;
  let subtotal = price*quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsArray= document.getElementsByClassName('product');
  console.log(productsArray);
  let total = 0;
  for (let i = 0; i <productsArray.length; i++) {
     updateSubtotal(productsArray[i]);
      total += updateSubtotal(productsArray[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const removeItem = document.querySelector('tbody')
  removeItem.removeChild(target.parentNode.parentNode);
  calculateAll()

}

// ITERATION 5

function createProduct() {
  const createProductRow = document.querySelector(".create-product");
  const newProductNameInputValue = createProductRow.querySelector("input").value;

  const newProductPriceValue = createProductRow.querySelector("input[type='number']");

  const newProductPrice = Number(newProductPriceValue.value).toFixed(2);

  const newProductRow = document.createElement("tr") 
  newProductRow.className= "product";
   newProductRow.innerHTML = `<tr class="product">
    <td class="name"> <span>${newProductNameInputValue}</span></td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity"> <input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
   </tr>  `;

const productTableBody = document.querySelector("tbody");
productTableBody.appendChild(newProductRow);

const newProductRemoveButton = newProductRow.querySelector(".btn-remove");
newProductRemoveButton.addEventListener("click", removeProduct);


  // ... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn-remove');
  for(let i =0;i < removeButton.length;i++){
  removeButton[i].addEventListener('click', removeProduct)
}

const productCreateButton = document.getElementById('create');
productCreateButton.addEventListener('click', createProduct)
  //... your code goes here
});
