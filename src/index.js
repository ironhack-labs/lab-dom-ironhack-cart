// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value
  console.log('Calculating subtotal, yey!');
  //... your code goes here 

  let sub = quantity * price;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = `${sub}`;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //  const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here

  let products = document.getElementsByClassName('product')

  let total = 0
  let productArr = [...products]
  productArr.forEach((e) => {
    updateSubtotal(e); 
  total += parseFloat(e.querySelector('.subtotal span').innerHTML);
});
  // document.getElementById("total-value").innerHTML = 
  // `Total: $${total}`;
  
 
  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerHTML = `${total}`

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
 target.closest("tr").remove();
  calculateAll()

}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  let productName = document.querySelector('.create-product input[placeholder="Product Name"]').value;
  let priceProduct = document.querySelector('.create-product input[placeholder="Product Price"]').value;


  const newProduct = document.createElement("tr");
  newProduct.innerHTML = `<td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${priceProduct}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

const cart = document.querySelector("#cart tbody");
cart.appendChild(newProduct)

// productName.value = "";
// price.value = "";

const newRemoveBtn = cart.querySelectorAll(".btn-remove");
  newRemoveBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
;

document.querySelector('.create-product input[placeholder="Product Name"]').value = ""
document.querySelector('.create-product input[placeholder="Product Price"]').value = ""

// event.preventDefault();

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
    removeProductBtn.forEach((e) => {
      e.addEventListener('click', removeProduct)
    })
    
    const createBtn = document.getElementById('create');
  createBtn.addEventListener("click", createProduct);
})
//   //... your code goes here
//   window.addEventListener('load', () => {
//     const removeProductBtn = document.querySelectorAll('.btn-remove');
//     removeProductBtn.forEach((e) => {
//       e.addEventListener('click', removeProduct)
//     })
// });

// window.addEventListener('load', () => {
//   const createBtn = document.getElementById('create');
//   createBtn.addEventListener("click", createProduct);
// });




