// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let valPrice = price.innerHTML;
  let valQuantity = quantity.value;

  let subTotal = valPrice  * valQuantity;
  console.log(subTotal);

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = document.getElementsByClassName('product');
  for(i=0;i<products.length;i++){
    singleProduct = products[i];
    //console.log(singleProduct);
    total += updateSubtotal(singleProduct);
  }  

  // ITERATION 3
  //... your code goes here
  console.log(total);
  let sumTotal = document.querySelector('#total-value span');
  sumTotal.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = event.target.parentElement;
  const grandFather = parent.parentElement;
  const princ = grandFather.parentElement;

  princ.removeChild(grandFather);  

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProducName = document.getElementById('new-Name');
  let newPrice = document.getElementById('new-Price');

  let newProduct = `<tr class="product">
      <td class="name">
        <span>${newProducName.value}</span>
      </td>
      <td class="price">$<span>${newPrice.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;

    let tableProduct = document.querySelector('tbody');

    tableProduct.innerHTML += newProduct;

    //newProducName.innerHTML = '';
    //newPrice.innerHTML  = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const btnRemove = document.getElementsByClassName('btn-remove');
  for(i=0;i<btnRemove.length;i++){
    btnRemove[i].addEventListener('click', removeProduct);
  }

  //console.log(btnRemove);
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
