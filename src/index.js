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




function createProduct() {
  //... your code goes here
    console.log("inside create")
    const inputs = document.querySelectorAll(".create-product input")
    const name = inputs[0].value
    const price = inputs[1].value
    const tbody = document.querySelector("tbody")
    const rowContent = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
  
    const row = document.createElement("tr")
    row.classList.add("product")
    row.innerHTML = rowContent
  
    tbody.appendChild(row)
    
    let removeProductBtn = row.querySelector(".btn-remove")
    removeProductBtn.addEventListener("click", removeProduct)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
   const actions=document.querySelectorAll('.btn-remove')
  //  console.log(actions)

   for(let action of actions)
   {
    action.addEventListener('click',removeProduct)
   }

   const create=document.getElementById('create')
   create.addEventListener('click',createProduct); 




});
