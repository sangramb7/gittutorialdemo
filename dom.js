var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  // Create new div element
  var divItem = document.createElement('div');
  var divDescription = document.createElement('div');
  // Create new row div element
  var divRow = document.createElement('div');
  //Create new column div element
  var divCol1 = document.createElement('div');
  var divCol2 = document.createElement('div');
  // Create new li element
  var li = document.createElement('li');
  // Add class
  divRow.className = 'row';
  divCol1.className = 'col';
  divCol2.className = 'col';
  li.className = 'list-group-item';

  divItem.appendChild(document.createTextNode(newItem));
  divDescription.appendChild(document.createTextNode(newDescription));

  divCol1.appendChild(divItem);
  divCol1.appendChild(divDescription);

  divRow.appendChild(divCol1);


  // Create Edit button element
  var editBtn = document.createElement('button');

  // Add classes to edit button
  editBtn.className = 'btn btn-dark btn-sm float-right ml-2 edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  divCol2.appendChild(editBtn);
  divCol2.appendChild(deleteBtn);

  divRow.appendChild(divCol2);

  // Add row div
  li.appendChild(divRow);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement.parentElement.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstElementChild.firstElementChild.firstElementChild.firstChild.textContent;
    var itemDescription = item.firstElementChild.firstElementChild.lastElementChild.firstChild.textContent;
    if( (itemName.toLowerCase().indexOf(text)!=-1) || (itemDescription.toLowerCase().indexOf(text)!=-1) ){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}