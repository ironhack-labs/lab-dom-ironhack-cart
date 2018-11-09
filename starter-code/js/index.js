/* *************************** CALCULATE PRICES *************************************** */
function calculatePrices() {
	var totalSum = 0;
	var table = document.getElementById("product-table");
	//console.log(table.rows)
	for (var i = 0, row; row = table.rows[i]; i++) {
		if (!row.classList.contains("addproduct")) {
			var price = row.cells[1].getElementsByTagName("input")[0].value;
			var quantity = row.cells[2].getElementsByTagName("input")[0].value;
			var totalPriceProduct = price * quantity;
			row.getElementsByClassName("totalproduct")[0].innerHTML = "Price: $ " + totalPriceProduct;
			totalSum += totalPriceProduct;
		}
	}
	document.getElementById("totalprice").innerHTML = totalSum;
}
calculatePrices();

/* ************************ EMPTY CART CHECK *********************************** */

function cartEmpty() {
	var newArray = [];
	var table = document.getElementById("product-table");
	for (var i = 0, row; row = table.rows[i]; i++) {
		if (!row.classList.contains("addproduct")) {
			newArray.push(row);
		}
	}
	if (newArray.length === 0) {
		document.getElementsByClassName("empty-cart")[0].style.display = 'block';
	} else {
		document.getElementsByClassName("empty-cart")[0].style.display = 'none';
	}
}
cartEmpty();


/* ************************ DELETE ITEM *********************************** */
var deleteRow = function (event) {
	var parent = event.currentTarget.parentElement.parentElement.parentElement;
	var child = event.currentTarget.parentElement.parentElement;
	parent.removeChild(child);
	calculatePrices();
	cartEmpty();
};

function addDeleteListener() {
	var deleteButtons = document.getElementsByClassName("btn-delete");
	for (var i = 0; i < deleteButtons.length; i++) {
		//console.log(deleteButtons[i]);
		deleteButtons[i].addEventListener('click', deleteRow);
	}
}
addDeleteListener();
/* ************************ CREATE ITEM *********************************** */

var addRow = function () {
	var table = document.getElementById("product-table");
	var row = table.insertRow(0);

	var nameCell = row.insertCell(0);
	nameCell.innerHTML = event.currentTarget.parentElement.parentElement.getElementsByTagName("input")[0].value;

	var priceCell = row.insertCell(1);
	var priceContent = event.currentTarget.parentElement.parentElement.getElementsByTagName("input")[1].value;
	priceCell.innerHTML = `$ <input type="number" name="price" placeholder="25.00" value="${priceContent}" style="outline: none; border:0px" readonly>`;

	var quantityCell = row.insertCell(2);
	quantityCell.innerHTML = "QTY <input type=\"number\" name=\"quantity\" min=\"1\" max=\"5\" value=\"0\">";

	var totalPriceCell = row.insertCell(3);
	totalPriceCell.classList.add("totalproduct");

	var deleteBtnCell = row.insertCell(4);
	deleteBtnCell.innerHTML = "<button type=\"button\" class=\"btn btn-delete\">Delete</button>";

	/* CLEAR FIELDS AFTER CLICK */
	/* .reset() only works on form tag, not on individual input fields. */
	event.currentTarget.parentElement.parentElement.getElementsByTagName("input")[0].value = "";
	event.currentTarget.parentElement.parentElement.getElementsByTagName("input")[1].value = "";

	addDeleteListener();
	cartEmpty();
};
var createButton = document.getElementsByClassName("btn-create")[0];
createButton.addEventListener('click', addRow);