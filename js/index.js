const removebtn = document.getElementsByClassName("btn-remove");

// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const price = Number(priceElement.innerHTML);
  const quantity = Number(quantityElement.value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    totalPrice += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = `${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const targetProduct = event.currentTarget.parentElement.parentElement;
  //console.log('The target in remove is:', target);
  targetProduct.parentNode.removeChild(targetProduct);
  calculateAll();
  //console.log(targetProduct);
}

// ITERATION 5

function createProduct() {
  const newProdName = document.querySelector('.create-product td input').value;
  const unitPrice = document.querySelector('.create-product td input[type="number"]').value;
  const rowContainer = document.querySelector('#cart tbody');
  rowContainer.innerHTML += `<tr class="product">
 <td class="name"><span>${newProdName}</span></td>
 <td class="price">$<span>${unitPrice}</span></td>
 <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
 </td>
 <td class="subtotal">$<span>0</span></td>
 <td class="action">
  <button class="btn btn-remove">Remove</button>
 </td></tr>`;
 //Two following lines possible with rowContainer.createElement
 // const lastBtn = rowContainer.querySelector(".product:last-of-type").querySelector(".btn-remove");
 //lastBtn.onclick = removeProduct;
 listenRemoveButtons()
}


function listenRemoveButtons() {
  for (let i = 0; i < removebtn.length; i++) {
    removebtn[i].onclick = removeProduct;
  }; 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProdBtn = document.getElementById('create');
  createProdBtn.onclick = createProduct;
  
  listenRemoveButtons()

});

//console.log(updateSubtotal());