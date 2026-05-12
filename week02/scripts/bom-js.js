const list = document.querySelector('ul');
const items = document.querySelector('#favchap');
const btnInput = document.querySelector('button');

const listItem = document.querySelector('li');
const btnDelete = document.querySelector('button');

listItem.textContent = items.value;
btnDelete.textContent = '❌';
btnDelete.setAttribute("aria-label", "Delete");

listItem.append(btnDelete);
list.append(listItem);
