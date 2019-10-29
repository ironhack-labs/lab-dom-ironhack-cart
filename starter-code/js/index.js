var calcButton = document.getElementById('calc');

// iteration 1 version
// calcButton.onclick = function(){

//   let unitPrice = Number(document.querySelector('.pu > span').innerText);
//   // everything is always a String if you grab it through the DOM so we have to coerce it into a number

//   let quantity = Number(document.querySelector('.qty > label > input').value);

//   let sutToteSpan = document.querySelector('.subtot > span');

//   sutToteSpan.innerText = quantity * unitPrice;
// }


// iteration 2 version
// calcButton.onclick = function () {
//   let rows = document.getElementsByClassName('product');
  
//   console.log(rows);

//   for (let i = 0; i < rows.length; i++) {

//     console.log(rows[i]);

//     let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
//     // everything is always a String if you grab it through the DOM so we have to coerce it into a number

//     let quantity = Number(rows[i].querySelector('.qty > label > input').value);

//     let sutToteSpan = rows[i].querySelector('.subtot > span');

//     sutToteSpan.innerText = quantity * unitPrice;
//   }
// }


// Iteration 3: Total
// Now that you have each product 's subtotal, you need to calculate the total price of all the products in the shopping cart. Once you have that number, you need to display the result in the HTML:

calcButton.onclick = function () {
  let rows = document.getElementsByClassName('product');
  console.log(rows)
  let totalArray = []

  for (let i = 0; i < rows.length; i++) {

    let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
    // everything is always a String if you grab it through the DOM so we have to coerce it into a number
    
    let quantity = Number(rows[i].querySelector('.qty > label > input').value);
    
    let sutToteSpan = rows[i].querySelector('.subtot > span');
    
    // update subtotal
    sutToteSpan.innerText = quantity * unitPrice;

    // update total
    totalArray.push(quantity * unitPrice)
    let totalPrice = totalArray.reduce((a,b) => a += b)
    document.querySelector("body > h2 > span").innerText = totalPrice;
  }
}


// iteration 4
// Select all the "Delete" buttons
let deleteBtns = document.getElementsByClassName('btn-delete')

// For each button, assign a click event that will:
// select the wrapper tr that contains all the HTML
// for the product that should be deleted,
// select the tbody parent that contains all of the product wrapper trs,
//   use the method removeChild we already saw in the lesson
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].onclick = deleteTheRow;
}
function deleteTheRow(event){
  // delete parent of parent element
  event.currentTarget.parentNode.parentNode.remove()
  // event.currentTarget.parentElement.parentElement.remove()
}
// ^this version is with a named function

// for(let i=0; i< deleteBtns.length; i++){
//   deleteBtns[i].onclick = function(){
//     event.currentTarget.parentElement.parentElement.remove();
//   }
// }
// ^ this version is with an anonymous function, its a tiny bit shorter


// Iteration 5: Creating new products
document.getElementById('create').onclick = function(){
  console.log('yes')

  // grab text value from input
  let newName = document.querySelector('.new > td > input[type="text"].value')
  
  // grab number value from input
  let newPrice = document.querySelector('.new > td > input[type="number"].value')
  console.log(newName, newPrice)


  let newRow = document.createElement('tr');
  newRow.classList.add('product')

  newRow.innerHTML = newRowInnerHtml

  document.querySelector()


}




let newRow = `
      < tr class = "product" >
        <
        td class = "name" >
        <
        span > IronHack Artisinal Tie Dye Shirt < /span> <
        /td>

        <
        td class = "pu" >
        $ < span > 80.00 < /span> <
        /td>

        <
        td class = "qty" >
        <
        label >
        <
        input type = "number"
      value = "0"
      min = "0" >
        <
        /label> <
        /td>

        <
        td class = "subtot" >
        $ < span > 0 < /span> <
        /td>

        <
        td class = "rm" >
        <
        button class = "btn btn-delete" > Delete < /button> <
        /td> <
        /tr>
`