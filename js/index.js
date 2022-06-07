// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price=product.querySelector(".price span").innerText;
  let quantity=product.querySelector("input").value;
  let subtotal=Number(price)*quantity
  product.querySelector(".subtotal span").innerText=subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products=document.querySelectorAll(".product")
  products.forEach((product)=>{
    updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  let allSubtotals=document.querySelectorAll(".subtotal span")
  console.log(allSubtotals)

  let totalPrice=0

  allSubtotals.forEach((subtotal)=>{
    console.log("subtotal: "+subtotal);
    totalPrice+=Number(subtotal.innerText)
  })
  document.querySelector("#total-value span").innerText=totalPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name = document.querySelector("[placeholder='Product Name']")
  let value = document.querySelector("[placeholder='Product Price']")

  let product=document.createElement('tr')
  product.className='product'
  product.innerHTML=`
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${value.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `

  let listOfProducts=document.querySelector("tbody")
  listOfProducts.appendChild(product)
  name.value='';
  value.value=0;


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeProductBtn = document.querySelectorAll(".btn-remove");

  removeProductBtn.forEach((removeBtn)=>{
    removeBtn.addEventListener('click', removeProduct);
  })

  let createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener("click", createProduct)
});
