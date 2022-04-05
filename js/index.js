// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input'); 
  const subtotal = product.querySelector('.subtotal span'); 

  const priceNumber = parseFloat(price.innerText); 

  const quantityNumber = parseInt(quantity.value); 


  const subtotalNumber = priceNumber * quantityNumber;

  subtotal.innerText = subtotalNumber;

  return subtotalNumber;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
 // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');

  const productsArray = [...products];
  let total = 0;

  // update each product on each loop
  productsArray.forEach(product => {
    updateSubtotal(product);

    total += parseFloat(product.querySelector(".subtotal span").innerText);
  });

 const totalValue = document.querySelector("#total-value span");

 totalValue.innerText = total;

  return total;
 
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
  const newProduct = document.querySelectorAll(".create-product input");

  const newProductName = newProduct[0].value;
  const newProductUnitPrice = newProduct[1].value;
  
  const productTemplate = document.querySelector('tbody');
  const newBlock = document.createElement('tr');
    newBlock.classList.add('product');
    newBlock.innerHTML = `<td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductUnitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove" >Remove</button>
  </td>`;
  productTemplate.appendChild(newBlock);


  let removeProductBtn = document.querySelectorAll(".btn-remove");

  removeProductBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  });


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  let removeProductBtn = document.querySelectorAll(".btn-remove");

  removeProductBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});
