console.log('JavaScript is running!');

/*
const is a type of variable - a bit of memory 
that can hold a value

JS uses ANY valid CSS selector to connect to ANY
element on the page - it works the same way as CSS selectors do,
because it's using CSS selectors to find matching elements.

the document is the DOM - the webpage and all of its elements

querySelector is the method that makes the connection
 between JS and the DOM
*/

//step 1 - make connection to elements you want to interact with
const jpgBadge= document.querySelector('#bitmap');
const svgBadge= document.querySelector('#vector');

function logID() {
    console.log('clicked on this element', this.id)
}

/*step 2 - decide how you want the user to interact with the object
created in step 1 */
jpgBadge.addEventListener('click', logID);
svgBadge.addEventListener('click', logID);