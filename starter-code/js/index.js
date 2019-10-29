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
calcButton.onclick = function(){
  let theTotal = 0;

  let rows = document.getElementsByClassName('product');

  //console.log(rows);

 for(let i = 0; i < rows.length; i++){

  //console.log(rows[i]);

   let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
  // everything is always a String if you grab it through the DOM so we have to coerce it into a number


  let quantity = Number(rows[i].querySelector('.qty > label > input').value);
  let productTotal = Number(quantity*unitPrice);

  
  let sutToteSpan = rows[i].querySelector('.subtot > span');

  sutToteSpan.innerText = productTotal;

  theTotal += productTotal;

  document.querySelector('h2 span').innerText = theTotal;
  
  
 }
 
 

}



let deleteBtns = document.getElementsByClassName('btn-delete');

for(let i=0; i< deleteBtns.length; i++){
    deleteBtns[i].onclick = deleteTheRow;
}

function deleteTheRow(event){
  event.currentTarget.parentElement.parentElement.remove();
}

document.getElementById('create').onclick = function(){

  let newName = document.querySelector('.new > td > input[type="text"]').value;

  let newPrice = document.querySelector('.new > td > input[type="number"]').value;

 
let newRowInnerHtml = `
<td class="name">
  <span>${newName}</span>
</td>
<td class="pu">
  $<span>${newPrice}</span>
</td>
<td class="qty">
  <label>
    <input type="number" value="0" min="0">
  </label>
</td>
<td class="subtot">
  $<span>0</span>
</td>
<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>
`

let newRow = document.createElement('tr');
newRow.classList.add('product');

newRow.innerHTML = newRowInnerHtml;

newRow.querySelector('.btn-delete').onclick = deleteTheRow;

document.querySelector('tbody').appendChild(newRow);



 document.querySelector('.new > td > input[type="text"]').value = "";

document.querySelector('.new > td > input[type="number"]').value = "";

}