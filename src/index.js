// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
    product.appendChild(price);
  const quantity = product.querySelector('.quantity input');
    quantity.innerHTML = value;
  
  let subTotalProduct = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotalProduct;
  return subTotalProduct;
  
}
//... your code goes here

  // ITERATION 2
  //... your code goes here
  
  function SubproductTotal(productPrice, productQuantity) {
    this.price = productPrice;
    this.quantity = productQuantity;
  }
  const productTwo = new SubproductTotal()
  
  // ITERATION 3
  //... your code goes here
  function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
      let totalCart = 0;
      const products = document.querySelectorAll('.product');
      for (i=0; i<products.length; i++) {
      totalCart += updateSubtotal(products[i]);
      }
          document.querySelector('#total-value span').innerHTML = totalCart; 
    }

// ITERATION 4
  //... your code goes here
  function removeProduct(event) {
    const target = event.currentTarget;
    const trParent = target.parentNode.parentNode;
    trParent.remove();
    calculateAll();
  }
  console.log('The target in remove is:', target);

// ITERATION 5
  function createProduct() {
  //... your code goes here
    const sourceData = document.querySelector(".create-Product").innerHTML;
    const name = sourceData.getElementsByTagName('input')[0].value;
    const price = sourceData.getElementsByTagName('input')[1].value;

    const cloneRow = addProductRow();
    cloneRow.querySelector('.name').innerHTML = name;
    cloneRow.querySelector('.price span').innerHTML = parseFloat(price);
    addOnClickRemoveBtn(cloneRow.querySelector('button'));
    cleanProductTFoot();
    }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

  function addOnClickRemoveBtn(){
    let removeButton = document.getElementsByClassName('btn btn-remove')
    for (let i=0; i < removeButton.lengt; i++){
    removeButton[i].addEventListener('click', removeProduct);    
    }    
  }
  function cleanProductTFoot(){
    const sourceData = document.querySelector(".create-product");
    sourceData.getElementsByTagName('input')[0].value = "";
    sourceData.getElementsByTagName('input')[1].value = "";
  }
});




