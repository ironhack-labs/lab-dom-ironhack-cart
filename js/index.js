// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //this takes only one product. we have to make a loop to calculateAll() function

  //... your code goes here
  //create two variables (we suggest naming them price and quantity) 
  //and use your just gained DOM manipulation skills to GET DOM elements that hold price and quantity. 
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = parseFloat(price.innerText) * quantity
  return parseInt(price.innerText) * quantity;

  
  //console.log(subtotal)
  // console.log(price)
  // console.log(quantity)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  var elements = document.querySelectorAll('.product');
  /*the element is now an array. So.... we call the updateSubtotal for every element
  of the array*/
  console.log(elements)
  let total =0;
  for(element of elements){
    total += updateSubtotal(element)
    
  }
    //now we have to calculate the total
    //.log(total)
    const totals = document.querySelector('#total-value span');
    totals.innerText = total
    

  

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
const removeBtn = document.querySelectorAll('.btn-remove');

for (let i=0; i<removeBtn.length; i++){
  removeBtn[i].setAttribute("onclick","removeProduct(this)")
}

function removeProduct(event) {
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  const parent = event.parentNode.parentNode
  parent.remove()
 
}


// ITERATION 5

function createProduct() {
  //... your code goes here
  //console.log('lalala')
  //const price = product.querySelector('.price span');
  // const newName = document.querySelector('.create-product input').value;
  
  // console.log(newName)

  //const newUnitPrice = document.querySelector('.create-product input').value;
  const newIte = document.querySelectorAll('.create-product input');
  
  const newName = newIte[0].value
  const newPrice = newIte[1].value

  
  let table = document.querySelector("#cart tbody")

  let newItem = document.createElement("tr")
  newItem.innerHTML = `<tr class="product">
                  <td class="name">
                      <span>${newName}</span>
                  </td>
                  <td class="price">$<span>${newPrice}</span></td>
                  <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                  </td>
                  <td class="subtotal">$<span>0</span></td>
                  <td class="action">
                      <button class="btn btn-remove" onclick="removeProduct(this)">Remove</button>
                  </td>
              </tr>`
  newItem.classList.add("product")

  table.appendChild(newItem)
  //console.log(newItem[0].value)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //add event listener to create button
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  

  //... your code goes here
});
