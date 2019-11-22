var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * computes the amount due for \p $product
 * @param {*} $product 
 */
function updateSubtot($product) {
  // Iteration 1.1
  // get td elements
  let puCell=$product.getElementsByClassName("pu")[0];
  let pu=parseFloat(puCell.getElementsByTagName("span")[0].innerText);
  let qtyCell=$product.getElementsByClassName("qty")[0];
  let qty=parseInt(qtyCell.getElementsByTagName("input")[0].value);
  console.log("Computing "+pu+"*"+qty+".");
  let subtotal=pu*qty;
  let suCell=$product.getElementsByClassName("subtot")[0];
  suCell.getElementsByTagName("span")[0].innerText=subtotal.toFixed(2);
  return subtotal;
}

function showTotal(total){
  document.querySelector('h2 span').innerText=total.toFixed(2);
}

function calcAll() {
  // Iteration 1.2
  // get all rows (with tag `tr`)
  let productrows=$cart.getElementsByTagName("tr");
  console.log("Number of product (rows):",productrows.length);
  // iterate over all rows in the table
  let total=0;
  for(let productrow of productrows){
    total+=updateSubtot(productrow);
  }
  // show the total
  showTotal(total);
}

function deleteproductrow(productrow){  ////console.log("Delete button clicked!");
  $cart.removeChild(productrow);
  calcAll();
}

function addproduct(){
  // get the name and price
  let addproductrow=document.querySelector("#cart tfoot").children[0];
  let newproductname=addproductrow.children[0].children[0].value;
  console.log("New product name: ",newproductname);
  let newproductprice=addproductrow.children[1].children[0].value;
  console.log("New product price: ",newproductprice);
  if(!newproductname||newproductname.length==0){
    alert("No product name specified.");
    return;
  }
  if(!newproductprice||newproductprice.length==0){
    alert("No product price specified.");
    return;
  }
  console.log("Adding a new product!");
  let newproductrow=document.createElement("tr");
  // add all the cells we need
  let newproductrowHTML="";
  newproductrowHTML+='<td class="name"><span>'+newproductname+'</span></td>';
  newproductrowHTML+='<td class="pu">$<span>'+parseFloat(newproductprice).toFixed(2)+'</span></td>';
  newproductrowHTML+='<td class="qty"><label><input type="number" value="0" min="0"></label></td>';
  newproductrowHTML+='<td class="subtot">$<span>0</span></td>';
  newproductrowHTML+='<td class="rm"><button class="btn btn-delete">Delete</button></td>';
  newproductrow.innerHTML=newproductrowHTML;
  newproductrow.querySelector(".rm button").onclick=function(){
    deleteproductrow(newproductrow);
  };
  // append it to the cart
  $cart.appendChild(newproductrow);
}

$calc.visibility="hidden";
$calc.onclick = calcAll;

window.onload=function(){
  this.$calc.visibility="visible";
  // allocate the delete product event handler to the Delete buttons
  let productrows=$cart.getElementsByTagName("tr");
  for(let productrow of productrows){
    var deletebutton=productrow.querySelector(".rm button");
    deletebutton.onclick=function(){
      deleteproductrow(productrow);
    }
  }
  /* replacing:
  let deletebuttons=$cart.querySelectorAll("tr button");
  for(let deletebutton of deletebuttons){
    deletebutton.onclick=function(){
      deleteproduct(deletebutton);
    };
  }
  */
  this.document.getElementById("create").onclick=addproduct;
}