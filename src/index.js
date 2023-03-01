// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText * 1;
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = price * quantity;

  product.querySelector(".subtotal span").innerText = subTotal;

  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProduct = document.getElementsByClassName('product');
  const multipleProductArry = [...multipleProduct];
  let total = 0;
  multipleProductArry.forEach(element => {
    total += updateSubtotal(element);
  });
  document.querySelector("#total-value span").innerText = total;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const elementToRemove = target.parentNode.parentNode

  if (elementToRemove.parentNode) {
    elementToRemove.parentNode.removeChild(elementToRemove);
  }
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("creation function");

  const newProduct = document.querySelectorAll(".create-product input");
  const newProductArray = [...newProduct];
  const productname = newProductArray[0].value;
  const productPrice = newProductArray[1].value;

  const newHtmlProduct = document.createElement('tr');
  newHtmlProduct.className = "product";
  newHtmlProduct.innerHTML = `
          <td class="name">
            <span>${productname}</span>
          </td>
          <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  const parentElm = document.querySelector("tbody")
  parentElm.appendChild(newHtmlProduct);
  newProductArray[0].value = '';
  newProductArray[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', () => {
      removeProduct(event);
    });
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  //... your code goes here
});
