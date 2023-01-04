var header = document.getElementById('main-header');

header.style.borderBottom = 'solid 2px black';

var title = document.getElementsByClassName('title');

title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';

var items = document.getElementsByClassName('list-group-item');

items[1].textContent = 'Hello 2';
items[1].style.backgroundColor = 'yellow';

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

items[2].style.backgroundColor = 'green';