// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const total = price * quantity;
  product.querySelector('.subtotal span').innerText = total;
  return total;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  total = 0;
  products.forEach(product => {
    total += updateSubtotal(product);
    });

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}


/*Users should be able to remove products from their carts. 
For that purpose, every product row in our table has a "Remove" button at the end.

But let's approach to solving our problem in bits and pieces. 
Inside the existing `window.addEventListener()`, start with querying the document 
for all "Remove" buttons, loop through them, and add a `click` event listener to each, 
passing a named function `removeProduct` as the callback argument. 
If you need a hint on how to do this, just take a look at how we did it with 
adding event listener on the `calculatePricesBtn`.

We already declared `removeProduct(event)` and added some starter code.
 After you are done with querying the remove buttons and adding the `click` event 
 listener on them, open the console and click on any `Remove` button.

As we can see, `removeProduct(event)` expects the event as a single argument, 
and that is going to trigger the removal of the corresponding product from the cart.

:bulb: Tip: To access the element an event was fired on, you can 
reference `event.currentTarget`. To remove a node from the DOM, you need to 
access its parent node and 
call [`removeChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) on it. You can access the parent of a DOM node from its property `parentNode`.

Make sure the price gets updated accordingly when you remove products from the shopping cart.

Click [here](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_17b1e9e4d2606239163dddbc5b2a3d9f.gif) to see the expected result.
*/

// ITERATION 5

function createProduct() {
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const remove = document.querySelectorAll('.product action btn btn-remove');
  remove.forEach(removeButton => {
  remove.addEventListener('click', removeProduct);
  });
});