
var inputText;
//creates a variable called inputText on button click and takes in the text from input box and prints it in the ul
document.getElementById("submit-button").addEventListener("click", () => {
  inputText = document.getElementById("input").value;
  addNote(inputText)});

  document.getElementById("clear").addEventListener("click", clearall);


  document.getElementById("delete-all").addEventListener("click", delAll);

  document.getElementById("save").addEventListener("click", save);


function addNote(item) {
  var listItem = document.createElement('li');
  console.log(listItem);
  var temp = document.createTextNode(item);
  listItem.appendChild(temp);
  document.getElementById("list").appendChild(listItem);
  listItem.addEventListener("dblclick", completed);
  document.getElementById("input").value = "";
}

//function adds class complete to items doubleclicked
function completed() {
this.classList.add("complete");
}

//this function clears the todos marked as done
function clearall() {
  var iterateItems = document.getElementsByTagName("li");
  for(let i=0; i<iterateItems.length; i++)
  {
if(iterateItems[i].className==="complete")
{ iterateItems[i].remove();
 }
  }
}

//this function deletes all to-do
function delAll() {
  var delallitems = document.getElementsByTagName("li");
  for(let i=0; i<delallitems.length; i++)
  {
delallitems[i].remove();
  }
}

function save() {
  localStorage.setItem('todonotes', list.innerHTML);
}
var saved = localStorage.getItem('todonotes');

// If there are any saved items, update our list
if (saved) {
	list.innerHTML = saved;
}

