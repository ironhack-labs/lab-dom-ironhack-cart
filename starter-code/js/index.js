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
calcButton.onclick = function () {

  let rows = document.getElementsByClassName('product');

  console.log(rows);

  for (let i = 0; i < rows.length; i++) {

    console.log(rows[i]);

    let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
    // everything is always a String if you grab it through the DOM so we have to coerce it into a number


    let quantity = Number(rows[i].querySelector('.qty > label > input').value);


    let sutToteSpan = rows[i].querySelector('.subtot > span');

    sutToteSpan.innerText = quantity * unitPrice;

  }









}









document.querySelector('.btn-delete').onclick = function (e) {

  console.log(e.currentTarget.parentElement.parentElement);
}
