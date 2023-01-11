
function initialize (){
  let createBtn = document.getElementById('create') //to stylize the Create Product button
  createBtn.style.cssText = 
    `display: inline-block;
    border: 0;
    border-radius: 0.25em;
    cursor: pointer;
    background-color: #8df200;
    color:white;`

  let inputPriceAmount = document.querySelector('input[placeholder="Price"]')
  inputPriceAmount.setAttribute('step','0.01') //so price can be entered in dollars and cents
  inputPriceAmount.removeAttribute("value") //to remove the zero value, so prices can be added manually

  let removeProductBtn = document.getElementsByClassName('btn-remove')[0];
  removeProductBtn.setAttribute('onclick','removeProduct(this)') //to add onclick to pre-existing table row
 
  let tbody = document.querySelector('tbody')//to use in removeProduct function
  tbody.setAttribute('id','tbody')

}

//-------------------------------------------------------------------------------------------------------------------

initialize()

//-------------------------------------------------------------------------------------------------------------------

function eventHandlers () {

  window.addEventListener('load', () => {

    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);

  });

}

//-------------------------------------------------------------------------------------------------------------------

eventHandlers()

//-------------------------------------------------------------------------------------------------------------------

// ITERATION 1------------------------------------------------------------------------------------------------------

function updateSubtotal(product) {

  let price = product.querySelector('.price span');
  let subtotal= product.querySelector('.subtotal span')
  let quantity = product.querySelector('.quantity input');
  subtotal.innerText = (parseFloat(quantity.value) * parseFloat(price.innerText)).toFixed(2)

  return subtotal.innerText
}

//------------------------------------------------------------------------------------------------------------------


function addNewRow(newProductName, newProductPrice){
  let tableBody = document.getElementsByTagName('tbody')[0]

  let newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  
  let newName = document.createElement('td')
  newName.classList.add('name')
  
  
  let newNameSpan = document.createElement('span')
  newNameSpan.classList.add('name-span')
  newNameSpan.innerHTML=newProductName

  let newPrice = document.createElement('td')
  newPrice.classList.add('price')
  newPrice.innerHTML='$'
  
  let newPriceSpan = document.createElement('span')
  newPriceSpan.classList.add('price-span')
  newPriceSpan.innerText= (parseFloat(newProductPrice)).toFixed(2)
  
  let newQuantity= document.createElement('td')
  newQuantity.classList.add('quantity')
  
  let newInput = document.createElement('input')
  newInput.classList.add('input');
  newInput.setAttribute('type','number')
  newInput.setAttribute('value','0')
  newInput.setAttribute('min','0')
  newInput.setAttribute('placeholder', 'Quantity')
  newInput.style.cssText = "max-width: 4em;"
  
  let newSubtotal=document.createElement('td')
  newSubtotal.classList.add('subtotal')
  newSubtotal.innerHTML='$'
  
  let newSubtotalSpan=document.createElement('span')
  newSubtotalSpan.classList.add('span')
  newSubtotalSpan.innerHTML="0.00"
  
  let newAction=document.createElement('td')
  newAction.classList.add('action')
  
  let newButton = document.createElement('button')
  let buttonList = ['btn', 'btn-remove']
  newButton.classList.add(...buttonList)
  newButton.innerHTML="Remove"
  newButton.setAttribute('onclick','removeProduct(this)')
  
  newQuantity.appendChild(newInput)
  newAction.appendChild(newButton)
  newPrice.appendChild(newPriceSpan)
  newSubtotal.appendChild(newSubtotalSpan)
  newName.appendChild(newNameSpan)

  newProduct.appendChild(newName)
  newProduct.appendChild(newPrice)
  newProduct.appendChild(newQuantity)
  newProduct.appendChild(newSubtotal)
  newProduct.appendChild(newAction)
  
  tableBody.appendChild(newProduct)

}

//-------------------------------------------------------------------------------------------------------------------

/*The duplication of table row has been done in both HTML as well as Javascript format as I wanted to practice 
  what I learnt in the DOM lessons. The HTML code has been commented out so only the JS code is operational now.*/
  
addNewRow('Ironhack Beach Towel', '12.50') //calling this function manually to add the 2nd row with JS instead of HTML

//-------------------------------------------------------------------------------------------------------------------

function calculateAll() {

  // ITERATION 2

  let sum = 0
  let allProducts = [...document.querySelectorAll('.product')];
    for(let i = 0; i < allProducts.length; i++){
      
      sum+=parseFloat(updateSubtotal(allProducts[i]))

    }
  
  // ITERATION 3

  let totalPrice = document.querySelector('#total-value span')
  totalPrice.innerText = (parseFloat(sum)).toFixed(2);

  return (totalPrice.innerText)

  }

//---------------------------------------------------------------------------------------------------------------------

calculateAll() //Calling this function to update subtotals and calculate total price at bottom of cart

// ITERATION 4----------------------------------------------------------------------------------------------------------

function removeProduct(event) {

    let i = event.parentNode.parentNode.rowIndex;
    //note to self: rowIndex includes index of first tr within the thead of table.
    document.getElementById('cart').deleteRow(i);

    calculateAll()
}



// ITERATION 5----------------------------------------------------------------------------------------------------------

function newProductNameInput(){ 

  /*The calling of this function will be passed into the addNewRow function, 
  which in turn will be passed into the createProduct function*/

  let inputProductName = document.querySelector('input[placeholder="Product Name"]')
  let newProductName = inputProductName.value
 
  return newProductName
  
}

//---------------------------------------------------------------------------------------------------------------

function newProductPriceInput(){

  /*The calling of this function will be passed into the addNewRow function, 
  which in turn will be passed into the createProduct function*/

  let inputPriceAmount = document.querySelector('input[placeholder="Price"]')
  let newProductPrice = (parseFloat(inputPriceAmount.value))

  return (newProductPrice)
  
}

//-------------------------------------------------------------------------------------------------------------

function clearNameInput(){ //Clears product name input after adding a new product

  let inputProductName = document.querySelector('input[placeholder="Product Name"]')
  inputProductName.value = null
  return inputProductName.value 

}

//--------------------------------------------------------------------------------------------------------------

function clearPriceInput(){  //Clears price input after adding a new product

  let inputPriceAmount = document.querySelector('input[placeholder="Price"]')
  inputPriceAmount.value = null
  return inputPriceAmount.value

}

//--------------------------------------------------------------------------------------------------------------

function createProduct() { //This function will execute when the 'Create Product' button is clicked

  if(newProductNameInput() && newProductPriceInput()){
    addNewRow(newProductNameInput(),newProductPriceInput())
    clearPriceInput()
    clearNameInput()

  }  

}

//-------------------------------------------------------------------------------------------------------------------


