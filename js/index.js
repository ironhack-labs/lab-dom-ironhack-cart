// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const total = price.textContent * quantity.value;

  const subTotal = product.querySelector('.subtotal span')
  subTotal.textContent = total
  return total
}

function calculateAll() {
 
  /*// code in the following two lines is added just for testing purposes.
 // it runs when only iteration 1 is completed. at later point, it can be removed.
 const singleProduct = document.querySelector('.product');
 updateSubtotal(singleProduct);
 
 // end of test */

  // ITERATION 2
 const products = document.querySelectorAll(".product")
 const total = document.querySelector("#total-value span")
   let sumTotal = 0
  for (let i = 0; i < products.length; i++) {
    sumTotal += updateSubtotal(products[i])
  }
  total.textContent = sumTotal
  // ITERATION 3
  //... your code goes here
}
// ITERATION 4

/*function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}*/

// ITERATION 5

function createProduct() {
  
  const newPrice = document.querySelector(".newPrice").value
  const newName = document.querySelector(".newName").value

  const cartBody = document.querySelector('#cart tbody');

  let newProduct = document.createElement('tr');
  newProduct.innerHTML = `<tr class="product">
          <td class="name">
            <span>${newName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  cartBody.appendChild(newProduct);

  /*
  let newProduct = document.createElement('tr');
  newProduct.className = 'product';
  const name = document.createElement('td');
  name.className = 'name';
  const nameSpan = document.createElement('span');
  nameSpan.appendChild(document.createTextNode(newName));

  name.appendChild(nameSpan);
  newProduct.appendChild(name);
  cartBody.appendChild(newProduct);
  */
}

let createProductButton = document.getElementById('create');

createProductButton.addEventListener('click', function(evt) {
  createProduct();
});


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);



  //... your code goes here
});
