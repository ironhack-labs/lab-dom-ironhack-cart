var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var firstrow = document.querySelectorAll('.product')[0];

function updateSubtot($product) {
  
  // Iteration 1.1
  let unitprice = $product.querySelector('.pu span').innerHTML;
  let quantity = $product.querySelector('.qty input').value;

  //calculate product
  let subtotal = unitprice*quantity;

  console.log(unitprice);
  console.log(quantity);

  $product.querySelectorAll('.subtot span')[0].innerHTML=subtotal;
  console.log(subtotal);
  return subtotal;
  
}

function calcAll() {
//number of rows
    var rows = document.querySelectorAll('.product').length;
    let total = 0;
  
     //loop through rows and add subtotal to sum
     for (var i = 0; i<rows; i++) {
      // get ith row, update total
                var irow= document.querySelectorAll('.product')[i];
                total += updateSubtot(irow);  
     }
     
     //change total in html
     document.querySelectorAll('h2 span')[0].innerHTML = total;
     return total;
   }



$calc.onclick = calcAll;

updateSubtot(firstrow);
console.log(firstrow);
calcAll();