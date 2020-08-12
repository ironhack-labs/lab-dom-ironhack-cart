// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = price * quantity;
  return price * quantity;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here  
  const multipleProduct = document.querySelectorAll('.product');
  let totalValueElem = document.querySelector("#total-value span");
  let totalValue = 0;

  multipleProduct.forEach(elem => {
    totalValue += updateSubtotal(elem);
  })


  // ITERATION 3
  //... your code goes here
  totalValueElem.innerHTML = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  target.remove();
  calculateAll()
  //console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  let nameProduct = document.querySelector("#create").parentElement.parentElement.children[0].children[0].value;
  let quantityValue = document.querySelector("#create").parentElement.parentElement.children[1].children[0].value;

  if(nameProduct === ""){
    alert("nombre no tiene nada")
    return;
  }

  if(quantityValue <= 0){
    alert("valor tiene 0")
    return;
  }
  let trParent = document.createElement("tr");
  trParent.classList.add("product")

  let tdName = document.createElement("td")
  tdName.classList.add("name");
  tdName.innerHTML = `<span>${nameProduct}</span>`;
  trParent.appendChild(tdName)

  let tdPrice= document.createElement("td")
  tdPrice.classList.add("price");
  tdPrice.innerHTML = `$<span>${quantityValue}</span>`;  
  trParent.appendChild(tdPrice)

  let tdQuantity= document.createElement("td")
  tdQuantity.classList.add("quantity");
  let inputNumber = document.createElement("input");
  inputNumber.type = "number";
  inputNumber.value = 0;
  inputNumber.min = 0;
  inputNumber.placeholder = "Quantity";
  inputNumber.onblur = function (){
    updateSubtotal(trParent)
    calculateAll();
  }

  tdQuantity.appendChild(inputNumber);
  trParent.appendChild(tdQuantity);

  let tdSubtotal = document.createElement("td")
  tdSubtotal.classList.add("subtotal");
  tdSubtotal.innerHTML = "$<span>0</span>";
  trParent.appendChild(tdSubtotal);

  let tdAction = document.createElement("td")
  let buttonElement = document.createElement("button");
  buttonElement.classList.add("btn")
  buttonElement.classList.add("btn-remove")
  buttonElement.onclick = removeProduct;
  buttonElement.innerText = "Remove";
  tdAction.appendChild(buttonElement);
  trParent.appendChild(tdAction);

  document.querySelector("tbody").appendChild(trParent)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(elem =>{
    elem.onclick = removeProduct;
  })

  let inputChange = document.querySelectorAll(".quantity input")
  inputChange.forEach(elem => {
    elem.onblur = function (){

      updateSubtotal(elem.parentElement.parentElement)
      calculateAll();
    }
  })

  document.querySelector("#create").addEventListener("click", createProduct)

});
