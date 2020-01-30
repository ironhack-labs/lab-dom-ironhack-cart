var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// // Iteration 1

function updateSubtot(product) {
  let priceProduct = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  let sub = priceProduct * quantity;
  return sub;
}

// let allTheProducts = document.querySelectorAll(".product")
// allTheProducts.forEach(product => { 
//   product.onchange = function() { 
//   product.querySelector('.subtot span').innerText = updateSubtot(product) 
// } })


function productRecall() {

  let allTheProducts = document.querySelectorAll(".product")
  allTheProducts.forEach(product => { 
    product.onchange = function() { 
    product.querySelector('.subtot span').innerText = updateSubtot(product) 
  } })
  
}


for (i =0; i < document.querySelectorAll(".product").length; i ++){

  console.log("hi")
  let allTheProductsLoop = document.querySelectorAll(".product")
  allTheProductsLoop[i].onclick = productRecall()

}


// // // Iteration 2

// FIRST ATTEMPT

// var $product = document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]")

// function updateSubtot(){

//     rowArray = Array.from(document.querySelector("#cart > tbody").rows)

//     console.log(rowArray)

//     for(i=0;i<rowArray.length;i++){
//       console.log("each produc: ", rowArray[i])
//       rowArray[i].querySelector("td.subtot > span").innerHTML = Number(rowArray[i].querySelector(`td.qty > label > input[type=number]`).value)*Number(rowArray[i].querySelector(`td.pu > span`).innerHTML)
    
//       // document.querySelector(`#cart > tbody > tr:nth-child(${i}) > td.subtot > span`).innerHTML = Number(document.querySelector(`#cart > tbody > tr:nth-child(${i}) > td.qty > label > input[type=number]`).value)*Number(document.querySelector(`#cart > tbody > tr:nth-child(${i}) > td.pu > span`).innerHTML)

//     }


// }

// $product.onchange = updateSubtot

// FINISHED CODE

const allProducts = document.querySelectorAll("tr.product");
allProducts.forEach(row => {
  let price= row.children[1].children[0].innerText; // Way of doing it #1
  let qty=row.querySelector(".qty input").value //Accesses the qty class and the input child // Way of doing it #2
  row.querySelector(".subtot span").innerText = price*qty;
})


// Iteration 3

// FIRST ATTEMPT

function calcAll() {

  let count = 0
  document.querySelectorAll('.subtot').forEach(element => count += Number(element.innerText.slice(1)))
  document.querySelector("body > h2 > span").innerHTML = count // Should be total

}

$calc.onclick = calcAll;

//Iteration 4

/// FIRST ATTEMPT

// let delete1 = document.querySelector("#cart > tbody > tr:nth-child(1) > td.rm > button")
// let delete2 = document.querySelector("#cart > tbody > tr:nth-child(2) > td.rm > button")

// function deleteProduct1 () {
//   document.querySelector("#cart > tbody").deleteRow(0)
// }

// function deleteProduct2 () {
//   document.querySelector("#cart > tbody").deleteRow(1)
// }

// delete1.onclick = deleteProduct1
// delete2.onclick = deleteProduct2

/// SECOND ATTEMPT

function deleteProduct (button) {

  button.parentElement.parentElement.remove();
 
}

Array.from(document.getElementsByClassName("btn btn-delete")).forEach(button => button.onclick = ()=> deleteProduct(button));

// Iteration 5

function deleteRecall () {
  Array.from(document.getElementsByClassName("btn btn-delete")).forEach(button => button.onclick = ()=> deleteProduct(button));
}

let newProduct = document.querySelector("#create")

function createProduct () {
  let productName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;
  let productPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
  // document.querySelector("#cart > tbody").insertRow((document.querySelector("#cart > tbody").rows.length))
  let row = 
  `<tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>

    <td class="pu">$<span>${productPrice}</span></td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0" />
      </label>
    </td>

    <td class="subtot">$<span>0</span></td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>`;

document.querySelector("#cart > tbody").innerHTML += row

productRecall()

deleteRecall ()

}

newProduct.onclick = createProduct

