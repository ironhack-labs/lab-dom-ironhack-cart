function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = parseInt(price)*quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal
}


function calculateAll() {
  let eachProduct = 0
  const multipleProducts = document.getElementsByClassName('product');
  for(let i = 0; i<multipleProducts.length; i++){
    eachProduct += updateSubtotal(multipleProducts[i])
  }
  document.querySelector('#total-value span').innerHTML = eachProduct;

}


function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove()
  calculateAll()  

}


function createProduct() {

  const productsList = document.querySelector('tbody')
  productsList.innerHTML += `
  <tr class="product">
    <td class="name">
      <span>${document.getElementById('newProductName').value}</span>
    </td>
    <td class="price">$<span>${document.getElementById('newProductPrice').value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  const removeElements = document.getElementsByClassName('btn btn-remove');
  for(let i = 0; i<removeElements.length; i++){
    removeElements[i].onclick = removeProduct;
  }
  document.getElementById('newProductName').value= ''
  document.getElementById('newProductPrice').value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeElements = document.getElementsByClassName('btn btn-remove');
  for(let i = 0; i<removeElements.length; i++){
    removeElements[i].onclick = removeProduct;
  }

  document.getElementById('create').onclick = createProduct;

});


