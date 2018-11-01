var shoppingItems = [];
var globCurrentItem = 0;

class structure{
  constructor(name, price){
    
    this.div = document.createElement("div"); //Main container 

    this.productDiv = document.createElement("div"); //Product name container
    this.productLabel = document.createElement("label");
    this.productName = document.createTextNode(name);

    this.qtyDiv = document.createElement("div"); //qty div container
    this.qtyLabel = document.createElement("label");
    this.qtyInput =  document.createElement("input");
    this.qtyLabelName = document.createTextNode("QTY");

    this.priceDiv = document.createElement("div"); //price div container
    this.priceLabel = document.createElement("label");
    this.priceLabelText = document.createTextNode(price);
    this.priceLabel.id="priceLabel";

    this.totalPriceDiv = document.createElement("div"); //total price (qty*price) container
    this.totalPriceStrong = document.createElement("strong");

    this.buttonDiv = document.createElement("div"); //cancel button container
    this.button = document.createElement("button");
    this.buttonText = document.createTextNode("Cancel");
    
    this.productLabel.appendChild(this.productName); //appending product into its container
    this.productDiv.appendChild(this.productLabel);
    
    
    this.qtyLabel.appendChild(this.qtyLabelName); //appending qty into its container
    this.qtyDiv.appendChild(this.qtyLabel);
    this.qtyDiv.appendChild(this.qtyInput);

    this.priceLabel.appendChild(this.priceLabelText); //appending price into its container
    this.priceDiv.appendChild(this.priceLabel);


    this.totalPriceDiv.appendChild(this.totalPriceStrong); //appending total price into container

    this.button.appendChild(this.buttonText); //appending the text to the button
    this.buttonDiv.appendChild(this.button);
  
    this.div.appendChild(this.productDiv); //append product main container
    this.div.appendChild(this.priceDiv); // price main
    this.div.appendChild(this.qtyDiv); //qty main
    this.div.appendChild(this.totalPriceDiv); //total main
    this.div.appendChild(this.button); //buton main
    this.div.id = "labels";
    this.button.id = "cancelButton";

    $("#maain").append(this.div); //pushing the whole div into the html
    
    this.button.onclick = function(argument){
      argument = this.$("input");
      argument.val(0);
    };
    this.qtyInput.onchange = function(){ //method to calculate price
      
      var quantity = $(this).val();
      var price = $(this).parent().parent();
      var priceChild = parseInt(price.find("#priceLabel").text());
      var total = 0;

      console.log(quantity);
      console.log(price)
      console.log(priceChild)

      total = quantity*priceChild;

      price.find("strong").html(total); //inserting total again
    };
  }
}

function toCreateClick(){
  var name = prompt("What do you want to call the new product.");
  var price = prompt("How much will it cost?");
  createElement(name, price);
  
}

function createElement(InputName, InputPrice){ //Is this "legal"?
  var aStruct = new structure(InputName, InputPrice);
  shoppingItems.push(aStruct);
  console.log(shoppingItems[0]);

  //the variable aStruct only exists when the function is called,
  //since we want to store the structures we put it in an array
}

