let count = 0;
let l = document.querySelector('#myUL');
//Creearea unui element
function addElement() {
    let li = document.createElement("LI");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Write something!");
    } 
    else {
      document.getElementById("myUL").appendChild(li);
      count++;
    }
    document.getElementById("myInput").value = "";
    //Adaugarea butonului de stergere langa fiecare element
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    //Stergerea elementului din lista daca se apasa pe butonul de inchidere
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
        this.parentNode.remove();
        if(count > 0){
          count--;
          document.getElementById('counter').innerHTML = "Remaining Tasks:" + count;
        }
      });
    }
    localstore();
    document.getElementById('counter').innerHTML = "Remaining Tasks:" + count; 
  }

//Adaugarea unui element prin apasarea tastei Enter
document.getElementById("form").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addElement();
    }
});

//Bifarea elementului daca este apasat
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
    if(count > 0){
      count--;
      document.getElementById('counter').innerHTML = "Remaining Tasks:" + count;
    }
    localstore();
  }
});

//Stergerea tuturor elementelor din lista
function clearAll(){
  let lst = document.getElementsByTagName("ul");
  lst[0].innerHTML = "";
  count = 0;
  document.getElementById('counter').innerHTML = "Remaining Tasks:" + count ;
  window.localStorage.clear();
}

//Afisarea tuturor elementelor din lista
function filterAll(){
  let lst = document.getElementsByTagName("LI");
  for(let i = 0; i < lst.length; i++)
     lst[i].style.display = "block";
}

//Afisarea doar a elementelor active
function filterActive(){
  let lst = document.getElementsByTagName("LI");
  for(let i = 0; i < lst.length; i++)
    if(lst[i].classList.contains("completed") === false)
      lst[i].style.display = "block";
    else
      lst[i].style.display = "none";
}

//Afisarea doar a elementelor completate
function filterCompleted(){
    let lst = document.getElementsByTagName("LI");
    for(let i = 0; i < lst.length; i++)
      if(lst[i].classList.contains("completed") === true)
        lst[i].style.display = "block";
      else
        lst[i].style.display = "none"; 
}

//Stergerea elementelor completate
function clearCompleted(){
  let lst = document.querySelectorAll(".completed");
  for(let i = 0; i < lst.length; i++)
    if(lst[i].classList.contains("completed") === true)
       lst[i].remove();
}

//Incercare de localstorage
function localstore() {
window.localStorage.myitems = l.innerHTML;
}

function getVal() {
var localstoredValues = window.localStorage.myitems;
 if(localstoredValues){
    l.innerHTML = localstoredValues;
  }
}
getVal();

// function saveItem(event) {
// 	let inputValue = event.target.value;
// 	if (event.target.value.length > 0 && (event.keyCode === 13 || event.type === 'click')) {
// 		let li = document.createElement('li');
// 		li.addEventListener('click', toggleDone);
// 		li.addEventListener('dblclick', editItem);
// 		li.textContent = event.target.value;
// 		event.target.parentNode.prepend(li);
// 		event.target.remove();
// 	 } else if (event.target.value.length === 0 && (event.keyCode === 13 || event.type === 'click')) {
// 		let li = document.createElement('li');
// 		li.addEventListener('click', toggleDone);
// 		li.addEventListener('dblclick', editItem);
// 		li.textContent = initialValue;
// 		event.target.parentNode.prepend(li);
// 		event.target.remove();
// 	}
// }

// // TO SAVE VALUE OF ITEM BEFORE IT IS EDITED
// let initialValue;

// function editItem(event) {
// 	let item = event.target.innerHTML;
// 	let itemInput = document.createElement('input');
// 	itemInput.type = 'text';
// 	itemInput.value = item;
// 	itemInput.classList.add('edit');
// 	initialValue = item;
// 	itemInput.addEventListener('keypress', saveItem);
// 	itemInput.addEventListener('click', saveItem);
// 	event.target.parentNode.prepend(itemInput);
// 	event.target.remove();
// 	itemInput.select();
// }
