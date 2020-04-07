// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // var action = document.querySelector('#calculate')
  // action.onClick = clicked() {
  //   let price = document.querySelector('.price span')
  //   let quantity = document.querySelector('.quantity input')
  //   return price * quantity
  // }

  var price = product.querySelector('.price span').innerHTML
  var quantity = product.querySelector(".quantity input").value

  
  var subTotal = product.querySelector("td.subtotal > span").innerHTML 
  product.querySelector("td.subtotal > span").innerHTML  = price * quantity 

  return price * quantity
  //... your code goes here
}


// iteration 2 & 3
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProduct = document.querySelectorAll('.product');
  let total = 0
  for (let singleProduct of allProduct) { //loops through all products
    let subTotal = updateSubtotal(singleProduct) 
    console.log(subTotal)
    total += subTotal // adds the prices of all products 

  }
  
  console.log(total)
  document.querySelector("#total-value > span").innerHTML = total

}

// ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
//   let removeButton = document.querySelectorAll("td.action > button")
//   let productRemoved = document.querySelectorAll("#cart > tbody > tr")
  
document.querySelectorAll(".btn-remove").forEach((removeButton, i)=> {

  removeButton.addEventListener("click",function (e) {
    console.log(e.target)
    window.target = e.target
    e.target.parentElement.parentElement.remove()
    calculateAll()
    // e.target.parent.remove()
  })
})


 
// }


// ITERATION 5

function createProduct() {

   }
   




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);



  //... your code goes here
});



let creator = document.querySelector("#create")
  creator.addEventListener("click", function (e) {
    console.log(e.target)   
       var inputName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]")
   console.log(inputName)
        var inputPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]")
    console.log(inputPrice)
        var table1 = document.querySelector("#cart > tbody")
        table1.append(inputName)
        table1.append(inputPrice)
   })



