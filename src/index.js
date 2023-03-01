// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const resultSubtotal = parseInt(price.textContent, 10) * parseInt(quantity.value, 10);
  subtotal.innerText = resultSubtotal.toString();
  return resultSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];
  const total = allProductsArray.reduce((acc, product) => {
    return acc + updateSubtotal(product);
  }, 0) 
  console.log(total);
  // ITERATION 3
  
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = total.toString();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode.parentNode;
  const elmToRemove = target.parentNode.parentNode;
  console.log(elmToRemove);
  parent.removeChild(elmToRemove);
  calculateAll();
  

  
}


// ITERATION 5

function createProduct(event) {
  const inputs= document.querySelectorAll(".create-product td input");
  //use default value if product name is not given
  const productName = inputs[0].value || "Ironhack RUBBER Duck";
  const unitPrice = inputs[1].value.toString();
  parentNode = document.querySelector("#cart tbody");
  const newRow = document.createElement("tr");
  // node.cloneNode could have been used instead of copying the html code and then manipulate the child elements to update product name and price
  newRow.innerHTML = `
    <td class="name"><span>${productName}</span></td>
    <td class="price">$<span>${unitPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  parentNode.appendChild(newRow);
  // trigger load event to add Event Listeners to the new buttons
  dispatchEvent(new Event("load"))
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (button of removeButtons) {
    button.addEventListener("click", removeProduct)
  }
  const addProduct = document.getElementById('create');
  addProduct.addEventListener("click", createProduct);
  //... your code goes here
});
