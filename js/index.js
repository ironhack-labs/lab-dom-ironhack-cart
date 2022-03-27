// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal= product.querySelector('.subtotal span');
  let subtotalPrice= price * quantity
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test



  // ITERATION 2
  //... your code goes here
  let sum= 0
  const allProducts = document.getElementsByClassName('product');
  let productsArray = Array.from(allProducts)
  for(item of productsArray){
    sum+= updateSubtotal(item)
  }

    


  // ITERATION 3
  //... your code goes here
 let totalSum= 0;
 
 allProducts.forEach((element) =>{
   totalSum += updateSubtotal(element);
 })

  let= PageTotalSum = document.querySelector('#total-value span') ;
  PageTotalSum.innerHTML= totalSum;

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
let child = event.currentTarget.parentNode.parentNode;
let parent = child.parentNode;
parent.removeChild(child);
calculateAll();


}

// ITERATION 5

function createProduct(target) {

  const ProductName = document.getElementById('ProductName').value;
  const ProductPrice = document.getElementById('ProducePrice').value;

  const ProductList = document.getElementById('ProductList');

  function createProduct(){
    const ProductTemplate= document.querySelector('.product');

    let newNode=ProductTemplate.cloneNode(true);

    newNode.getElementsByClassName('span')[0].innerHTML = ProductName;
    newNode.getElementsByClassName('span')[1].innerHTML = ProductPrice;

    newNode.getElementsByClassName('btn-remove')[0].addEventListener('click',removeProduct);

    document.querySelector('product').parentNode.appendChild(newNode);

    document.getElementById('ProductName').value="";
    document.getElementById('ProductPrice').value = 0;

    calculateAll();


  }
    
 

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  function removeable(){
    const removeButtons =document.getElementsByClassName('btn-remove');
    for(button of removeButtons) {
      button.addEventListener('click', removeProduct)
    }
  }

const createButton= document.getElementsById('create');
createButton.addEventListener('click',createProduct)
removeable()

})
