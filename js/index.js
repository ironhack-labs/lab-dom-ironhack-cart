// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subtotalArea = product.querySelector(".subtotal span");

  //... your code goes here
  let result = price * quantity;

  subtotalArea.innerHTML = result;

  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsArray= document.getElementsByClassName("product");
  console.log(productsArray);

  let total = 0;

  for (let i = 0; i <productsArray.length; i++) {
     updateSubtotal(productsArray[i]);
      total += updateSubtotal(productsArray[i]);
  } 
  // let productAction = productsArray.forEach((product) => {
  //   return updateSubtotal(product);
  // });

  // ITERATION 3
  //... your code goes here
  let calcTotalLabel = document.querySelector('#total-value span');

  console.log(total);
  calcTotalLabel.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll()
}

// ITERATION 5

// function createProduct() {
//   //... your code goes here
//   let price = document.querySelector('.create-product td input').value;
//   let name = document.querySelector('.create-product td input').type;
//   let table = document.querySelector("table");
  
//   let newRow = `<tr class="product">
//   <td class="name">
//     <span>${name}</span>
//   </td>
//   <td class="price">$<span>${price}</span></td>
//   <td class="quantity">
//     <input type="number" value= "0" min="0" placeholder="Quantity" />
//   </td>
//   <td class="subtotal">$<span>0</span></td>
//   <td class="action">
//     <button class="btn btn-remove">Remove</button>
//   </td>
// </tr>`;


// table.innerHTML += newRow
  
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnArr = document.getElementsByClassName("btn-remove");

  console.log(removeBtnArr);

  for (let i = 0; i <removeBtnArr.length; i++) {
     removeBtnArr[i].addEventListener('click', removeProduct);
  } 

  const createBtn = document.getElementById("create");
  createBtn.addEventListener('click', createProduct);
});
