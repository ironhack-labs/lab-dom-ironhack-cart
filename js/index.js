// ITERATION 1: This function calculates the subtotals of all the products in the cart.
function updateSubtotal(product) {
  let $price = Number(product.querySelector('.price span').innerText);
  let $quantity = Number(product.querySelector('.quantity input').value);
  let $subTotal = $price * $quantity;
  product.querySelector('.subtotal').querySelector('span').innerHTML = $subTotal;
  return $subTotal;
}

  // ITERATION 2: This function calculates the total price of all the products in the cart.
function calculateAll() {
  const $allProducts = document.querySelectorAll('.product');
  let $totalPrice = 0;
  for (let i = 0; i < $allProducts.length ; i++){
    let $subTotal = updateSubtotal($allProducts[i]);
    $totalPrice += $subTotal;
  }
  
  // ITERATION 3: This line of code will update the total price upon changes in the products
  document.querySelector('#total-value span').innerText = $totalPrice;
}

// ITERATION 4: This function removes the products, event based
function removeProduct(event) {
  // console.log('The target in remove is:', event);

  let $parentOfProducts = event.path[3];
  let $productToRemove = event.path[2]
  $parentOfProducts.removeChild($productToRemove);
  calculateAll();
}

// ITERATION 5: This function creates the product, event based and triggers the price update.
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

// The event listener that is triggered on loading the page.
window.addEventListener('load', () => {
  let $arrayOfProductQuantities = document.querySelectorAll('.quantity');
  calculateAll();
  const $calculatePricesBtn = document.getElementById('calculate');
  $calculatePricesBtn.addEventListener('click', calculateAll);
  
  let $removeCartButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < $removeCartButtons.length; i++) {
    $removeCartButtons[i].addEventListener('click', removeProduct);
  };

  let $addNewProduct = document.getElementById('create');
  $addNewProduct.addEventListener('click', createProduct);

  // OWN ITERATION: This event listener is created to automatically update the subtotals upon changes in the products, works almost ;).
  let $arrayProductQuantityInputs = document.querySelectorAll('.quantity input');
  for (let i = 0; i < $arrayProductQuantityInputs.length; i++) {
    ($arrayProductQuantityInputs[i]).addEventListener('change', calculateAll);
  }
});

// 