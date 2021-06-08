// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  
  let subtotal = price.innerHTML * quantity.value;

  product.querySelector('.subtotal span').innerHTML = subtotal;
  
  console.log('Calculating subtotal, yey!');
  return subtotal;
  
  //... your code goes here
}

function calculateAll() {

const products = document.getElementsByClassName("product");
let sum = 0;
const productsArray = [...products];
for(let i = 0; i < productsArray.length; i++){
  updateSubtotal(productsArray[i]);
  sum += updateSubtotal(productsArray[i]);
}

document.querySelector('#total-value span').innerText = sum;





  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  



  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);




  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {


  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentElement.parentElement.remove();
  calculateAll();


  //... your code goes here
}





window.addEventListener('load', () => {
  addRemoveEventListenter();

  //... your code goes here
});

function addRemoveEventListenter() {
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  const removeBtnArray = [...removeBtn];
  removeBtnArray.forEach((removeBtn)=> {
    removeBtn.addEventListener('click', removeProduct);

  });
}











// ITERATION 5

function createProduct() {
 const inputs = document.querySelectorAll(".create-product input");
 const inputsArray = [...inputs];
 const name = inputsArray[0].value;
 const price = inputsArray[1].value;



 let newProduct = document.createElement("tr");
 newProduct.classList.add("product");
  newProduct.innerHTML =  `<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`; 



  document.querySelector("tbody").append(newProduct);

  addRemoveEventListenter();
 
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('load', () => {
  const createProductBtn = document.getElementById('create');
  
  createProductBtn.addEventListener('click', createProduct);

  //... your code goes here
});


