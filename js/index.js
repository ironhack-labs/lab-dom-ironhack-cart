// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subtotal = product.querySelector(".subtotal span"); 
  const subtotalPrice = price * quantity;
  subtotal.textContent = subtotalPrice.toFixed(2);

  return subtotalPrice;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/

  // end of test

  // ITERATION 2 // ITERATION 3
  const allProducts = document.querySelectorAll(".product");
  const total = document.querySelector('#total-value span');
  let allProductsPrice = 0;
  allProducts.forEach((product) => {
    allProductsPrice = allProductsPrice + updateSubtotal(product);
  });

  total.innerText = allProductsPrice.toFixed(2);
  
  

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();

  calculateAll()
 
}

// ITERATION 5

 function createProduct() {
  /*const tbody = document.querySelector("tbody");
  const crearProd = document.querySelector(".create-product input");
  const crearNombre = crearProd[0].value;
  const crearPrecio = crearProd[1].value;
  
  const nuevoTr = document.createElement("tr");
  nuevoTr.className = "product";
  nuevoTr.innerHTML = `
  <td class="name">
  <span>${crearNombre}</span>
  </td>
  <td class="price">$<span>${crearPrecio}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;

tbody.appendChild(nuevoTr)*/


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  })

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
  
})

