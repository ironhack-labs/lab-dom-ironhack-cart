// ITERATION 1
function updateSubtotal($product) {
  // Get every price and then, change them to numbers
  let getPrice = document.querySelectorAll(".price > span");
  let bePriceText = [];
  let bePriceNum = [];

  getPrice.forEach(elm => {
    bePriceText.push(elm.innerHTML);
  });
  bePriceText.forEach(elm => {
    bePriceNum.push(parseInt(elm, 10));
  });
  // Get every quantity and set their value
  let numUnits = document.querySelectorAll(".quantity > input");
  let quantityProduct = [];

  numUnits.forEach(elm => {
    quantityProduct.push(elm.value);
  });

  // Get the product between price and quantity
  let multipliCate = [];

  for (let i = 0; i < bePriceNum.length; i++) {
    for (let k = 0; k < quantityProduct.length; k++) {
      multipliCate.push(bePriceNum[(i = k)] * quantityProduct[(k = i)]);
    }
  }

  // Change the subtotal value
  let substitute = document.querySelectorAll(".subtotal > span");
  let subTotal = [];

  for (let i = 0; i < multipliCate.length; i++) {
    for (let k = 0; k < substitute.length; k++) {
      subTotal.push((substitute[(i = k)].innerHTML = multipliCate[(i = k)]));
    }
  }
}

function calculateAll() {
  // ITERATION 2
  // Get every subtotal in envey line of products
  let getSubtotal = document.querySelectorAll('.product')

  getSubtotal.forEach(elm => {
    updateSubtotal(elm)
  })

  // ITERATION 3
  // Get an array with all the subtotal prices and change them to numbers
  let getTotal = document.querySelectorAll('.subtotal > span')
  let totalToText = []
  let goodTotal = []

  getTotal.forEach(elm => {
    totalToText.push(elm.innerHTML)
  })
  totalToText.forEach(elm => {
    goodTotal.push(parseInt(elm, 10))
  })

  // "sumar" every element in the previous array
  let sum = 0;

  goodTotal.forEach(elm => {
    sum += elm
  })

  let superTotal = document.querySelector('#total-value > span')

  // Set the result in the Total when button is clicked
  superTotal.innerHTML = sum
}


window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

// Get every remove button and add an envent that calls the function productRemoveListener

let getButtons = document.querySelectorAll(".btn.btn-remove");
getButtons.forEach(elm => {
  elm.addEventListener("click", productRemoveListener);
});

function productRemoveListener(event) {
  let chilDren = document.querySelector(".product");
  // Get every product and then erase it 
  chilDren.parentNode.removeChild(chilDren);
}
// ITERATION 5

// Get the create product btn and add an event tha calls the function createProduct
let getButtonNew = document.querySelector('.create-product .btn');
getButtonNew.addEventListener('click', createProduct)


function createProduct(event) {
  // Get values from the form
  let getProductName = document.getElementById('new-name').value
  let getPrice = document.getElementById('new-price').value

  // Copy the product html and then assign the new values and the callback to the button
  let newProduct = document.querySelector('#cart > tbody > tr').cloneNode(true)
  newProduct.querySelector('.name span').innerHTML = getProductName
  newProduct.querySelector('.price span').innerHTML = getPrice
  newProduct.querySelector('.action .btn-remove').addEventListener('click', productRemoveListener)

  // Set the new product inside de tdbody
  let parentProduct = document.querySelector('#cart > tbody')
  parentProduct.appendChild(newProduct)

}

// function eraseValues(event) {
//   let eraseProductName = document.querySelector('#new-name > input').value
//   let erasePrice = document.getElementById('new-price')

//   console.log(eraseProductName)
//   eraseProductName.parentNode.removeChild(eraseProductName)
// }