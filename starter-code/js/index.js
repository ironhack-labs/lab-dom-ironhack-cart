class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

var itemArray = [
  {
    name: "IronBubble-Head",
    price: 25,
    quantity: 0
  },
  {
    name: "IronShirt",
    price: 15,
    quantity: 0
  },
  {
    name: "IronCup",
    price: 10,
    quantity: 0
  },
  {
    name: "IronSticker",
    price: 1,
    quantity: 0
  },
  {
    name: "IronAxe",
    price: 100,
    quantity: 0
  }
];

var htmlCollectionInput;
var htmlCollectionDelButton;
var mainHTMLTag;
var caulculatePricesButton;
var createButton;
var createFields;

window.onload = function() {
  mainHTMLTag = document.getElementById('main');
  generateObjects(itemArray);
  setEventListeners();

  //set event listeners
  createButton = document.getElementById("create-button");
  createFields = document.getElementsByClassName("create-input");
  createButton.addEventListener('click', function () {
    if (createFields[0].value.length > 0) {
      let createName = String(createFields[0].value);
      let createPrice = parseInt(createFields[1].value);
      let newItem = new Item(createName, createPrice, 0);
      itemArray.push(newItem);
    }
    generateObjects(itemArray);
    setEventListeners();
  });
  
  caulculatePricesButton = document.getElementById("calculate-button");
  caulculatePricesButton.addEventListener('click', function(event) {
    var total = 0;
    for(i = 0; i < itemArray.length; i++) {
      total += parseInt(itemArray[i].price * itemArray[i].quantity);
    };
    event.currentTarget.nextElementSibling.innerHTML = "Total: " + "$" + total.toFixed(2).toString();
  })
};

function generateObjects(arr) {
  //clear the main tag children nodes
  while (mainHTMLTag.firstChild) {
    mainHTMLTag.removeChild(mainHTMLTag.firstChild);
  }

  //generate elements
  for (i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
      div.className = "parent-row main-child";
      mainHTMLTag.appendChild(div);
    
    let productName = document.createElement("span");
      productName.className = "secondary-child";
      div.appendChild(productName);
      var textNode = document.createTextNode(arr[i].name);
      productName.appendChild(textNode);
      
    let productPrice = document.createElement("span");
      productPrice.className = "secondary-child";
      div.appendChild(productPrice);
        var textNode = document.createTextNode("$" + arr[i].price.toFixed(2));
        productPrice.appendChild(textNode);

    let inputLabel = document.createElement("label");
      inputLabel.className = "secondary-child";
      inputLabel.setAttribute("for", "quantity");
      div.appendChild(inputLabel);
        var textNode = document.createTextNode("QTY");
        inputLabel.appendChild(textNode);      
      
    let inputField = document.createElement("input");
      inputField.className =  "secondary-child quantity-field";  
      inputField.setAttribute("type", "number");
      inputField.setAttribute("name", "quantity");
      inputField.setAttribute("value", "0");
      inputField.setAttribute("min", "0");
      div.appendChild(inputField);  
    
    let productQuantityPrice = document.createElement("span");
      productQuantityPrice.className = "secondary-child";
      div.appendChild(productQuantityPrice);
        var textNode = document.createTextNode("$" + arr[i].quantity.toFixed(2));
        productQuantityPrice.appendChild(textNode);
        
    let delButton = document.createElement("button");
      delButton.className =  "secondary-child btn btn-delete";
      div.appendChild(delButton);  
        var textNode = document.createTextNode("Delete");
        delButton.appendChild(textNode);
  }
}

function setEventListeners() {
  htmlCollectionInput = document.getElementsByClassName("quantity-field");
  htmlCollectionDelButton = document.getElementsByClassName("btn-delete");

  for (let i = 0; i < htmlCollectionInput.length ; i++) {
    htmlCollectionInput[i].addEventListener('click', function (event) {
      itemArray[i].quantity = parseInt(event.currentTarget.value);
      event.currentTarget.nextSibling.innerHTML = "$" + (parseInt(itemArray[i].quantity) * parseInt(itemArray[i].price)).toFixed(2);
    })    
  };
  for (let i = 0; i < htmlCollectionDelButton.length; i++) {
    htmlCollectionDelButton[i].addEventListener('click', function(event) {
      event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
    })
  };
}