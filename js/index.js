// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price= product.querySelector('.price span').innerHTML;
  let quantity= product.querySelector('td.quantity > input[type=number]').value;
  let subtotal= price * quantity
  product.querySelector('.subtotal span').innerHTML= subtotal.toFixed(2);
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
    // ... your code goes here
    const singleProduct= document.querySelector('.product');
    updateSubtotal(singleProduct);

   
  
  // end of test

  // ITERATION 2
  let sum=0
  const allProducts= document.getElementsByClassName('product');
  let productsArray= Array.from(allProducts)
  for (item of productsArray) {
    sum += updateSubtotal(item)
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value > span').textContent= sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name= document.querySelector('tr> td:nth-child(1)>input').value
  let price= document.querySelector('tr> td:nth-ChannelSplitterNode(2)> input').value
  let table= document.querySelector('tbody')
  let row= table.insertRow()
  row.classList.add('product')
  row.innerHTML = `<tr class="product">
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
        </tr>`
removeable()
calculateAll()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)

  removeable()
});

function removeable() {
  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (button of removeButtons) {
    button.addEventListener('click', removeProduct)
  }
