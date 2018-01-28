var productContainer = document.getElementById("product-container");
var createButton = document.getElementById("create-product")
var calculate = document.getElementById("calculate");
//delete item
function deleteItems(){
  //gets delete buttons
  var deleteBtn = document.getElementsByClassName("btn-delete");
  //loop through buttons
  for (let i = 0; i < deleteBtn.length; i++) {
    //onclick event, remove parent
    deleteBtn[i].onclick = (e => {e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode)});
  }
}

//update price
function updatePrices(){
  //gets stuff
  var input = document.getElementsByTagName("input");
  var cost = document.getElementsByClassName("cost");
  var totalCost = document.getElementsByClassName("total-cost");
  var bigBoyPrice = document.getElementById("big-boy-price");
  //onclick event
  calculate.onclick = (e => {
    //loop through cost because getting input by tag was a bad idea, it works out in the end though
    for (let i = 0; i < cost.length; i++) {
      //if input is empty return $0.00 else cost times input
      totalCost[i].innerHTML = input[i].value === "" ? "$0.00" : "$" + (parseFloat(cost[i].innerHTML.slice(1)) * parseFloat(input[i].value)).toFixed(2);
    }
    //turns collection into array, i have no idea how call works but it was in the presentation
    var arr = Array.prototype.slice.call(totalCost);
    //summ of all the costs and displays it in the big cost, in the bottom, the black bold one
    var result = arr.reduce((sum, num) =>  { var number = parseFloat(num.innerHTML.slice(1)); return sum + number},0); 
      bigBoyPrice.innerHTML = "$" + result;
  });
}

//create element
function createElements(){
  //onclick
  createButton.onclick = (e => {
    //gets stuff
    var product = document.getElementsByClassName("product")[0];
    //make clone of the first product, it doesnt work if all the products are deleted but i want to move on to other stuff so yeah. 
    //i guess id have to make a clone and keep it outside the event function and just clone that inside it.
    //true clones the whole thing will children and everything.
    var clone = product.cloneNode(true);
    //gets more stuff
    var inputName = document.getElementById("new-product-name")
    var inputCost = document.getElementById("new-product-cost")
    //changes clones to reflect the input
    clone.children[0].children[0].innerHTML = inputName.value;
    clone.children[1].children[0].innerHTML = "$" + parseFloat(inputCost.value).toFixed(2);
    //adds the altered clone
    productContainer.appendChild(clone);
    //reruns the other functions so that these clones are added to the collections and therefor become interactive
    deleteItems();
    updatePrices();
  })
}
//function calls
var callTheBigBoys = function(){
  createElements();
  deleteItems();
  updatePrices();
}
callTheBigBoys();




  
