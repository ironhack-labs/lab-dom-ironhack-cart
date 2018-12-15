class Pedido {
  constructor() {
    this.container = document.getElementById("products");
    this.items = [{ name: "name", priceByUnit: 2, quantity: 1, totalPrice: 2 }];
  }

  // PRINT OR DELETE ADD ITEM INPUT FORM
  showAddItemForm() {
    document.getElementById("add-item-form").classList.remove("hidden");
  }

  deleteAddItemForm() {
    document.getElementById("add-item-form").classList.add("hidden");
  }

  //Print data
  printTable() {
    let table = "";
    if (
      this.items.length > 0

    ) {
      this.items.forEach(item => {
        table += "<tr>";
        table += `<td> ${item.name}</td> `;
        table += `<td> ${item.priceByUnit}</td> `;
        table += `<td> ${item.quantity}</td> `;
        table += `<td> ${item.totalPrice}</td> `;
        table += `<td> <button class="btn btn-delete">DELETE</button> </td> `;
        table += "</tr>";
      });

      return (this.container.innerHTML = table);
    }
  }

  //GET DATA ADD FORM
  getTotalPrice(priceByUnit, quantity) {
    return priceByUnit * quantity;
  }

  geItemFormData() {
    return{
      name: document.getElementById("add-name").value,
      priceByUnit: Number(document.getElementById("add-single-cost").value),
      quantity: Number(document.getElementById("add-quantity").value),
      totalPrice: this.priceByUnit * this.quantity, //error NaN
    };
  }

  //SAVE NEW DATA
  pushItemToPedidos(){
    let item=this.geItemFormData();
    this.items.push(item)
    this.printTable(); 
  }

  //UPDATE TABLE WITH NEW ITEMS

  
}


window.onload = function() {
  
  function start(){ //NO VA
    let pedido = new Pedido();
    //return pedido;
  }

  let createItemButton = document.getElementById("btn-add-item-form");
  //let deleteButtons = document.getElementsByClassName('btn-delete');

  createItemButton.onclick = function() {
    pedido.showAddItemForm();
    let addItem = document.getElementById("add-item");
    addItem.onclick = function(){
      pedido.pushItemToPedidos();
    }
  };
  //calculatePriceButton.onclick = getTotalPrice;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
