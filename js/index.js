// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  // console.log()
  const quantity = product.querySelector('.quantity > input').value;
    // console.log( Number(price.value) + "" + quantity );
  const total = Number(price) * quantity;
      // console.log( total );
      let newPriceEle = document.createTextNode(`${total}`);
      // console.log( newPriceEle );
      product.querySelector('.subtotal span').innerHTML = newPriceEle.textContent;
      return total;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product');
  let totprice = Array.from(allProducts).reduce( (accu,ele) =>{ 
    // console.log(  accu + updateSubtotal(ele));
    if( accu === 0){
      return updateSubtotal(ele).toFixed(2);
    }else {
      return ( (Number(accu)+ Number(updateSubtotal(ele))));
    }    
},0);
// console.log( " all total: " + totprice);

document.querySelector('#total-value span').innerHTML= totprice;
  // ITERATION 3
  //... your code goes here
}

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

  // let liTags = document.getElementsByTagName('btn-remove');
  // for(let i=0; i < liTags.length; i++){
  //   liTags[i].addEventListener
  // // liTags[i].onclick = function(e){
  // //   console.log(e.currentTarget.innerHTML);
  // // }
  // }


  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click',createProduct() );
  //... your code goes here
});
