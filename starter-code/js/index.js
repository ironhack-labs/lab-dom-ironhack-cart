
// new Product Elements


//starting at 3 because of 2 initial products
let productIDIncrement = 3

let newProductName = ''
let newProductPrice = ''

let $inputProductName = document.getElementById('input-product-name');
let $unitPriceAmmount = document.getElementById('unit-price-ammount');

$inputProductName.addEventListener("input", 
function() {
  newProductName = $inputProductName.value
  console.log(newProductName)
})

$unitPriceAmmount.addEventListener("input", 
function() {
  newProductPrice = $unitPriceAmmount.value
  console.log(newProductPrice)
})




// Selectors

let $productList = document.getElementById('product-list');
let $unitCosts = document.getElementsByClassName('unit-cost');

let $allPieces = document.getElementsByClassName('pieces');

let $totalAmmounts = document.getElementsByClassName('total-ammount');

// -- DOM - Buttons

// ---- ADD a new Product

document.getElementById("btn-add-product").addEventListener("click", 
function() {
  if(!$inputProductName.value || !$unitPriceAmmount.value) {
    alert('Missing Parameters')
  } else  {
  $productList.innerHTML += `<div id="product-${productIDIncrement}" class="product-row product">
  <div class="name-width"><span class="product-name">${newProductName}</span></div>
  <div><span class="unit-cost">$${newProductPrice}</span></div>
  <div>QTY <input class="pieces"></div>
  <div><span class="total-ammount"></span></div>
  <div><button class="btn-delete">Delete product</button></div>
  </div>`
  $inputProductName.value = ''
  $unitPriceAmmount.value = ''
  }
  updateDeleteButtonList()
  productIDIncrement++
  console.log('Add Product was clicked')

});

// ---- Calculate the Total of all products

document.getElementById("btn-calculate-total").addEventListener("click", function() {
  for (let i = 0; i<$unitCosts.length; i++) {
    //console.log(parseFloat($unitCosts[i].innerText.replace('$', '')))
    //console.log($allPieces[i].value)
    if($allPieces[i].value) {
    $totalAmmounts[i].innerText = '$' + (parseFloat($unitCosts[i].innerText.replace('$', '')) * parseFloat($allPieces[i].value)).toFixed(2) }
    updateDeleteButtonList()
    calculateAndShowSuperTotalAmmount()
  }
  console.log('Calculate Total was clicked')

});

//  ---- Delete a Product from list

function updateDeleteButtonList() {
  deleteButttons = document.getElementsByClassName('btn-delete')
  for( let i = 0; i < deleteButttons.length; i++) {
    deleteButttons[i].addEventListener('click', function() {
      removeProductById(deleteButttons[i].parentNode.parentNode.id)
    })
  }
}

function removeProductById(id) {
  let toBeRemoved = document.getElementById(id)
    toBeRemoved.remove()
     updateDeleteButtonList()
     calculateAndShowSuperTotalAmmount()
}

function calculateAndShowSuperTotalAmmount(){
  let sum = 0.00
  for (let i = 0; i < $totalAmmounts.length; i++) {
    if($totalAmmounts[i].innerText)
    sum = sum + parseFloat($totalAmmounts[i].innerText.replace("$", ""))
  }
  document.getElementById('show-total').innerText = "$ " + sum 
  console.log(sum)
} 


updateDeleteButtonList()