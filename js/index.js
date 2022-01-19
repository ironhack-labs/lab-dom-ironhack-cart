// ITERATION 1

function updateSubtotal(product) {
      let subTotal = product.querySelector('.price span').innerHTML * product.querySelector('.quantity input').value;
  //console.log(subTotal) 
  product.querySelector('.subtotal span').innerHTML = subTotal
  


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  //console.log(document.querySelector('.product'))
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  //console.log(allProducts)
  for (let productEle of allProducts) {
    updateSubtotal(productEle)
    //console.log(productEle)
  }
  // allProducts.forEach(function(productEle) {
  //   updateSubtotal(productEle)
  //   console.log(productEle)
  // })
  
  
  
  //console.log(document.querySelectorAll('.product'))

  // ITERATION 3
  //console.log(document.querySelector('#total-value span').innerHTML)
    let totalPrice = 0     

   for (let productEle of allProducts) {
    //document.querySelector('#total-value span').innerHTML += productEle.querySelector('.subtotal span').innerHTML
    //console.log(productEle.querySelector('.subtotal span').innerHTML)
    //console.log(document.querySelector('#total-value span').innerHTML)
    totalPrice += Number(productEle.querySelector('.subtotal span').innerHTML)
    console.log(totalPrice)
   }

   document.querySelector('#total-value span').innerHTML = totalPrice

   
  }

  // ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //const parentEle = document.querySelectorAll('.action')


  //console.log(target.parentNode.parentNode.parentNode)
  // I guess that´s a bit nasty but it works :D
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  // parentEle.forEach(function(ele) {
  //   console.log(ele)
  // })
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  // This does not wor, yet => if a new product is created, the calculation does not work anymore
  // let SubTotal = 1
  // let btn = '<button class="btn btn-remove">Remove</button>'
  // let input = '<input type="number" value="0" min="0" placeholder="Quantity" />'
  let allInputs = document.querySelectorAll('.create-product input')  
  let newProductName = allInputs[0].value
  let newProductPrice = allInputs[1].value

  let table = document.querySelector('.product').parentNode;
  let row = table.insertRow(0);
  // let cell1 = row.insertCell(0);
  // let cell2 = row.insertCell(1);
  // let cell3 = row.insertCell(2);
  // let cell4 = row.insertCell(3);
  // let cell5 = row.insertCell(4);
  row.innerHTML = `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  //</tr>cell1.innerHTML = newProductName;
  //</tr>cell2.innerHTML = '$' + newProductPrice;
  //</tr>cell3.innerHTML = input
  //</tr>cell4.innerHTML = SubTotal
  //</tr>cell5.innerHTML = btn
  //</tr>row.classList.add('product')
  //cell5.classList.add('action')
  

  console.log(newProductName)
  console.log(newProductPrice)
  console.log(table)
  
  calculateAll()
  RemoveBtn()

}

function RemoveBtn() {
  const removeBtn = document.querySelectorAll('.btn-remove') 
  //console.log(removeBtn)

  removeBtn.forEach(function(btn) {
    btn.addEventListener('click',removeProduct)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //const removeBtn = document.querySelectorAll('.btn-remove') 
  ////console.log(removeBtn)
//
  //removeBtn.forEach(function(btn) {
  //  btn.addEventListener('click',removeProduct)
  //})

  RemoveBtn()

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});

