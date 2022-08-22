// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;
  console.log(price)
  let quantity = product.querySelector('input').value;
console.log(quantity)
let updatedprice = price * quantity;
console.log(updatedprice)
product.querySelector('.subtotal span').innerHTML = updatedprice;

return updatedprice;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  let sum = 0
  const products = document.querySelectorAll('.product'); 
    for (let product of products) {
      let subtotal = updateSubtotal(product);
      console.log (products)

      sum += subtotal

      console.log(sum)

  }
  document.querySelector('#total-value span').innerHTML = sum 


  
}

// ITERATION 4

function removeProduct(event) {
 // const target = event.currentTarget;
 const target = event.currentTarget.parentNode.parentNode;
 target.remove()

  console.log('The target in remove is:', target);

  calculateAll() 
}

// ITERATION 5


let btt = document.querySelector('#create');
btt.addEventListener('click',createProduct);


function createProduct() {
  //... your code goes here

  let name1 = document.querySelector('.create-product input[type=text]').value;
  let price1 = document.querySelector('.create-product input[type=number').value;


  const newRw = document.createElement('tr')
  newRw.setAttribute('class','product')

  let newprod = `<tr class="product">
          <td class="name">
            <span>${name1}</span>
          </td>
          <td class="price">$<span>${price1}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`

    newRw.innerHTML = newprod;
    newRw.querySelector('.btn-remove').addEventListener('click', removeProduct)
    const table_body = document.querySelector('tbody');
  table_body.appendChild(newRw)
  calculateAll();
  // calculating all prices again just in case

  document.querySelector('.create-product input[type=text]').value = ''
  document.querySelector('.create-product input[type=number').value = ''

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
  const btns = document.querySelectorAll('.btn.btn-remove') 
  for (let btn of btns) 
    btn.addEventListener('click', removeProduct)
 });
