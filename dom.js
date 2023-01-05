//parentElement
var title = document.querySelector(".title");

var container = title.parentElement;

container.style.backgroundColor = '#f3f3f3';

//lastElementChild
var lastElementChild = container.lastElementChild;

lastElementChild.style.fontWeight = 'bold';

//lastChild
var lastChild = container.lastChild;

console.log(lastChild);

//firstElementChild
container.firstElementChild.style.color = 'orange';

//firstChild
console.log(container.firstChild);

//nextSibiling
console.log(container.nextSibling);

//nextElementSibiling
title.nextElementSibling.nextElementSibling.style.color = 'blue';

//previousSibiling
console.log(lastElementChild.previousSibling);

//previousElementSibiling
lastElementChild.previousElementSibling.style.fontStyle = 'oblique';

//createElement
var div = document.createElement('div');
div.id = 'subtitle';

//setAttribute
div.setAttribute('title','subtitle');

//createTextNode
var textNode = document.createTextNode('Shopping List');

//appendChild
div.appendChild(textNode);

var h2 = document.querySelectorAll('h2');

container.insertBefore(div,h2[1]);
console.log(div);