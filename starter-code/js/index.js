var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');

//let firstProductElement = document.getElementsByClassName('product')[0];

//1. capture quantity
//2.multiply quantity by price unit
//3.display it in subtotal

// let priceunit1 = document.getElementsByClassName("pu")[0].innerHTML
// let quantity1 = document.getElementsByClassName("quantity")[0].value


function updateSubtot(product) {
  console.log(product)

  let sum = 0

  let price1 = product.querySelector('.pu span').innerText
  let input1 = product.querySelector('.quantity').value
  sum = price1 * input1

  product.querySelector(".subtot span").innerText = sum

  return sum



}

// function calcAll() {
//   let product = document.getElementsByClassName("product")[0]


//   updateSubtot(product)
//   // Iteration 1.2
// }


function calcAll() {

  //let subtotal1 = updateSubtot(document.getElementsByClassName("product")[0]);
  //let subtotal2 = updateSubtot(document.getElementsByClassName("product")[1])

  //total = subtotal1 + subtotal2 
  // document.querySelector("h2 span").innerText = total

  //console.log(total) ---> Without Loop

 
  let allElements = document.getElementsByClassName("product");

  let finalTotal = 0
  
    for (let i = 0; i < allElements.length; i++) {

      
      finalTotal += updateSubtot(document.getElementsByClassName("product")[i]);

    updateSubtot(allElements[i])
 
  }
  document.querySelector("h2 span").innerText = finalTotal;

}









calc.onclick = calcAll;


// event.currentTarget
// function number (price){
//   return price
// }

// function total(){
//   let newNumber = 2+2

//   return  number(newNumber) * 20
// }



function productElement(event) {
event.currentTarget.parentElement.parentElement.remove()
  //event.currentTarget.remove()
  //document.getElementsByClassName("product")[0].remove();
}
let deleteButton = document.getElementsByClassName("btn btn-delete")[0];
deleteButton.onclick = productElement;

function productElement2(event) {
  event.currentTarget.parentElement.parentElement.remove()
  //document.getElementsByClassName("product")[1].remove();
}
let deleteButton2 = document.getElementsByClassName("btn btn-delete")[1];

deleteButton2.onclick = productElement2;