// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  // <td class="price">$<span>25.00</span></td>
  const quantity = product.querySelector('.quantity input').value;
  // syntax of the line above: variable = tr-class.selector(td-class tag). extracting the value from the element
  const subtotal = price * quantity;

  const subtotalElm = product.querySelector('.subtotal span');
  // innerHTML = you only get the content & without: you get the whole HTML-element

  subtotalElm.innerText = subtotal
  // we not only access a "deeper layer" but we also change it here
  return subtotal
}

function calculateAll() {
  //  updateSubtotal()
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

// ITERATION 2
  const productHTMLColl = document.getElementsByClassName('.product');
  const productArr = [...productHTMLColl]

  let total = 0;
  
  productArr.forEach(product => {
    total += updateSubtotal(product)
  })

// ITERATION 3
  const totalElm = document.getElementById('total-value').innerHTML
  totalElm.innerHTML = total;
  // <h2 id="total-value">Total: $<span>0</span></h2>
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
