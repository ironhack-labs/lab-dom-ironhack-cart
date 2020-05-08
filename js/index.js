// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let $price = Number(product.querySelector('.price span').innerText);
  let $quantity = Number(product.querySelector('.quantity input').value);
  let $subTotal = $price * $quantity;
  product.querySelector('.subtotal').querySelector('span').innerHTML = $subTotal;
  return $subTotal;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const $allProducts = document.querySelectorAll('.product');
  let $totalPrice = 0;
  for (let i = 0; i < $allProducts.length ; i++){
    let $subTotal = updateSubtotal($allProducts[i]);
    $totalPrice += $subTotal;
  }
  
  // ITERATION 3
  document.querySelector('#total-value span').innerText = $totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  console.log('The target in remove is:', event);

  //... your code goes here
  let $parentOfProducts = event.path[3];
  let $productToRemove = event.path[2]
  $parentOfProducts.removeChild($productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct(){
  let $newProductElement = document.createElement('tr');
  let $newProductName = document.querySelectorAll('.create-product')[0].querySelectorAll('td')[0].querySelectorAll('input')[0].value;
  let $newProductPrice = Number(Math.round((document.querySelectorAll('.create-product')[0].querySelectorAll('td')[1].querySelectorAll('input')[0].value)*100)/100);
  $newProductElement.setAttribute('class','product');
  $newProductElement.innerHTML =
      `<td class="name">
          <span>${$newProductName}</span>
        </td>
        <td class="price">$<span>${$newProductPrice}</span></td>
        <td class="quantity">
          <input type="number" value="1" min="1" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span></span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>`;
  let $addProductNewHere = document.querySelector('tbody');
  let $newProductRemoveButton = $newProductElement.querySelector('.btn-remove');
  $newProductRemoveButton.addEventListener('click', removeProduct);
  $addProductNewHere.appendChild($newProductElement);
  calculateAll();
}

window.addEventListener('load', () => {
  calculateAll();
  const $calculatePricesBtn = document.getElementById('calculate');
  $calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  let $removeCartButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < $removeCartButtons.length; i++) {
    $removeCartButtons[i].addEventListener('click', removeProduct);
  };

  let $addNewProduct = document.getElementById('create');
  $addNewProduct.addEventListener('click', createProduct);
});
