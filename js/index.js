// ITERATION 1

const rowToAppend= (document.querySelector('.product')).cloneNode(true)


function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here

  const price = product.querySelector(".price span");

  const quantity = product.querySelector(".quantity input");

  let subtotal = price.textContent * quantity.value;

  const printSubtotal = product.querySelector(".subtotal span");
  printSubtotal.innerText = subtotal;
  return subtotal;
}


function calculateAll() {
  // ITERATION 2

  const products = document.querySelectorAll(".product");

  products.forEach((element) => {
    updateSubtotal(element);
  });

  // ITERATION 3
  let total = 0;
  products.forEach((element) => {
    //quitamos el símbolo del dolar $
    let onlyNumber = element.querySelector(".subtotal").textContent.slice(1);
    total += parseInt(onlyNumber);
  });
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerText = total;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  console.log("The target in remove is:", target);
  //... your code goes here
target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Creando producto")

  const createdProductName= document.querySelector('.create-product input[type=text]')
  const createdProductPrice= document.querySelector('.create-product input[type=number]')
    if(createdProductName.value!="") 
    {
  rowToAppend.querySelector('.name span').innerText= createdProductName.value;
  rowToAppend.querySelector('.product .price span').innerText=parseInt(createdProductPrice.value).toFixed(2)
  
  createdProductName.value=""
  createdProductPrice.value=0
  const whereAppend= document.querySelector('tbody')
  console.log(whereAppend)
  whereAppend.appendChild(rowToAppend.cloneNode(true))
  addNewBtnToRemove();
  calculateAll()
    }
    else alert('Debes introducir un elemento')
}


//Función que incluye los botones de Remove de las nuevas líenas creadas

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


