var prodObj = [{
        name: "Iron Bubble Head",
        price: 25
    },
    {
        name: "Iron Shirt",
        price: 15
    }
]



for (i = 0; i < Object.keys(prodObj).length; i++) {
    let getValue = "";
    var string = "<div class='row'>";
    string += "<div class='col-sm-3'><span>" + prodObj[i].name + "</span></div>";
    string += "<div class='col-sm-2'><span>" + "$" + prodObj[i].price + "</span></div>";
    string += "<div class='col-sm-3'><label>QTY</label><input id='input" + [i] + "'type='text'></div>";
    string += "<div class='col-sm-2'><span id='total" + [i] + "'>" + '$0.00' + "</span></div>";
    string += "<div class='col-sm-2'><button class='btn btn-delete'>delete</button></div>";
    string += "</div>";
    document.querySelector(".products").innerHTML += string;

}

document.querySelector("#create").onclick = function(e) {
    let p = document.querySelector("#price")
    let pname = document.querySelector("#pname")
    prodObj.push({
        "name": pname.value,
        "price": parseInt(p.value)
    })
    var strCreate = "<div class='row'>";
    strCreate += "<div class='col-sm-3'><span>" + pname.value + "</span></div>";
    strCreate += "<div class='col-sm-2'><span>" + "$" + p.value + "</span></div>";
    strCreate += "<div class='col-sm-3'><label>QTY</label><input type='text'></div>";
    strCreate += "<div class='col-sm-2'><span>" + '$0.00' + "</span></div>";
    strCreate += "<div class='col-sm-2'><button class='btn btn-delete'>delete</button></div>";
    strCreate += "</div>";
    document.querySelector(".products").innerHTML += strCreate;
}



document.querySelector(".btn-success").onclick = function(e) {
    let quant = [];
    let totalsum = 0;

    for (i = 0; i < Object.keys(prodObj).length; i++) {

        let query = "#input" + [i]
        let total = "#total" + [i]
        quant.push(document.querySelector(query).value);
        document.querySelector("#total" + [i]).innerHTML = "$" + prodObj[i].price * quant[i]
        totalsum += prodObj[i].price * quant[i]
        document.querySelector("#amnt").innerHTML = '$' + totalsum;
    }
}








/* 

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
}


*/