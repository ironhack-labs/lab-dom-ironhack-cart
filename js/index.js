// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const totalPrice = price*quantity
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = totalPrice
  return totalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  // comento la iteración 2 porque la iteración 3 también realiza lo mismo
  // for (element of products){
  // updateSubtotal(element)   
  // }


  // ITERATION 3
  let chartPrice = 0
  for (element of products){
    chartPrice+= updateSubtotal(element)  
  }
  console.log(chartPrice)
  const totalChartPrice = document.querySelector('#total-value span')
  totalChartPrice.innerHTML = chartPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToRemove = target.parentNode.parentNode
  const parent = productToRemove.parentNode
  parent.removeChild(productToRemove)
  calculateAll()
}

// ITERATION 5

function createProduct(event) {

  //obtener datos
  const nameNewProduct = document.querySelectorAll('.create-product input')[0]
  const priceNewProduct = document.querySelectorAll('.create-product input')[1]

  //verificar que se ha introducido algo
  if (!nameNewProduct.value){
    alert ('You have not introduced a valid "Product Name"')
  } else {
    //clonar producto a chart
    const target = event.currentTarget;
    const newElement = target.parentNode.parentNode
    const clonedElement = newElement.cloneNode(true)
    const cart = document.querySelector('#cart tbody')
    cart.appendChild(clonedElement)

    //cambiar clases del elemento clonado
    clonedElement.setAttribute("class", "cloned")
    const parameters = document.querySelectorAll(".cloned td")
    parameters[0].setAttribute("class", "name")
    parameters[1].setAttribute("class", "price")
    parameters[2].setAttribute("class", "quantity")
    parameters[3].setAttribute("class", "subtotal")
    parameters[4].setAttribute("class", "action")

    //cambiar nombre
    const inputName = document.querySelector(".cloned .name input")
    const newName = document.createElement("span")
    parameters[0].removeChild(inputName)
    parameters[0].appendChild(newName)
    newName.innerHTML = nameNewProduct.value

    //cambiar precio
    const inputPrice = document.querySelector(".cloned .price input")
    const newPrice = document.createElement("span")
    parameters[1].removeChild(inputPrice)
    parameters[1].innerHTML = "$"
    parameters[1].appendChild(newPrice)
    newPrice.innerHTML = priceNewProduct.value

    //cambiar cantidad
    const newQuantityBox = document.createElement("input")
    newQuantityBox.setAttribute("type","number")
    newQuantityBox.setAttribute("value","0")
    newQuantityBox.setAttribute("min","0")
    newQuantityBox.setAttribute("placeholder","Quantity")
    parameters[2].appendChild(newQuantityBox)

    //cambiar subtotal
    const newSubtotal = document.createElement("span")
    parameters[3].innerHTML = "$"
    parameters[3].appendChild(newSubtotal)
    newSubtotal.innerHTML = "0"

    //cambiar boton
    const clonedButton = document.querySelector(".cloned .action button")
    clonedButton.removeAttribute("id")
    clonedButton.setAttribute("class","btn btn-remove")
    clonedButton.innerHTML = "Remove"

    //eliminar clase "cloned", datos de formulario y relanzar eventListener para el boton "remove"
    clonedElement.setAttribute("class", "product create-product")
    nameNewProduct.value = ""
    priceNewProduct.value ="0"
    const removeProductBtn = document.getElementsByClassName('btn-remove');
    for (button of removeProductBtn){
      button.addEventListener('click', removeProduct); 
    }     
  }

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  for (button of removeProductBtn){
    button.addEventListener('click', removeProduct); 
  } 

  const createProductBtnBtn = document.getElementById('create');
  createProductBtnBtn.addEventListener('click', createProduct);
});
