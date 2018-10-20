
var product = document.querySelectorAll(".product");
var productName = document.querySelector(".product-name").innerHTML;
var productPrice = document.querySelectorAll(".product-price")
var productQty = document.querySelectorAll(".qty");
var productTotalPrice = document.querySelectorAll(".price-qty");

var calculatePrice = document.querySelector("#calc-prices-button");
var totalPrice = document.querySelector(".total-price");


var deleteButton = document.querySelectorAll(".delete-btn");

var newItemName = document.querySelector("#new-item-name");
var newItemPrice = document.querySelector("#new-item-price");
var newItemButton = document.querySelector("#new-item-btn");
var newItemTemplate = document.querySelector(".item").cloneNode(true);
var itemList = document.querySelector("ol");

function calc () {
	var product = document.querySelectorAll(".product");
	var productQty = document.querySelectorAll(".qty");
	var productPrice = document.querySelectorAll(".product-price")
	
	for (var i = 0; i < product.length; i++) {
		var priceQty = Number(productQty[i].value) * Number(productPrice[i].innerHTML);

		productTotalPrice[i].innerHTML = priceQty;
	};
};

function calcTotalPrice () {
	var productTotalPrice = document.querySelectorAll(".price-qty");

	var sum = 0;
	for (var i = 0; i < productTotalPrice.length; i++) {
		sum += Number(productTotalPrice[i].innerHTML);
	};

	totalPrice.innerHTML = sum;
};

calculatePrice.onclick = function () {
	calc();

	calcTotalPrice();
};


function deleteItem(e){
	var isOkay = confirm("Are you sure you wand to delete this item?");			
	if (isOkay) {
		e.currentTarget.parentNode.parentNode.remove();	
		
	};	
};

function createItem () {
	//fetch user input
	var newItemName = document.querySelector("#new-item-name").value;
	var newItemPrice = document.querySelector("#new-item-price").value;


	//fetch item tree and clone to new item

	var newItem = newItemTemplate.cloneNode(true);
	
	//assign user values to new item
	newItem.querySelector(".product-name").innerHTML = newItemName;
	newItem.querySelector(".product-price").innerHTML = newItemPrice;

	var deleteButton = newItem.querySelectorAll(".btn-delete");
	
	//art delete trigger
	deleteButton.forEach (function (placeholder) {
		placeholder.onclick = deleteItem;
	});
	//add newly created item
		itemList.appendChild(newItem);
	


	//reset input boxes
	document.querySelector("#new-item-name").value = "";
	document.querySelector("#new-item-price").value = "";
};

newItemButton.onclick = function () {
	// run only if both input fields are populated
	if (document.querySelector("#new-item-name").value !== "" && document.querySelector("#new-item-price").value !== "") {
	createItem();
	};

	//update arrays
	deleteButton = document.querySelectorAll(".delete-btn");
	product = document.querySelectorAll(".product");
	productQty = document.querySelectorAll(".qty");
	productPrice = document.querySelectorAll(".product-price")
	productTotalPrice = document.querySelectorAll(".price-qty");
};



window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  };
  calc();
  calcTotalPrice();
};
