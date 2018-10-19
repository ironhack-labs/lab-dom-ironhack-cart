
//SELECTORS
var shoppingList = document.querySelector("ol");
var imgItem1 = document.querySelector(".item1");
var imgItem2 = document.querySelector(".item2");
var imgItem3 = document.querySelector(".item3");
var imgItem4 = document.querySelector(".item4");
var itemNameLi1 = document.querySelector(".itemtitle1");
var itemNameLi2 = document.querySelector(".itemtitle2");
var itemNameLi3 = document.querySelector(".itemtitle3");
var itemNameLi4 = document.querySelector(".itemtitle4");
var sumFinal = document.querySelector (".totalblock");


// CREATE ELEMENTS
var globalSum = 0; 

// ADD SHOPPING ITEM

imgItem1.onclick = function (){
    var firstItemName = document.createElement("li");  
    firstItemName.innerHTML = itemNameLi1.innerHTML + ' <span>7500€</span>  <input type="text" placeholder="quantity"/> <button class="trash">🗑</button>'
    shoppingList.appendChild(firstItemName);

    globalSum+=7500;
    sumFinal.innerHTML= globalSum + ' €';

    var trashbin = firstItemName.querySelector(".trash");
    deleteLi = trashbin.parentNode
    deleteLi.onclick = function (){
        globalSum-=7500;
        deleteLi.remove();
        sumFinal.innerHTML= globalSum + ' €';
}
};


imgItem2.onclick = function (){
    var secondItemName = document.createElement("li");
    secondItemName.innerHTML = itemNameLi2.innerHTML + ' <span>6000€</span>  <input type="text" placeholder="quantity"/> <button class="trash">🗑</button>'
    shoppingList.appendChild(secondItemName);

    globalSum+=6000;
    sumFinal.innerHTML= globalSum + ' €';

    var trashbin = secondItemName.querySelector(".trash");
    deleteLi = trashbin.parentNode
    deleteLi.onclick = function (){
        globalSum-=6000;
        deleteLi.remove();
        sumFinal.innerHTML= globalSum + ' €';
}
};


imgItem3.onclick = function (){
    var thirdItemName = document.createElement("li");
    thirdItemName.innerHTML = itemNameLi3.innerHTML + ' <span>2000€</span>  <input type="text" placeholder="quantity"/> <button class="trash">🗑</button>'
    var thirdItemPrice = document.createElement("li");
    shoppingList.appendChild(thirdItemName);


    globalSum+=2000;
    sumFinal.innerHTML= globalSum + ' €';

    var trashbin = thirdItemName.querySelector(".trash");
    deleteLi = trashbin.parentNode
    deleteLi.onclick = function (){
        globalSum-=000;
        deleteLi.remove();
        sumFinal.innerHTML= globalSum + ' €';

}
};


imgItem4.onclick = function (){
    var fourthItemName = document.createElement("li");
    fourthItemName.innerHTML = itemNameLi4.innerHTML + ' <span>1000€</span> <input type="text" placeholder="quantity"/> <button class="trash">🗑</button>'
    shoppingList.appendChild(fourthItemName);

    globalSum+=1000;
    sumFinal.innerHTML= globalSum + ' €';


var trashbin = fourthItemName.querySelector(".trash");
deleteLi = trashbin.parentNode
deleteLi.onclick = function (){
    globalSum-=1000;
    deleteLi.remove();
    sumFinal.innerHTML= globalSum + "€";
};

};