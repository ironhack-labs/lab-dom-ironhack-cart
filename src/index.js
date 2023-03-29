// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price>span');
  const quantity=product.querySelector('.quantity>input');
  const subTotal=product.querySelector('.subtotal>span')
  let total=Number(price.innerText)*quantity.value
  subTotal.innerText=`${total}`
  return total
  }

  //... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const rows=document.getElementsByClassName("product")
  let total=0
  for (let i=0;i<rows.length;i++)
   {
      total=total+updateSubtotal(rows[i])
   }

  // ITERATION 3
  //... your code goes here

  const totalValue=document.querySelector("#total-value>span")
  totalValue.innerHTML=`${total}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row=target.parentNode.parentNode
  const parent=target.parentNode.parentNode.parentNode
  parent.removeChild(row)
  calculateAll()
}

// ITERATION 5


const create=document.getElementById("create")
create.addEventListener('click',createProduct);

function createProduct() {
  //... your code goes here
  const tFoot=document.getElementsByClassName('create-product');
  console.log(tFoot)
  console.log("i am inside create product")


 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
   const actions=document.querySelectorAll('.btn-remove')
   console.log(actions)
   
   for(let action of actions)
   {
    action.addEventListener('click',removeProduct)
   }

   




});
