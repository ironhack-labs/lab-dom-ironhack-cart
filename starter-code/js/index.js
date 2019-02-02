let counter = 1;
let total = 0;
let section = document.getElementsByTagName("section")[0];
let calculateBtn = document.getElementById("calculate-btn");
let createBtn = document.getElementById("create-btn");
let deleteBtn = document.getElementsByClassName("btn-delete");

update();

// Function for multiplying the price with quantity
function multiplyEnter(){
for (let i = 1; i < counter + 1; i++){
    let priceSpan = document.getElementById("price-span" + i).innerHTML;
    let qtyInput = document.getElementById("value" + i);
    let price = parseFloat(priceSpan);
    let qtyNumber = parseFloat(qtyInput.value);
    let sum = price * qtyNumber;
    document.getElementById("result" + i).innerHTML = sum;
    total += sum;
    console.log(total);
    }
}

document.getElementById("calculate-btn").addEventListener('click', function(){
    multiplyEnter();
})

// Event listener for creating another row
createBtn.addEventListener("click", function() {
    counter++;
    let name = prompt('Please insert the name of the product');
    let productPrice = prompt('Please insert the price of the product');
    section.innerHTML += `<div class="row"><p class="name">${name}</p><div class="price-div"><span>$</span><span id="price-span${counter}">${productPrice}</span></div><div class="qty-div"><label for="number">QTY</label><input type="number" name="number" id="value${counter}"></div><div class="sum-div"><span>$</span><span id="result${counter}">0.00</span></div><button class="btn btn-delete">Delete</button></div>`
    update();
});

function btnFunction() {
    document.getElementById("total").innerHTML = `The total price of all products is ${total}`;
}

// Calculate prices button listener
calculateBtn.addEventListener("click", btnFunction);



var clickDeleteHandler = function(event){
    var clickedShoppingItem = event.target.parentElement;
    var container = document.getElementById("section");
    container.removeChild(clickedShoppingItem);
}

function update(){
    for(let j = 0; j < deleteBtn.length; j++) {
        deleteBtn[j].addEventListener("click", clickDeleteHandler);
    }
}