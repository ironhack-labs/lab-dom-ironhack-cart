


// // let productPrice = document.querySelectorAll('.product-price');
// // let qtY = document.querySelectorAll('#qty')
// let btn = document.querySelector('.calculate')
// let displayPrice = document.querySelector('#displayPrice')
// let deleteBtn = document.querySelectorAll('.deleteBtn');



// // deleteBtn.onclick = (e) => deleteItems(e)
// deleteBtn.forEach((button) => {
//   button.addEventListener('click', function (e) {
//     deleteItems(e)
//   })
// })

// btn.onclick = calculatePrices;


// function deleteItems(e) {
//   let firstRow = document.querySelector('#container');
//   firstRow.removeChild(e.target.parentElement.parentElement)
// }

// function calculatePrices() {
//   let productPrice = document.querySelectorAll('.product-price');
//   let qtY = document.querySelectorAll('#qty')
//   let totalPrice = 0

//   for (let i = 0; i < productPrice.length; i++) {
//     let costs = productPrice[i].innerHTML;
//     let quantities = qtY[i].value;
//     totalPrice += (costs * quantities);
//   }
//   displayPrice.innerHTML = totalPrice.toFixed(2);
// }

// let addItemButton = document.querySelector('.addItemButton')

// // addItemButton.addEventListener('click', () => {
// //   let newInput = document.createElement('input')
// //   let newItem = document.querySelector('#entrProdNm')
// //   newInput.value = newItem.value
// //   let newItemPrice = document.querySelector("#entrProdPr").value
// //   let container = document.querySelector('#container');
// //   container.appendChild(newInput);
// //   newItem.value = "";


// // })



// function createItemName() {
//   let name = document.querySelector('#entrProdNm').value
//   let pContainer = document.createElement('div')
//   pContainer.setAttribute('class', "product-name")
//   let sPan = document.createElement('span')
//   sPan.setAttribute('class', 'pName')
//   let content = document.createTextNode(name)
//   sPan.appendChild(content)
//   pContainer.appendChild(sPan)
//   return pContainer

// }

// function createItemPrice() {

//   let price = document.querySelector("#entrProdPr").value
//   let prodPrice = document.createElement('div')
//   prodPrice.setAttribute('class', 'product-price')
//   let content = document.createTextNode(price)
//   prodPrice.appendChild(content)
//   return prodPrice
// }

// function createProdQuantity() {
//   let bd = document.querySelector('#container')
//   let num = document.querySelector('#entrProdQty')


// }


// addItemButton.onclick = createProdQuanti


// let createButton = document.querySelector('create-button')

// createButton.onclick = () => {
//   let newName = document.querySelector('#newName').value
//   let newPrice = document.querySelector('#newPrice').value
//   let newRow = document.createElement('div')
//   newRow.classList.add('row')
//   newRow.innerHTML = ``
//   let cntr = document.querySelector('.product-rows-container');
//   cntr.appendChild(newRow);

// }

const deleteButtons = document.querySelectorAll('.btn-delete');

for (let i = 0; i < deleteButtons.length; i++) {

  deleteButtons[i].onclick = deleteItems;
}

function deleteItems(e) {
  console.log('hello')
  e.currentTarget.parentElement.parentElement.remove()
}


let calculateButton = document.querySelector('#calc');

calculateButton.addEventListener('click', () => {
  total = 0;
  let rows = document.querySelectorAll('.row')
  for (let i = 0; i < rows.length; i++) {
    let price = document.querySelector(`.row:nth-child(${i + 1}) .product-price > span`).innerHTML;
    let quantity = Number(document.querySelector(`.row:nth-child(${i + 1}) .product-quantity > input`).value);
    let sanitizePrice = Number(price.slice(1));
    let result = sanitizePrice * quantity
    total += result;

    let finalPrice = "$" + result.toFixed(2);
    let ouput = document.querySelector(`.row:nth-child(${i + 1}) .product-total > span`);
    ouput.innerText = finalPrice;

  }
  document.querySelector('#totes span').innerHTML = total
})



let createNewItemButton = document.querySelector('#createNewItem')

createNewItemButton.onclick = () => {
  let newName = document.querySelector('#newName').value
  let price = document.querySelector('#newPrice').value

  let displayPrice = Number(price).toFixed(2)

  let newRow = document.createElement('div')
  newRow.classList.add('row');
  newRow.innerHTML = `<div class="product-name">
      <span>
        ${newName}
      </span>
    </div>

    <div class="product-price">
      <span>$${displayPrice}</span>
    </div>

    <div class="product-quantity">
      <label>QTY</label>
      <input type="number">
    </div>

    <div class="product-total">
      <span>$0.00</span>
    </div>

    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
    </div>`

  let container = document.querySelector('.product-rows-container')
  container.appendChild(newRow);

  document.getElementById('newName').value = ""
  document.getElementById('newPrice').value = ""


  const deleteButtons = document.querySelectorAll('.btn-delete');

  for (let i = 0; i < deleteButtons.length; i++) {

    deleteButtons[i].onclick = deleteItems;
  }


}




