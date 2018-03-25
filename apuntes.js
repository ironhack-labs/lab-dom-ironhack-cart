//We can access any element that has a particular ID 
var element = document.getElementById("nombreId");
//for change element use :
element.innerHTML = "Lo que quieras poner de contenido";
// Se puede reutilizar element.innerHTML = "Ya no me llamo pepe"
element.innerHTML = "Lo que quieras poner de contenido";
otherElement.innerHTML = element.innerHTML;
// donde otherElement es otra variable
// para cambiar un stilo sería así 
element.style.background  = "red";

// get the class name of "element"
// nos devuelve la clase de element y la guarda en cName
var cName = element.className;
// set the class name of "otherElement"
element.className = "nuevoNombreClase"
otherElement.className = cName;
// get the id of "element"
var idStr = element.id;
// set the id of "otherElement"
element.id = "nuevoNombreId";

// acceso por className
// nos devuelve una HTML Collection
var element = document.getElementsByClassName(names);
// para convertir element en un array y poder aplicarle metodos 
// propios de los arrays utilizamos :
var arr = [].slice.call(htmlCollection)

// The function getElementsByTagName returns an HTMLCollection of elements // with the given HTML tag name.
var elements = document.getElementsByTagName(name);
var divs = document.getElementsByTagName('div');

// The querySelector() returns the first element within the document
// In this example, the first element in the document with the class “mouse // is returned:
var firstMouse = document.querySelector('.mouse');
// para coger todos
var elementList = document.querySelectorAll(selectors);

// Ejemplos
var paragraph = document.getElementById('paragraph');

var links = document.getElementsByClassName('link');

var divs = document.getElementsByTagName('div');


//To get the value of an element, we will use the function getAttribute.
var attribute = element.getAttribute(attributeName);

var paragraph = document.getElementById('paragraph');
var paragraphId = paragraph.getAttribute('id');
console.log(paragraphId); //=> "paragraph"

// To change the value of an existing attribute on the specified element, // call the function setAttribute.
element.setAttribute(name, value);

var paragraph = document.getElementById('paragraph');
contentDiv.setAttribute('id', 'info-paragraph');

/* The setAttribute function is also useful to create a new attribute for an element. When we call the function, it will look for the attribute specified in the first parameter name in the element. If the attribute is found, it will change the value. If not, it will create a new attribute using the name and the desired value. */

contentDiv.setAttribute('name', 'username');

// You can also create elementsin the DOM using document.createElement(tagName)

var element = document.createElement('h2');
=> undefined

element
=> <h2></h2>

// Let’s add some content to an element:

element.innerHTML = "Elephant";

//Let’s add an element into a parent element:

var parent = document.getElementsByTagName('body')[0]
parent.appendChild(element);
// parent is the parent element.
// element is the child node to append.

//crear contenido dentro de una etiqueta

var text = document.createTextNode('This text is created dynamically');

var parent = document.getElementById('parent');
var firstChild = document.getElementById('first-child');
var pTag = document.createElement('p');
var text = document.createTextNode('This text is created dynamically');

pTag.appenChild(text);
parent.insertBefore(pTag, firstChild);