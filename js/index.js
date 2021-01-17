// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!'); 

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  //console.log(`Calculating subtotal, yey! ${price.innerHTML}`);
  //console.log(`Calculating subtotal, yey! ${quantity.innerHTML}`);

  const subtotal = product.querySelector('.subtotal span');

  const newSub = price*quantity;
  subtotal.textContent = newSub
  return newSub;

}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here

  //let product1 = document.getElementsByClassName ('.Ironhack Beach Towel span');
  //let product2 = document.getElementsByClassName ('.Ironhack Rubber Duck span');
  
  //console.log(product1); 
  //console.log(product2); 
  

  const products = document.querySelectorAll('.product');
  let totalProduct = 0;
  products.forEach(element => totalProduct += updateSubtotal(element));




  // ITERATION 3
  //... your code goes here

  const total = document.querySelector('#total-value span');
  total.textContent = totalProduct;
}





// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  target.closest('.product').remove(); 
  calculateAll();
}







// ITERATION 5

function createProduct() {
  //... your code goes here
let nameProduct= document.querySelector(`.create-product input[text='Product Name']`);
let priceProduct= document.querySelector(`.create-product input[number='Product Price']`);

const prod = document.createElement("tr");
prod.classList.add("product");
prod.innerHTML = `
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
 </td>`;
  
  document.tbody.appendChild(prod);


}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  //... your code goes here
  const removebtn = document.querySelectorAll('.btn-remove')
  removebtn.forEach(element => element.addEventListener('click', removeProduct));

  const buttonCreate=document.querySelector ('.create');
  buttonCreate.onclick = createProduct();

});


