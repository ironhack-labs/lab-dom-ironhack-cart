//clonamos un nodo product para usarlo luego con el Append
const rowToAppend= (document.querySelector('.product')).cloneNode(true)

// ITERATION 1
//UPDATE SUBTOTAL FUNCTION

function updateSubtotal(product) {
  

  const price = product.querySelector(".price span");

  const quantity = Math.round(product.querySelector(".quantity input").value);
 

  let subtotal = price.textContent * quantity;

  const printSubtotal = product.querySelector(".subtotal span");
  printSubtotal.innerText = subtotal.toFixed(2);
  return subtotal;0
}

 // ITERATION 2
//CALCULATE TOTAL FUNCTION

function calculateAll() {
 

  const products = document.querySelectorAll(".product");

  
  products.forEach((element) => {
    updateSubtotal(element);
    element.querySelector('.quantity input[value]').value=Math.round(element.querySelector('.quantity input[value]').value)
  });

  // ITERATION 3
  let total = 0;
  products.forEach((element) => 
  {
    //quitamos el símbolo del dolar $ Y  convertimos en decimal el subtotal
    let onlyNumber = element.querySelector(".subtotal").textContent.slice(1);
    total += parseFloat(onlyNumber);
  });


  const totalValue = document.querySelector("#total-value span");
  totalValue.innerText = total;
}



// ITERATION 4
//REMOVE PRODUCTS and recalculate total

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
calculateAll()
}


// ITERATION 5
// CREATE PRODUCTS

function createProduct() {
  //... your code goes here
  console.log("Creando producto")

  const createdProductName= document.querySelector('.create-product input[type=text]')
  const createdProductPrice= document.querySelector('.create-product input[type=number]')
  const createdProductQuantity= document.querySelector('#newProductQuantity')

  //CONTROL THAT THE USER INTRODUCES THE PRODUCT

    if(createdProductName.value!="") 
    {
  rowToAppend.querySelector('.name span').innerText= createdProductName.value;
  rowToAppend.querySelector('.product .price span').innerText=parseFloat(createdProductPrice.value).toFixed(2)
  rowToAppend.querySelector('.quantity input[value]').value=Math.round(createdProductQuantity.value)
  
  //RESET VARIABLES
  createdProductName.value=""
  createdProductPrice.value=0
  createdProductQuantity.value="1"
  console.log(createdProductQuantity)

  const whereAppend= document.querySelector('tbody')

  whereAppend.appendChild(rowToAppend.cloneNode(true))
  addNewBtnToRemove();
  calculateAll()
    }
    else alert('Debes introducir un PRODUCTO')
}


//Function that includes the Remove buttons of the new lines created

function addNewBtnToRemove(){
  const removeBtn= document.querySelectorAll('.btn-remove')
    removeBtn.forEach(element => {
      
      element.addEventListener("click",removeProduct)
    });
  }


window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const createProductbtn= document.querySelector('#create')
  createProductbtn.addEventListener("click",createProduct)
  addNewBtnToRemove();
  
});


