var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');


function updateSubtot(product) {
  // Iteration 1.1

  let unitPrice = product.getElementsByClassName("pu")[0].innerText.split('');
  unitPrice.shift();
  unitPrice=Number(unitPrice.join(''));

  let qty = product.getElementsByClassName("qty")[0].getElementsByTagName("label")[0].getElementsByTagName("input")[0].value
  
  product.getElementsByClassName("subtot")[0].getElementsByTagName("span")[0].innerText=qty*unitPrice;

}

function calcAll() {
  // Iteration 1.2

  //CALCUL SUBTOTAL
  var products=document.getElementsByClassName("product")
  for (let i=0 ; i<products.length;i++) {
    updateSubtot(products[i])
  }

  //CALCUL TOTAL
  var elements=document.querySelectorAll(".subtot");

  var total=0

  for(let i=0 ; i<elements.length;i++) {
    total+=Number(elements[i].getElementsByTagName("span")[0].innerText);
  }

  document.getElementsByTagName("h2")[0].getElementsByTagName("span")[0].innerText=total

}

function deleteProduct(event) {
  console.log(event.target.parentNode.parentNode.remove())
}

function createProduct() {

  var aLine = document.getElementsByClassName("product")[0];
  var newLine= aLine.cloneNode(true);
  aLine.parentNode.appendChild(newLine);

  newLine.getElementsByClassName("pu")[0].innerText="$" + document.getElementById("new-number").value;

  newLine.getElementsByClassName("name")[0].innerText=document.getElementById("new-text").value;

  newLine.getElementsByClassName("qty")[0].getElementsByTagName("label")[0].getElementsByTagName("input")[0].value=0;

  updateSubtot(newLine)

  document.getElementById("new-number").value=0
  document.getElementById("new-text").value="";
  document.getElementById("new-text").focus();


  
}

calc.onclick = calcAll;

var elements=document.querySelectorAll(".btn-delete");
elements.forEach(deleteButton => {
    deleteButton.onclick = function(event) {
      deleteProduct(event)
  }
});

var btnCreate=document.getElementById("create");
btnCreate.onclick = function() {
  createProduct()
}