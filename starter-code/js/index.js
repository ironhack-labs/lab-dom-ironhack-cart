var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// var allDelete = document.querySelectorAll(".rm button");

// // This is my CODE
// var $subtotal = document.querySelectorAll(".subtot span");
// var product = document.querySelectorAll(".pu span");
var $create = document.getElementById("create");
// updateSubtot();

// function updateSubtot($product) {
//   let subtotal = 0;
//   // Iteration 1.1
//   // Grab all INPUTS and forEach
//   document.querySelectorAll("input[type=number]").forEach(input => {
//     input.onchange = function(e) {
//         let price = Number(e.target.parentNode.parentNode.parentNode.querySelector(".pu span").innerHTML);
//         subtotal = price * this.value;
//         e.target.parentNode.parentNode.parentNode.querySelector(".subtot span").innerHTML = subtotal;
//         // console.log(subtotal, price, this.value);
//       };
//     }); return subtotal
// }


// function calcAll() {
//       let total = 0;
//       document.querySelectorAll(".subtot").forEach(element => { 
//         total += Number(element.innerText.slice(1));
//       });
//       document.querySelector("body > h2 > span").innerHTML = total;
//       // let subtotal = 0
// }

// $calc.onclick = calcAll;

// function deleteRow () {
//     let deletItem = document.querySelector('tbody')
//     deleteItem.removeChild()
// }

// document.querySelector("#cart > tbody > tr:nth-child(2)");

// $delete.onclick = deleteRow;



function createNew () {
    let newItem = document.querySelector('tbody')

    let newName = document.querySelector(".new input").value;
    let newPrice = Number(document.querySelector(".new td:nth-child(2) input").valueAsNumber.toFixed(2));
    newItem.innerHTML += `<tr class="product">
        <td class="name">
          <span>${newName}</span>
        </td>

        <td class="pu">
          $<span>${newPrice}</span>
        </td>

        <td class="qty">
          <label>
            <input type="number" value="0" min="0" />
          </label>
        </td>

        <td class="subtot">
          $<span>0</span>
        </td>

        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>
      </tr>`;
}

$create.onclick = createNew;

// // document.querySelector("#cart > tbody > tr:nth-child(" + [i] +") > td.pu > span").innerHTML;

// // document.querySelectorAll("input[type=number]").forEach(input =>{
// //   input.onchange = function(e){
// //     let subtotal = 0;
// //     let price = Number(e.target.parentNode.parentNode.parentNode.querySelector('.pu span').innerHTML)
// //     subtotal = price * this.value;
// //     e.target.parentNode.parentNode.parentNode.querySelector(".subtot span").innerHTML = subtotal;
// //     console.log(subtotal, price, this.value, e, e.target, e.target.value)
// //   }
// // })

// // document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]").onchange = function(e){
// //   console.log(e, e.target.value, this.value)
// // }

// // document.querySelector("#cart > tbody > tr:nth-child(2) > td.subtot");
// // document.querySelector("#cart > tbody > tr:nth-child(2) > td.qty");
// // document.querySelector("#cart > tbody > tr:nth-child(2) > td.pu");

// // document.querySelector("#calc");

//REVIEWED ITERATIONS
// Iteration 1

function updateSubtot(product) {
  // Iteration 1.1
  // console.log(product);
  let priceProduct = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  // console.log("price: " + priceProduct);
  // console.log("quantity: " + quantity);
  let sub = priceProduct * quantity;
  // console.log("sub: " + sub);
  // subTotal.textContent = Number(priceProduct.textContent) * Number(quantity.value)

  return sub;
}

function calcAll() {
  // Iteration 1.2
  // Part ONE of ITERATION
  // let product = document.querySelector("#cart > tbody > tr");
  // let sub = document.querySelector("#cart > tbody > tr > td.subtot > span");
  // let justText = document.querySelector("#cart > tbody > tr > td.subtot > span")
  //   .innerHTML;
  // // console.log(typeof sub, typeof justText);
  // sub.innerText = updateSubtot(product);

  // Part ONE of ITERATION
// Number(document.querySelector(".new td:nth-child(2) input").valueAsNumber.toFixed(2)); //Notes - IDEAS...

  const allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach(row => {
    let price = row.children[1].children[0].innerHTML; //Done with Children
    let qty = row.querySelector(".qty input").value; //Done with querySelector
    row.querySelector(".subtot span").innerHTML = price * qty;  //Didn't have to declare the variable before use
  });
        let total = 0;
        document.querySelectorAll(".subtot span").forEach(subtotal => {total += Number(subtotal.innerText);});
        document.querySelector("body > h2 > span").innerHTML = total;
}
$calc.onclick = calcAll;

// function deleteRow () {
//     allDelete.forEach(button => {
//       button.onclick = (e) => { 
//         console.log(e, e.currentTarget, this.value)
//       e.currentTarget.parentNode.parentNode.querySelector("tbody").remove(document.querySelector("tr.product"));
//       }
//     })
// }
// allDelete.onclick = deleteRow;

let deleteBtnCollection = document.getElementsByClassName("btn btn-delete");
for (let i = 0; i < deleteBtnCollection.length; i++) {
  deleteBtnCollection[i].onclick = removeProduct;
}

function removeProduct(event) {

  event.currentTarget.parentElement.parentElement.remove();
} 

// allDelete.forEach(button => (button.onclick = () => button.remove()));

// document.querySelector("#cart > tbody > tr:nth-child(1) > td.rm > button");

// // document.querySelectorAll("input[type=number]").forEach(input =>{
// //   input.onchange = function(e){
// //     let subtotal = 0;
// //     let price = Number(e.target.parentNode.parentNode.parentNode.querySelector('.pu span').innerHTML)
// //     subtotal = price * this.value;
// //     e.target.parentNode.parentNode.parentNode.querySelector(".subtot span").innerHTML = subtotal;
// //     console.log(subtotal, price, this.value, e, e.target, e.target.value)
// //   }
// // })

// document.querySelector("#cart > tbody > tr:nth-child(2) > td.rm > button");
// document.querySelector("td.rm button");