// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input[type="number"]').value

  const subtotalPrice = price * quantity

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalPrice 
  return subtotal
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0 
  allProducts.forEach(product => {
    updateSubtotal(product)
    total += Number(updateSubtotal(product).innerText)
  });

  // ITERATION 3
  //... your code goes here
  const totalSelector = document.querySelector('#total-value span')
  totalSelector.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProductButton = document.querySelector('button#create.btn')

   createProductButton.onclick = () => {
     const newProductName = document.querySelector('.create-product input[type="text"]').value
     const newPriceUnit = document.querySelector('.create-product input[type="number"]').value

     const newProductLine = document.querySelector('tbody')
     newProductLine.innerHTML += `        <tr class="product">
          <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newPriceUnit}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`

   }
}
createProduct()


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
