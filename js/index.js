// ITERATION 1

function updateSubtotal(product) {
   console.log('Calculating subtotal, yey!');
   const price = Number(product.querySelector(".price span").innerText);
   const quantity = Number(product.querySelector(".quantity input").value);
   const subTotal = parseFloat(price) * parseInt(quantity);


   product.querySelector(".subtotal span").innerText = subTotal.toFixed(2); 
    
    return subTotal;
  }

//ITERATION 2

function calculateAll() {
   
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  let total = 0;
  const allProducts = document.getElementsByClassName('.products');
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3

  const totalPlace = document.querySelector("#total-value span");
  totalPlace.innerText = total.toFixed(2);
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const buttonHolder = target.parentElement;
  const productToBeRemoved = buttonHolder.parentElement;
  productToBeRemoved.parentElement.removeChild(productToBeRemoved);

}

// ITERATION 5


function createProduct() {
  const newProductName = document.getElementById("new-product-name");
  const newProductPrice = document.getElementById("new-product-price");
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const productList = document.getElementById("product-list");
  productList.innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  newProductName.value = "";
  newProductPrice.value = 0;
  addRemoveEvent();
});

