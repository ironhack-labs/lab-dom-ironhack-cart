// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(`.price span`).innerText;
  const quantity = product.querySelector(`.quantity input`).value;
  
  const calculateSubtotal = price * quantity;

  const subtotal = product.querySelector(`.subtotal span`);

  subtotal.innerText = calculateSubtotal;

  return calculateSubtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
    const products = document.getElementsByClassName(`product`);

    let total = 0;
    for(let i = 0; i < products.length; i++){
      total += updateSubtotal(products[i]);
        
    };

  // ITERATION 3
    const totalValue = document.querySelector(`#total-value span`);

    totalValue.innerText = total;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  
  const tbody = target.parentNode;

  tbody.removeChild(target);

  calculateAll();
}  

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(`#product-name`).value;
  const productPrice = document.querySelector(`#product-price`).value;

  const allProducts = document.querySelector(`tbody`);

  allProducts.innerHTML += `
  <tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll(`.btn-remove`);
  removeButton.forEach(element => {
    element.onclick = removeProduct;
  });
    

  const newProduct = document.getElementById(`create`);
    newProduct.onclick = createProduct;
    
});
