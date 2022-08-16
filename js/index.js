// ITERATION 1

function updateSubtotal(product) {

  const price = parseFloat(product.querySelector('.price span').innerText)
  
  const quantity = parseInt(product.querySelector('.quantity input').value)
  
  product.querySelector('.subtotal span').innerText = (price*quantity)
  
  return price*quantity

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let sum_total = 0

  for (let i = 0; i < products.length; i++) {
    sum_total += updateSubtotal(products[i])
  }
  
  document.querySelector('#total-value span').innerText = sum_total

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
const remove_buttons = document.querySelectorAll('.btn-remove')
remove_buttons.forEach(button => {
  button.addEventListener('click', removeProduct)
})


function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();
  calculateAll();
  

}

// ITERATION 5 Making the create button and functionality

let create_button = document.querySelector('#create')
create_button.addEventListener('click', createProduct);



function createProduct() {

  let name = document.querySelector('.create-product input[type=text]').value;
  let price = document.querySelector('.create-product input[type=number').value;
  // select the price and name from the input
  //use .value to take the current value

  const new_product = document.createElement('tr');
  new_product.setAttribute('class','product')
  // make the new table row and add the class=product to it
  
  let new_product_html = `
  <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
        `
  new_product.innerHTML = new_product_html
  // set the new innerHTML of the tr with the template from prev
  //and put variables from input fields


  new_product.querySelector('.btn-remove').addEventListener('click', removeProduct)
  new_product.querySelector
  // don't forget to add button functionality to the buttons
  const table_body = document.querySelector('tbody');
  table_body.appendChild(new_product)
  // selecting the table and appending the child
  calculateAll();
  // calculating all prices again just in case

  document.querySelector('.create-product input[type=text]').value = ''
  document.querySelector('.create-product input[type=number').value = ''
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
});
