// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subT = quantity * price;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = `${subT}`;
  console.log("Calculating subtotal, yey!");
   //... your code goes here
}

  

 

function calculateAll() {
 

  // ITERATION 2
  //... your code goes here
  let total = 0;
  let list = document.getElementsByClassName("product")
  let products = [...list]
  products.forEach(product => {updateSubtotal(product)
  
  total += parseFloat(product.querySelector(".subtotal span").innerHTML)
})
  
  // ITERATION 3
  //... your code goes here
  
  document.querySelector("#total-value span").innerHTML = `${total}`
  
}

// ITERATION 4
function removeProduct(event) {
  console.log(event);
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.closest("tr").remove();
  calculateAll();
  //... your code goes here
  
}


window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
});

window.addEventListener("load", () => {
  const removeProductBtn = document.getElementsByClassName("btn-remove");
  let rmvBtns = [...removeProductBtn];
  rmvBtns.forEach((e) => {
    e.addEventListener("click", removeProduct);
  });
});

// ITERATION 5

function createProduct() {

const nameProduct = document.querySelector('.create-product input[placeholder="Product Name"]').value
const priceProduct = document.querySelector('.create-product input[placeholder="Product Price"]').value


 const cart = document.querySelector("#cart tbody")
 const newProduct = `<tr class="product">
 <td class="name">
   <span>${nameProduct}</span>
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

cart.innerHTML += newProduct


const newRemoveBtn = cart.querySelectorAll(".btn-remove");
  newRemoveBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
  
document.querySelector('tfoot input[placeholder="Product Name"]').value = ""
document.querySelector('tfoot input[placeholder="Product Price"]').value = 0

calculateAll();
}

window.addEventListener('load', () => {
  const createBtn = document.getElementById('create')
  createBtn.addEventListener("click", createProduct)
})

