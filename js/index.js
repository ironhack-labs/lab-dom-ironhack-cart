// ITERATION 1

function updateSubtotal(product) {

    if (product === null){
      return 0
    };

  const price = product.querySelector('.price span').innerHTML;
  
  const quantity = product.querySelector('.quantity input').value;

  let subtotal = price * quantity

  const subT = product.querySelector(".subtotal span");
  subT.innerHTML = `${subtotal}`

  return subtotal
}

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);


// ITERATION 2 & 3

  let productList = document.querySelectorAll('.product');

  let totalPrices = 0;
  
  productList.forEach(singleProduct => {
    totalPrices += updateSubtotal(singleProduct)
  });
 
  let printTotal = document.querySelector("#total-value span");
  printTotal.innerHTML = `${totalPrices}`
};


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  let product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);

  calculateAll();
}

// ITERATION 5

function createProduct() {

  const newProductName = document.querySelector(".create-product :nth-child(1) input").value;
  const newProductPrice = document.querySelector(".create-product :nth-child(2) input").value;
  
  let productCart = document.querySelector("#cart tbody");
  productCart.innerHTML += `<tr class="product">
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
</tr>`

document.querySelector(".create-product :nth-child(1) input").value = "Product Name";
document.querySelector(".create-product :nth-child(2) input").value = 0;

const removeBtnList = document.querySelectorAll(".action .btn-remove");

removeBtnList.forEach(removeBtn => removeBtn.addEventListener('click', removeProduct));

};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtnList = document.querySelectorAll(".action .btn-remove");

  removeBtnList.forEach(removeBtn => removeBtn.addEventListener('click', removeProduct));

  let createBtn = document.querySelector("#create");
  createBtn.addEventListener('click', createProduct);
});
