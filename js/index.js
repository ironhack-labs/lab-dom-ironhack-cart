// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //... your code goes here
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;

    const getSubtotal = Number(price * quantity)

    const subtotal= product.querySelector('.subtotal span');
    
    subtotal.innerHTML = getSubtotal;
     
    return getSubtotal; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0;
  const allItems = document.querySelectorAll('#cart .product')
  allItems.forEach(item =>{
    totalPrice += updateSubtotal(item)
  });

  // ITERATION 3
  //... your code goes here
  
  const total = document.querySelector('#total-value span')
  total.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  //target.parentNode.parentNode.remove(product)
  
 /* let parent = target.parentNode.parentNode.parentNode;
  let productElm = target.parentNode.parentNode;

  parent.removeChild(productElm)*/

  /*document.getElementById("remove").onclick = removeElm(){
    let node = document.getElementById("product");
    node.parentNode.removeChild(node)
  }*/
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
