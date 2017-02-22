var count = 1;

function createNewItemRow(itemName, itemUnitPrice){
  var currentElement = document.getElementsByClassName('product')[count];
  currentElement.insertAdjacentHTML('afterend', `<div class = "row product"></div>`);



  // itemDiv = document.createElement('div');
  // itemSpan = document.createElement('span');
  // //lets add the span before we add it to the dom
  // itemDiv.appendChild(itemSpan);
  // //lets add the class to the div before we add to document
  // itemDiv.setAttribute('class', 'row product');
  // itemDiv.setAttribute('id', count);
  // //after the id is set lets append the data that was passed
  // var nameNode = document.createTextNode(itemName);
  // var priceNode = document.createTextNode(itemUnitPrice);
  // //insert new nodes
  //
  // itemDiv.appendChild(nameNode)
}

function Product (name, price) {
  count += 1;
  this.currentProd = 'product ${count}';
  this.prodName = name;
  this.prodPrice = price;
  function newrow () {
    this.cart = document.getElementById('elCarto');
    this.newDiv = document.createElement('div');
    this.rowClass = document.setAttribute('class', 'row product');
    this.rowID = document.setAttribute('id', this.currentProd);
    this.row = document.getElementById(this.currentProd);
    this.newSpan = document.createElement('span');
    this.spanID = document.setAttribute('class', 'item');
  }

    this.create = function() {
    cart.appendChild(newDiv);
    row.appendChild(newSpan);
  }
    // document.querySelector('#${this.currentProd}').appendChild(document.createTextNode("Hi There! I'm using JS"));
  }
}

// var setRowclass = setDivclass.value = 'row product';
  this.setColClass = document.setAttribute('class', 'col-cx-2');
var newSpan =
var spanClass =
var producto = document.createTextNode('name');
var prodPrice = document.createTextNode('price');
var addChild = document.querySelector('.product').appendChild(producto);


}



var parent = document.getElementById('parent');
var firstChild = document.getElementById('first-child');
var pTag = document.createElement('p');
var text = document.createTextNode('This text is created dynamically');

pTag.appenChild(text);
parent.insertBefore(pTag, firstChild);

var container = document.getElementById('content');
var pTag = document.getElementById('text');

container.removeChild(pTag);

var contentDiv = document.getElementById('content');

contentDiv.innerHTML = "";

var button = document.getElementById("add-item-button");

button.onclick = function(){
  console.log("adding an element to the list");
}

var button = document.getElementById("add-item-button");

button.onclick = function(){
  console.log("adding an element to the list");
}

var button = document.getElementsByTagName('button')[0];

button.onclick = function(){
  var input = document.getElementsByTagName('input')[0];
  console.log(input.value);
}


// var insertRowClass = setAttributeNode(producto);
// var producto = document.getElementsByClassName('product')[1];
// this.cartColumn = document.createElement('div');
// this.setColclass = document.createAttribute('class');
// this.setColclass.value = 'col-cx-2';
// this.cartColumn.setAttributeNode(setColclass);
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function (health) {
    if (health >= this.health) {
      return (name + ' has died in act of combat');
    } else {
    this.health = this.health - health;
    return name + ' has received ' + health + ' points of damage';
  }
  };

  this.battleCry = function () {
    return 'Odin Owns You All!';
  };

}


}

$(document).ready(function() {
    $('.buttonFinish').click(function(){
        $('.myform').submit();
    });
}

var nodeUno = document.createElement('p');

var textUno = document.createTextNode("Hi there I am using javascript");

nodeUno.appendChild(textUno);

targetBody.appendChild(nodeUno);

console.log(nodeUno);

var parent = document.getElementById('parent');
var firstChild = document.getElementById('first-child');
var pTag = document.createElement('p');
var text = document.createTextNode('This text was created dynamically');

pTag.appendChild(text);
parent.insertBefore(pTag, firstChild);

var bodyA  = document.querySelector('body');
var anotherP = document.createElement('p');
var anotherText = document.createTextNode("Here comes another one... before the div");

anotherP.appendChild(anotherText);
bodyA.insertBefore(anotherP, parent);

//CYRUS METHOD

var p = document.createElement('p');

p.appendChild(document.createTextNode("Hi There! I'm using JS"));

document.querySelector('body').insertBefore(p, parent);

parent.removeChild(nodeUno);
