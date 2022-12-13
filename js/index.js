// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subtotal = price*quantity;

  let subtotalHTML = product.querySelector('.subtotal span');
  subtotalHTML.innerText = subtotal; 
  return subtotalHTML.innerText; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  
  // ITERATION 2
  // ITERATION 3
  const products = document.querySelectorAll('.product');
  let totalPrice = 0; 
  products.forEach((product) => totalPrice += +updateSubtotal(product)); 
  document.querySelector('#total-value span').innerHTML = totalPrice;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let product = target.parentNode.parentNode;
  let parent = document.querySelector("tbody");
  console.log(parent);
  parent.removeChild(product);

  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  const name = document.querySelector(".create-product>td>input").value ;
  const price = document.querySelectorAll(".create-product>td>input")[1].value;

  let newProduct = document.getElementsByClassName("product");
  
  console.log(newProduct)
  
  //document.querySelector("tbody").appendChild(newProduct);  



  // console.log(newProduct)
    
  // newProduct.querySelector("span").innerText = name;
  // newProduct.querySelector(".price>span").innerText = price;
  
//document.body.table.tbody
//document.querySelector("tbody").appendChild(newProduct);

//newProduct.innerHTML = `<tr class="product"> 
//   <td class="name">
//   <span>${name}</span>
// </td>
// <td class="price">$<span>${price}</span></td>
// <td class="quantity">
//   <input type="number" value="0" min="0" placeholder="Quantity" />
// </td>
// <td class="subtotal">$<span>0</span></td>
// <td class="action">
//   <button class="btn btn-remove">Remove</button>
// </td> 
// <tr>`
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeBtns.length; i++){
    removeBtns[i].addEventListener('click', removeProduct);
  }
  const create = document.getElementById("create");
  create.addEventListener('click', createProduct); //Entender.

});



