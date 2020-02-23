var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var firstrow = document.querySelectorAll('.product')[0];


// Iteration 1.1
function updateSubtot($product) {

  let unitprice = $product.querySelector('.pu span').innerHTML;
  let quantity = $product.querySelector('.qty input').value;

  //calculate product
  let subtotal = unitprice*quantity;

  //update the subtotal
  $product.querySelectorAll('.subtot span')[0].innerHTML=subtotal;

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

//Iteration 4: Delete buttons 

//Select all delete buttons
function deleteSetup(){
  var deleteButtons= document.querySelectorAll('.rm button');
  //Add event to every button
  for (var i = 0; i<deleteButtons.length; i++) {
      var $button = deleteButtons[i];
            $button.addEventListener("click", function(){
              var $row = event.currentTarget.closest('tr');
              var $body = $row.parentNode;
              $body.removeChild($row);
            });
  }
}

deleteSetup();


