
let numberOfProducts = 2 //document.getElementById('product-wrapper').childElementCount

let totalPrice = 0

// Calculate total price

document.querySelector('.btn-success').onclick = () => {
  numberOfProducts = document.getElementById('product-wrapper').childElementCount
  for (let index = 1; index <= numberOfProducts; index++) {
    let itemPrice = document.querySelector(`.product:nth-child(${index}) .unit-price`)
    itemPrice = itemPrice.innerText
    itemPrice = itemPrice.slice(2, itemPrice.length - 1)
    let itemQuantity = document.querySelector(`.product:nth-child(${index}) .input-field`)
    itemQuantity = itemQuantity.value
    let itemTotal = itemPrice * itemQuantity
    totalPrice = totalPrice + itemTotal
    let totalDisplay = document.querySelector(`.product:nth-child(${index}) .total-price`)
    totalDisplay.innerText = `$ ${itemTotal.toFixed(2)}`
  }

  let totalSumDisplay = document.querySelector('#total-sum h2')
  totalSumDisplay.innerText = `Total Price: $ ${totalPrice.toFixed(2)}`
  totalPrice = 0
}

//Delete product items

const deleteInit = () => {
  numberOfProducts = document.getElementById('product-wrapper').childElementCount
  for (i = 0; i < numberOfProducts; i++) {
    document.getElementsByClassName('btn-delete btn')[i].onclick = () => {
      let parent = document.getElementById('product-wrapper')
      let childToRemove = document.getElementsByClassName('product')[i - 1]
      parent.removeChild(childToRemove)
      i--
    }
  }
}
deleteInit()
console.log('Number after init' + numberOfProducts)
// Boilerplate HTML for each new product

let productHtml = '<div class="product"> \
<div class="product-name">\
  <span>Iron-Bubblehead</span>\
</div>\
<div class="unit-price">\
  <span>$ 25.00</span>\
</div>\
<div class="quantity">\
  <form action="">QTY\
    <input class="input-field" type="text" placeholder="0">\
  </form>\
</div>\
<div class="total-price">\
  <span>$ 0.00</span>\
</div>\
<div>\
  <button class="btn-delete btn" type="button">Delete</button>\
</div>\
</div>'

//Add Product

let prodContainer = document.getElementById('product-wrapper')

document.getElementsByClassName('btn-add btn')[0].onclick = () => {
  prodContainer.insertAdjacentHTML('beforeend', productHtml)

  let newPrice = document.getElementById('add-price-field')
  newPrice = Number(newPrice.value)
  numberOfProducts = document.getElementById('product-wrapper').childElementCount
  let newPriceField = document.querySelector(`.product:nth-child(${numberOfProducts}) .unit-price`)
  newPriceField.innerText = `$ ${newPrice.toFixed(2)}`

  let newName = document.getElementById('add-product-field')
  newName = newName.value
  let newNameField = document.querySelector(`.product:nth-child(${numberOfProducts}) .product-name`)
  newNameField.innerText = newName
  deleteInit()
}



//window.onload = function () {
  // let calculatePriceButton = document.getElementsByClassName('xxx');
  // //var createItemButton = document.getElementById('new-item-create');
  // //let deleteButtons = document.getElementsByClassName('btn-delete btn');

  // calculatePriceButton.onclick = getTotalPrice();
  // //createItemButton.onclick = createNewItem;

  // for (let i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
//};

// let calculatePriceButton = document.getElementById('btn-success');
// //var createItemButton = document.getElementById('new-item-create');
// //let deleteButtons = document.getElementsByClassName('btn-delete btn');

// calculatePriceButton.onclick = getTotalPrice();

