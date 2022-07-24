// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!'); 
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = price*quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;
  
}

function calculateAll() {

  // ITERATION 2
   const product = document.getElementsByClassName("product");
   const arrayProduct = [...product] 
   let total = 0;
   
   for (let i = 0; i< arrayProduct.length; i++){
    total += updateSubtotal(arrayProduct[i]);
   }

   document.querySelector("#total-value span").innerHTML = total;
   
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let rowParent = target.parentNode.parentNode.parentNode;
  let rowChild = target.parentNode.parentNode;

  rowParent.removeChild(rowChild)

  calculateAll()

}

// ITERATION 5

function createProduct() {
let nameProduct = document.querySelector(".create-product input[type='text']").value;
let priceProduct = document.querySelector(".create-product input[type='number']").value;
console.log(nameProduct)
console.log(priceProduct)

if (nameProduct != "" && priceProduct != 0) {

document.querySelector("tbody").innerHTML += 
`<tr class="product">
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
</tr>`;

document.querySelector(".create-product input[type='text']").value = null;
document.querySelector(".create-product input[type='number']").value = 0;

} else {
  console.log("falta información");
}
removeProductBtn()

}

function removeProductBtn() {

  const removeBtnNode = document.querySelectorAll('.btn-remove')
    const removeBtn = [...removeBtnNode];
    for (let i = 0; i < removeBtn.length; i++ ) {
      removeBtn[i].addEventListener('click', removeProduct);
    }
  
  }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  const createNewProductNode = document.querySelectorAll('#create')
  const createNewProduct = [...createNewProductNode];
  for (let i=0; i< createNewProduct.length; i++) {
    createNewProduct[i].addEventListener('click', createProduct)
  }

  removeProductBtn()
  
})

