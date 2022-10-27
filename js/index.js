// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  //... your code goes here
  const quantity = product.querySelector(`.quantity input`).value; 
  var subTotCalc = price * quantity;
  const subTotal = product.querySelector(`.subtotal span`).innerHTML = subTotCalc;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
let total = 0
const allProductsSubtotal = document.getElementsByClassName(`product`);
for (let i = 0; i < allProductsSubtotal.length; i++)  {
 updateSubtotal(allProductsSubtotal[i]);
 /**/
  // ITERATION 3
  total += updateSubtotal(allProductsSubtotal[i]);
 };
 document.querySelector('#total-value span').innerHTML = total;
};
// ITERATION 4



function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  const childProduct = target.parentNode.parentNode;
  const parentProduct = childProduct.parentNode;
  parentProduct.removeChild(childProduct);
  calculateAll();
};



// ITERATION 5

function createProduct() {
  //... your code goes here
  /*
  const = name, price, tbody selector
  create inner html structure.
    tr = document 
  tr clas list add
  let remove product buttn. tr button selector
  remove btn. add listener (click, removeproduct)
  remeber add remove event listener */
  let newProductName = document.querySelector('.create-product input').value;
  let newProductPrice = parseFloat(document.querySelector('.create-product').children[1].querySelector('input').value);
  let table = document.getElementById('cart').children[1];

  table.innerHTML += (`<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`);


document.querySelectorAll('.btn.btn-remove').forEach((button) => {
  button.addEventListener('click', removeProduct);
});


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = [...document.getElementsByClassName('btn btn-remove')];
  removeProductBtn.forEach((element) => {
          element.addEventListener('click', removeProduct, true);
  });

  const createProductBtn = document.getElementById(`create`);
  createProductBtn.addEventListener('click',createProduct);


});