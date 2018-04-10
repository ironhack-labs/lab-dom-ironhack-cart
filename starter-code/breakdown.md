- [X] Create a click event for the Calculate Prices button.

This event will execute a function that:

- [X] Retrieves the unit price of the product
- [X] Retrieves the quantity of items desired
- [X] Calculates the total price based on this data
- [X] Updates the total price in the DOM

Questions: 

1. Do I need to populate the add and delete buttons on the DOM using their designated functions on the first product as well as all the products that follow? Or do I need to get the products that are added to have a button created after the first by using a template?  

2. Not sure what I'm supposed to do with createItemNode. My thought process is that I would be able to create an entire new product by duplicating the "template", which is the first product that I hard-coded into the HTML, within the createNewItemRow function.

3. ^ Same question but for createQuantityNode. 

4. I was able to get my code to update the total price using a single function, however if I press the button more than once, it will do the calculation over and over again. It will end up adding the quanitity times the product price as many times as I click it instead of only doing it once. How should I approach resolving this issue when componentizing? 


5. 



I need to breakdown what each function's goal is... 

calculatePriceButton(): 

deleteItem(): Self-explanitory...

getPriceByProduct(): I assume this gets the item price and returns it to be used in the calculatePriceButton() function.

updatePriceByProduct(): Updates the price based on quanitity? 

getTotalPrice():

createQuantityInput():

createDeleteButton(): 

createQuantityNode(): 

createItemNode(): 
****
createNewItemRow: I assume this makes a complete copy of the product-wrapper but takes in input for the <span> tags.

createNewItem: This would be for the Add Item button.



