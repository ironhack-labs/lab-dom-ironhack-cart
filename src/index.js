// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  console.log(price);
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity);
  let newSubtotal=price*quantity;
  console.log(newSubtotal);
  product.querySelector('.subtotal span').innerHTML=newSubtotal;
  return newSubtotal;
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
  let products = document.getElementsByClassName('product');
  console.log(products)
  for (let index = 0; index < products.length; index++) {
    updateSubtotal(products[index]);
    
  }

  // ITERATION 3
  //... your code goes here
  let newTotal=0;
  for (let index = 0; index < products.length; index++) {
    newTotal=newTotal+updateSubtotal(products[index]);
    
  }
  console.log(newTotal)
  document.querySelector('#total-value span').innerHTML=newTotal;
 }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  toRemove=target.parentNode.parentNode;
  toRemove.parentNode.removeChild(toRemove);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // console.log("create Button has been clicked")
  // let parentNode=document.querySelector('tbody')
  // let newProduct=document.createElement('tr')
  // newProduct.classList.add("product");
  // parentNode.appendChild(newProduct);
  // let name=document.createElement('td')
  // name.classList.add("name")
  // let newProductName=document.getElementById('newName')
  // console.log(newProductName.value)
  // name.innerHTML=newProductName.value;
  // newProduct.appendChild(name)
  // let price=document.createElement('td')
  // price.classList.add("price")
  // let newPrice=document.getElementById('newPrice')
  // price.innerHTML="$"+newPrice.value
  // newProduct.appendChild(price)
  // let quantity=document.createElement('td')
  // quantity.classList.add("quantity")
  // let input=document.createElement('input')
  // input.setAttribute("type","number")
  // input.setAttribute("value","0")
  // input.setAttribute("min","0")
  // input.setAttribute("placeholder","Quantity")
  // quantity.appendChild(input)
  // newProduct.appendChild(quantity)
  // let subtotal=document.createElement('td')
  // subtotal.classList.add("subtotal")
  // newProduct.appendChild(subtotal)
  // let action=document.createElement('td')
  // action.classList.add("action")
  // let button=document.createElement('button')
  // button.classList.add("btn")
  // button.classList.add("btn-remove")
  // button.innerHTML="Remove"
  // action.appendChild(button)
  // newProduct.appendChild(action)
  const name = document.getElementById('newName').value;
  const price = parseFloat(document.getElementById('newPrice').value).toFixed(2);
  const tbody = document.querySelector('tbody');
  const newProductHTML = `<tr class='product'>
      <td class='name'><span>${name}</span></td>
      <td class='price'>$<span>${price}</span></td>
      <td class='quantity'><input type='number' value='0' min='0' placeholder='Quantity' /></td>
      <td class='subtotal'>$<span>0</span></td>
      <td class='action'><button class='btn btn-remove'>Remove</button></td>
    </tr>`;
  tbody.insertAdjacentHTML('beforeend', newProductHTML);
  document.querySelectorAll('.btn-remove').forEach(btn => btn.removeEventListener('click', removeProduct));
  document.querySelectorAll('.btn-remove').forEach(btn => btn.addEventListener('click', removeProduct));
  document.getElementById('newName').value=""
  document.getElementById('newPrice').value="0"





}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeBtn=document.getElementsByClassName('btn btn-remove');
  console.log(removeBtn)
  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener('click',removeProduct)
    
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click',createProduct);


  //... your code goes here
});
