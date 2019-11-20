let form = document.getElementById("ourform");
let ourfield = document.getElementById("ourfield");
let list = document.getElementById("ourlist");

form.addEventListener("submit", e => {
  e.preventDefault();
  let todo = e.target.ourfield.value;
  let html = `<li>${todo} <button onclick="deleteItem(this)">Delete</button></li>`;
  list.innerHTML += html;
  ourfield.value = "";
  ourfield.focus();
});

function deleteItem(element) {
  element.parentElement.remove();
}
