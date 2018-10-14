


function deleteItem(item){
var container =  document.querySelectorAll(".container")[item];
container.innerHTML = ""
deleteCounter--
console.log(deleteCounter)

}


function getTotalPrice() {

  var priceInput = []
  price = [];
  var quantityInput = [];
  var quantity = [];
  var totalInput = [];
  var totalPrice = [];


  priceInput = Array.prototype.slice.call(document.querySelectorAll(".cost"));
  priceInput.map(element => {
    price.push((Number(element.innerText[1] + element.innerText[2] + element.innerText[3])))
    return price;
  });
  quantityInput = Array.prototype.slice.call(document.querySelectorAll(".qty"));
  quantityInput.forEach(element => {
    quantity.push(Number(element.value));  
  });

  //calculating the price for each product
  quantity.forEach((element,index) => {
    totalPrice.push(price[index] * element);
  })

  totalInput = Array.prototype.slice.call(document.querySelectorAll(".total"));
  totalInput.forEach((element, index) => {
    element.innerText = "$" + totalPrice[index] + ".00"
  })

  document.getElementById("end-price").innerText ="Total Price: $" + totalPrice.reduce((acc, element) => {
    return acc + element;
  }) + ".00"

}


function createNewItem(){

var wrapper = document.getElementById("wrapper");

//Container
var newProduct = document.createElement("div");
newProduct.classList.add("container")
wrapper.appendChild(newProduct);

//name of Product
var nameDiv = document.createElement("div")
nameDiv.classList.add("name");
nameDiv.innerText = document.querySelector(".name-input").value;
newProduct.appendChild(nameDiv);

//cost of Product
var costDiv = document.createElement("div")
costDiv.classList.add("cost");
costDiv.innerText = "$" + document.querySelector(".price-input").value + ".00";
newProduct.appendChild(costDiv);

//Quantity-container and Input
var quantityContainer = document.createElement("div")
quantityContainer.classList.add("qty-container");
quantityContainer.innerText = "QTY"
var quantityInput = document.createElement("input")
quantityContainer.innerText = "QTY"
quantityInput.classList.add("qty");
quantityInput.setAttribute("type", "number");
quantityInput.setAttribute("placeholder", "0");
quantityContainer.appendChild(quantityInput);
newProduct.appendChild(quantityContainer);

// total cost of item
var totalDiv = document.createElement("div")
totalDiv.classList.add("total");
totalDiv.innerText = "$0.00";
newProduct.appendChild(totalDiv);

// delete Button
var deleteButton = document.createElement("button")
deleteButton.classList.add("btn-delete");
deleteButton.innerText = "Delete";
newProduct.appendChild(deleteButton);
deleteCounter++;
console.log(deleteCounter)
document.querySelectorAll(".btn-delete")[deleteCounter].addEventListener("click",() => {
  deleteItem(deleteCounter)
})

//default values
document.querySelector(".price-input").value = "";
document.querySelector(".name-input").value = "";

}

//Click-Events
document.querySelector(".btn-calc").addEventListener("click",() => {
  getTotalPrice()})

for (let i=0; i<(document.querySelectorAll(".btn-delete").length); i++) {
  document.querySelectorAll(".btn-delete")[i].addEventListener("click",() => {
  deleteItem(i)
  })}

var deleteCounter = 1;
document.querySelector(".btn-create").addEventListener("click",() => {createNewItem()})




