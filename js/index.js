// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span')
const quantity =product.querySelector('.product input')
const total = price.innerHTML*quantity.value
const subtotal = product.querySelector('.subtotal span')
subtotal.innerHTML=total
return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 const singleProduct = document.querySelector('.product');
updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 && 3
 const rowElement = document.querySelectorAll('.product');
let sum = [...rowElement].reduce((sum, row)=>sum+updateSubtotal(row),0)
console.log(sum)
document.querySelector('#total-value > span').innerText = sum
}


// ITERATION 4

/*function removeProduct(event) {
 const removeProductButton = document.getElementsByClassName('btn btn-remove')
  for (let i =0; i<  removeProductButton.length; i++)
  const button =  removeProductButton[i];
  button.addEventListener('click', function(event))
 const buttonClicked =  event.target
   }*/



const removeProductButton = document.getElementsByClassName('btn btn-remove')
for (let i =0; i<  removeProductButton.length; i++){
  const button =  removeProductButton[i];
  button.addEventListener('click', function(event){
 const buttonClicked =  event.target
buttonClicked.parentElement.parentElement.remove()
 })
}



 //ITERATION 5

let itemList = document.querySelector('tbody')

let createButton = document.getElementById('create')
createButton.addEventListener('click', createProduct )

function createProduct(e) {
let newProduct = document.createElement('tr');
newProduct.className = 'product';


//item Name
let newItemName = document.querySelector('#productName').value;
newItemName.className = 'input'

newProduct.innerHTML = ' <span></span>';
newProduct.appendChild(document.createTextNode(newItemName))
//price
let newPrice = document.createElement('input')
newPrice.className='price';
newProduct.appendChild(newPrice)

//quantity
let newQuantiy = document.createElement('input')
newQuantiy.className='quantity';
newQuantiy.type="number";
newQuantiy.value="0";
newQuantiy.min="0" 
newQuantiy.placeholder="Quantity"
newProduct.appendChild(newQuantiy)


//subtotal
let newSubtotal = document.createElement('td')
newSubtotal.className = "subtotal";
newSubtotal.innerHTML= `$<span>0</span>`
newProduct.appendChild(newSubtotal)


//remove button
let removeButton = document.createElement('button');
removeButton.className ='btn btn-remove';
removeButton.appendChild(document.createTextNode('Remove'))
newProduct.appendChild(removeButton)


itemList.appendChild(newProduct)
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
