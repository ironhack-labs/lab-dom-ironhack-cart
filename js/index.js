// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    let price = product.querySelector('.price span').innerHTML;
    // console.log(price)
  
  let quantity = product.querySelector(".quantity input").value;
  // console.log(quantity);

  let priceTotal = price * quantity;

  //update UI
  // .innerText
  const subTotalElm = product.querySelector('.subtotal span');
  subTotalElm.innerText = priceTotal;
  // console.log(subTotalElm);

  return priceTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  
  // let myArray = [1,2,3]; // 6
  // let sum = 0;
  // for(let i = 0; i < myArray.length; i++){
  //   sum += myArray[i];
  // };
  
  let allproductsSubtotal = 0;
  let  allProductList = document.querySelectorAll('.product');
  //console.log(allProductList);
  for(let i = 0; i < allProductList.length; i++){
    // updateSubtotal(allProductList[i]){

      allproductsSubtotal += updateSubtotal(allProductList[i]);
    

      console.log(allproductsSubtotal);
      
    }
    
    const subElm = document.querySelector('#total-value span');
    console.log(subElm)
    subElm.innerText = allproductsSubtotal;
    
     //console.log( updateSubtotal(allProductList[i]));

      // console.log(allproductsSubtotal);
  //     const subTotalElm = product.querySelector('.total-value span');
  // subTotalElm.innerText = allproductsSubtotal
  
      

  };


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
