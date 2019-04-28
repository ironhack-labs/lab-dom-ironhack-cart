// let productPrice = document.getElementsByClassName("coste")[0].innerHTML
// let productQuantity = document.getElementsByClassName("quantity")[0].value
const calculatePriceBtn = document.getElementById("calculatePriceBtn")
// let totalProduct = document.getElementsByClassName("totalProduct")[0].innerHTML
const numberOfProducts = document.getElementsByClassName("productRow")

calculatePriceBtn.onclick = () => {
  for (let i = 0; i < numberOfProducts.length; i++) {
    const totalProductValue = document.getElementsByClassName("coste")[i].innerHTML * document.getElementsByClassName("quantity")[i].value
    // (2) no entiendo porque no puedo dar a una variable el valor de document.getElementsByClassName("quantity")[0].value y todos los demas
    document.getElementsByClassName("totalProduct")[i].innerHTML = totalProductValue

  }
  document.querySelector("h2 span").innerHTML = 0
  for (let i = 0; i < numberOfProducts.length; i++) {
    let numberToBeParsed = document.getElementsByClassName("totalProduct")[i].innerHTML
    let initialNumberToBeParsed = document.querySelector("h2 span").innerHTML
    let parsedInitialNumber = parseFloat(initialNumberToBeParsed) 
    document.querySelector("h2 span").innerHTML = parsedInitialNumber + parseFloat(numberToBeParsed) 

  }
}


let newProductName = document.querySelector(".newProductName").value
let newProductPrice = document.querySelector(".newProductPrice").value
let createNewProductBtn = document.querySelector(".btn-create")

createNewProductBtn.onclick = () => {

  // CREATING THE WHOLE ROW, COLS AND ELEMENTS
  
    let newRow = document.createElement("div")
    let newCol1 = document.createElement("div")
    let newCol2 = document.createElement("div")
    let newCol3 = document.createElement("div")
    let newCol4 = document.createElement("div")
    let newCol5 = document.createElement("div")
    let newColBtnDiv = document.createElement("div")
    let newQuantityInputDiv = document.createElement("div")
    
    
    let spanName = document.createElement("span")
    let spanDollarSign = document.createElement("span")
    let spanDollarSign2 = document.createElement("span")
    let spanPrice = document.createElement("span")
    let newLabelQty = document.createElement("label")
    let newInputQty = document.createElement("input")
    let newProductTotal = document.createElement("span")
    let newDeleteBtn = document.createElement("button")
    
    // GIVING CLASSES TO ALL THE COLS  

    newRow.setAttribute("class", "row productRow")
    newCol1.setAttribute("class", "col")
    newCol2.setAttribute("class", "col")
    newCol3.setAttribute("class", "col")
    newCol4.setAttribute("class", "col")
    newCol5.setAttribute("class", "col")
    newColBtnDiv.setAttribute("class", "deleteDiv")
    newQuantityInputDiv.setAttribute("class", "quantityInput")
    
    // GIVING CLASS AND VALUES TO ALL THE ELEMENTS

    spanName.setAttribute("class", "nombre")
    spanName.textContent = document.querySelector(".newProductName").value
    spanDollarSign.textContent =  "$"
    spanDollarSign2.textContent = "$"
    spanPrice.setAttribute("class", "coste")
    spanPrice.textContent = document.querySelector(".newProductPrice").value
    newLabelQty.setAttribute("for", "quantity")
    newLabelQty.textContent = "QTY"
    newInputQty.setAttribute("type", "number")
    newInputQty.setAttribute("name", "quantity")
    newInputQty.setAttribute("class", "quantity")
    newProductTotal.setAttribute("class", "totalProduct")
    newProductTotal.textContent = "0.00"
    newDeleteBtn.setAttribute("class", "btn btn-delete delBtn")
    newDeleteBtn.textContent = "Delete"
    
  // PLACING ALL THE ELEMENTS IN ORDER IN THE HTML

    document.querySelector(".container").appendChild(newRow)
    newRow.appendChild(newCol1)
    newRow.appendChild(newCol2)
    newRow.appendChild(newCol3)
    newRow.appendChild(newCol4)
    newRow.appendChild(newCol5)
    newCol1.appendChild(spanName)
    newCol2.appendChild(spanDollarSign)
    newCol2.appendChild(spanPrice)
    newCol3.appendChild(newQuantityInputDiv)
    newQuantityInputDiv.appendChild(newLabelQty)
    newQuantityInputDiv.appendChild(newInputQty)
    newCol4.appendChild(spanDollarSign2)
    newCol4.appendChild(newProductTotal)
    newCol5.appendChild(newColBtnDiv)
    newColBtnDiv.appendChild(newDeleteBtn)
    
  }
  


let buttonsList = document.getElementsByClassName("delBtn")

  // FUNCTION TO SELECT THE ELEMENT CLICKED AND TELL THE PARENT TO DELETE EVERYTHING 
function deleteRow(e) {
  // funcionar funciona... pero me parece el codigo peor escrito de la historia. "parentNodeparentNodeparentNodepare..."
  const rowToDelete = e.currentTarget.parentNode.parentNode.parentNode
  const rowParent = rowToDelete.parentNode
  rowParent.removeChild(rowToDelete)
}
// LOOP TO CHECK WHEN A DELETE BUTTON IS CLICKED
for (let i = 0; i < buttonsList.length; i++) {
  buttonsList[i].onclick = deleteRow
}