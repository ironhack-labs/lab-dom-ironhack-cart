// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log(price);
  console.log(quantity);

  let priceValue = price.innerHTML;
  console.log(priceValue);

  let quantityValue = quantity.value;
  console.log(quantityValue);

  let subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalValue;
  return subtotalValue;
}
function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here


  const products = document.querySelectorAll(".product")
  let total = document.querySelector("#total-value span")
  let sumTotal = 0

  for (let i = 0; i < products.length; i++){
    sumTotal += updateSubtotal(products[i]);
  }
  console.log(sumTotal)

  total.innerHTML = sumTotal


  

  
  
  
  
  
  
  
  

}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}
// ITERATION 5
  const buttonCreate = document.querySelector('#create');
buttonCreate.onclick = function () {
  console.log("hola")
    createProduct()
}

  



function createProduct() {
  //... your code goes here
  let newProduct = document.createElement('tr');
  newProduct.setAttribute('class', 'product');
  document.querySelector('tbody').appendChild(newProduct);

  let newName = document.querySelector('#newname').value;
  let newPrice = document.querySelector('#newprice').value;

  

  
  newProduct.innerHTML += `
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
          </td>`;
  

}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});
