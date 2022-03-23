// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  // <td class="price">$
  //   <span>25.00</span>
  // </td>
  const price=product.querySelector('.price span');
  // <td class="quantity">
  //   <input type="number" value="1" min="0" placeholder="Quantity" />
  // </td>
  const quantity=product.querySelector('.quantity input');
  const subtotal=price.textContent*quantity.value;
  /* const subtotal=price*quantity; */
  // <td class="subtotal">
  //    $<span>0</span>
  // </td>
  let subtotalTag=product.querySelector('.subtotal span');
  subtotalTag.textContent=subtotal;
  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2
  let totalAmount=0;
  //targeting product class
  const productList=document.querySelectorAll('.product');
  //iterates all over the product list
  productList.forEach((item) => {
    //updates each product subtotal
    const eachItem=updateSubtotal(item);
    //accumulates all values to show final import
    totalAmount+=eachItem;
  });
  // ITERATION 3
  //target <h2 id="total-value">Total: $<span>0</span></h2>
  let finalAmount=document.querySelector('#total-value span');
  //inserting final import on HTML
  finalAmount.textContent=totalAmount;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  //target.parentNode.parentNode.remove();
  target.closest('tr').remove();
}

// ITERATION 5

function createProduct() {

  //... your code goes here
  const tbody=document.querySelector('tbody');
  const template=document.getElementById('template');
  const clone=document.importNode(template.contentEditable, true);
  const name=document.querySelector('create-product > td input').value;
  const price=document.querySelector('create-product > td:nth-of-type(2) input').value;
  clone.querySelector('.name span').textContent=name;
  clone.querySelector('.price span').textContent=price.value.toFixed(2);
  clone.querySelector('.btn-remove').addEventListener('click', removeProduct);
  name.value='';
  price.value='';
  tbody.append(clone);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeButtons=document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  
});


/* <tr class="create-product">
          <td>
            <input type="text" placeholder="Product Name" />
          </td>
          <td>
            <input type="number" min="0" value="0" placeholder="Product Price" />
          </td>
          <td></td>
          <td></td>
          <td>
            <button id="create" class="btn">Create Product</button>
          </td>
        </tr>  */