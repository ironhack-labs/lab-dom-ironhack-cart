// ITERATION 1
// js/index.js

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

window.addEventListener('load', () => {

  let arrayBtn = document.querySelectorAll('.btn-remove');

  for (let i = 0; i < arrayBtn.length; i++){

      let removeBtn = arrayBtn[i].addEventListener('click', removeProduct)
      

  }
});

window.addEventListener('load', () => {

  const createBtn = document.getElementById("create");
  createBtn.addEventListener('click', createProduct);
});






function updateSubtotal(product) {

  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotalPrice = price*quantity;
  
  let subtotal = product.querySelector(`.subtotal span`);
  subtotal.innerHTML = subtotalPrice;

  return parseFloat(subtotal.innerHTML);

  
  //... your code goes here
}












//-------------------------------------------
function calculateAll() {
  
let total = 0;

console.log("esto es el total inicial "+total);

let productArr = document.querySelectorAll(".product");

if(productArr == 1){

  updateSubtotal(productArr[0]);
  console.log('hola entre en el primer if');
  const totalCart = document.querySelector("h2 span");
  totalCart.innerHTML = productArr[0];
}
else{
  for(let i = 0; i<productArr.length; i++){

    let singleProduct = updateSubtotal(productArr[i]);
  
    total = total + singleProduct;
  
    }
    console.log("esto es el total final "+total);
    
    // ITERATION 3
    //... your code goes here
    const totalCart = document.querySelector("h2 span");
    totalCart.innerHTML = total;
}


}

// ITERATION 4

function removeProduct(event) {
  
  console.log("FUNCIONO");
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);

  target.innerHTML = ``;
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("HOLA");
  productName = document.querySelectorAll(".create-product input")[0].value;
  unitPrice = document.querySelectorAll(".create-product input")[1].value;

  const newProduct = 
`<tr class="product"> 
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${unitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
document.querySelector('tbody').innerHTML+= newProduct;



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
