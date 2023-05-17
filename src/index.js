// ITERATION 1 - updateSubTotal

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  const priceInput = price.innerText;
  const quantityInput = quantity.value;
  
  const duckCalc = Number(priceInput) * +quantityInput //+ and Number() turn values into numbers
  
  const subtotal = product.querySelector('.subtotal span');
  
  subtotal.innerText = duckCalc;
  
  return duckCalc;
    
  };

  function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2 - calculateAll
 


  
  //const newProduct = document.createElement("");



  // ITERATION 3 - Total

  let total = 0
 const allProducts = document.querySelectorAll('.product')
 console.log(allProducts)
 allProducts.forEach((product) => {total += updateSubtotal(product)} )

const totalHtml = document.querySelector('#total-value span')
totalHtml.innerText = total
  }

// ITERATION 4 - Removing a product

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

const detectRemoveBtn = document.querySelectorAll(".btn btn-remove")
  detectRemoveBtn.forEach((element) => {
  window.addEventListener("click", removeProduct)})
} 


// ITERATION 5 - Creating new products

function createProduct() {
  //... your code goes here
  const newProduct = document.createElement("tr");  
  newProduct.className = "product";
  const productName = document.querySelector('.create-product input[type="text"]').value;
  const productPrice = document.querySelector('.create-product input[type="number"]').value;


  newProduct.innerHTML = `          
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
  console.log(newProduct);


  const parentElementProduct = document.querySelector("tbody");
  console.log(parentElementProduct);


  parentElementProduct.appendChild(newProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const newProductBtn = document.querySelector("#create");
  newProductBtn.addEventListener('click', createProduct);

  //... your code goes here
});

