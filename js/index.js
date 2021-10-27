// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerText
  let quan = product.querySelector('.quantity input').value
  let subtotal = price * quan;


product.querySelector(".subtotal span").innerText = subtotal

return subtotal
}
// console.log(quan)




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2  ITERATION 3
  const allproducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of allproducts) {
  total += updateSubtotal(product)
  
 
  
  
  document.querySelector("#total-value span").innerText = total


  }


}


calculateAll()
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const unitPrice = document.querySelector('.create-product > td > input[type="number"]').value;
    const productName = document.querySelector('.create-product > td > input[type="text"]').value;
    if (productName === '' || unitPrice === 0) return null;

const create = document.createElement("tr");

  const input = `<tr class="product">
  <td class="name">
      <span>${productName}</span>
  </td>
  <td class="price">$<span>${unitPrice}</span></td>
  <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity"/>
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
      <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

  create.innerHTML = input

  const productsTable = document.querySelector('#cart > tbody');
    productsTable.appendChild(create);

  

  console.log (create)
}
createProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
