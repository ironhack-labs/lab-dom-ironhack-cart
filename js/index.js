// ITERATION 1
function updateSubtotal(product) {
  let priceElements = Number(product.querySelector(".price span").innerText);
  let quantityElements = Number(product.querySelector(".quantity input").value); 
  let total = priceElements * quantityElements; 
  product.querySelector(".subtotal span").innerText = String(total);
  return total
}

function calculateAll() {

let myProducts = document.querySelectorAll(".product");
let total = 0; // total de mes sb totaux
myProducts.forEach((product)=>{
  total += updateSubtotal(product);
}); // 

let totalPrice = document.querySelector("#total-value span");
totalPrice.innerText =String(total); 
}

// ITERATION 4
function removeProduct(event) {

  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
 const elementToRemove = target.parentNode.parentNode;
 elementToRemove.remove();
calculateAll();
}

// ITERATION 5

function createProduct() {

//DOM ELEMENTS
let inputNewProductName = document.querySelector("#inputAddName");
let inputNewProductPrice = document.querySelector("#inputAddPrice");

// CLONE

let row = document.querySelector(".product"); 
let clone = row.cloneNode(true); 
let table = document.querySelector("#cart");

clone.innerHTML = ` <tr class="product">
          <td class="name">
            <span>${inputNewProductName.value}</span>
          </td>
          <td class="price">$<span>${inputNewProductPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity">
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

 table.appendChild(clone); 

}


window.addEventListener('click', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
removeProductBtn.forEach((elm) =>{
  elm.addEventListener("click", removeProduct)
});

const addProductBtn = document.querySelector('#create');
addProductBtn.addEventListener('click', createProduct);

});

