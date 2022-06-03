// ITERATION 1


function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity>input').value;
  const subTotal = price * quantity;
  
  product.querySelector('.subtotal span').innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {

  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(product => {
    total += updateSubtotal(product);
  })
  

  // ITERATION 3
  let totalValueBox = document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productNode = target.parentNode.parentNode;
  productNode.remove();
}

// ITERATION 5

function createProduct() {

  const inputs = document.querySelector('.create-product').querySelectorAll('input');
  console.log(inputs);
  console.log(inputs[0]);
  const name = inputs[0].value;
  const price = inputs[1].value;
  
  console.log(name, price)
  let productStructure=`
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
    `
    const node = document.createElement("tr");
    node.classList= "product";
    node.innerHTML = productStructure;
    node.querySelector('.btn-remove').addEventListener('click',removeProduct);


    document.querySelector('tbody').appendChild(node);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const remvoeButtons = document.querySelectorAll('.btn-remove');
  remvoeButtons.forEach(button =>{
    button.addEventListener('click',removeProduct);
  })

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click',createProduct);


  //... your code goes here
});
