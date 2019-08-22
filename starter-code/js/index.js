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
    string += "<div class='col-sm-2'><span class='total'" + [i] + ">" + '$0.00' + "</span></div>";
    string += "<div class='col-sm-2'><button class='btn btn-delete'>delete</button></div>";
    string += "</div>";
    document.querySelector(".products").innerHTML += string;

}


document.querySelector(".btn-succes").onclick = function(e) {
    let quant = [];

    for (i = 0; i < Object.keys(prodObj).length; i++) {

        let query = "#input" + [i]

        let total = ".total" + [i]
        console.log(query)
        console.log(total)
        quant.push(document.querySelector(query).value);
        document.querySelectorAll(".total" + [i]).innerHTML = prodObj[i].price * quant[i]
        console.log(prodObj[i].price * quant[i])
    }
    /*  
    for (i = 0; i < Object.keys(prodObj).length; i++) {

        let total = ".total" + [i]
        document.querySelector(".total" + [i]).innerHTML = prodObj[i].price * quant[i]
        console.log(prodObj[i].price * quant[i])
    }
    */


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