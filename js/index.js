// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity>input').value;
  const price = product.querySelector('.price>span').innerHTML;
  
  const subHTML = product.querySelector('.subtotal>span');
  const subTotal = document.createTextNode(`${quantity*price}`);
  
  subHTML.innerText = '';
  subHTML.appendChild(subTotal);

  //... your code goes here
}

function calculateTotal (product) {
  let total = 0;
  
  product.forEach(function (product){

    total += Number(product.querySelector('.subtotal>span').innerHTML);
    
  })
 
  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productList = document.querySelectorAll('.product');
  const totalHTML = document.querySelector('#total-value>span');
  totalHTML.innerText = '';
  
  
  // end of test

  //ITERATION 1 + 2
  //... your code goes here
  productList.forEach( function (product){
    updateSubtotal(product);    
  });
  
  
  // ITERATION 3
  //... your code goes here
  const total = document.createTextNode(calculateTotal(productList));
  totalHTML.appendChild(total)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  document.querySelectorAll('#cart>tbody').forEach(function (product){
     console.log(product)
     product.removeChild(target)
   })
 
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  //Step 1: Get the content from the textbox (Name and price)
  const product = document.querySelector('.create-product');
  const productName = product.querySelector('.product-description');
  const productPrice = product.querySelector('.product-price');

  let addedName = productName.value;
  let addedPrice = Number(productPrice.value);

  const parent = document.querySelector('#cart>tbody')
  const newProduct = `
        <tr class="product">
          <td class="name">
            <span>${addedName}</span>
          </td>
          <td class="price">$<span>${addedPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`
  
  parent.insertAdjacentHTML('beforeend',newProduct)

  productName.value = ''
  productPrice.value = 0

  calculateAll()

  const removeButton1 = document.querySelectorAll('.btn-remove')  
  removeButton1.forEach(function (button){
  button.addEventListener('click',removeProduct)})

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeButton = document.querySelectorAll('.btn-remove')
  removeButton.forEach(function (button){
    button.addEventListener('click',removeProduct)
  })
    
  document.querySelector('#create').addEventListener('click',createProduct)
 
});
