// select elements from the DOM
const list = document.querySelector('ul');
const items = document.querySelector("#favchap");
const btnInput = document.querySelector('button');


btnInput.addEventListener('click', function (e) {

    e.preventDefault();

    if (items.value.trim() !== '') {

        const listItem = document.createElement('li');
        listItem.textContent = items.value;

        const btnDelete = document.createElement('button');
        btnDelete.textContent = '❌';
        btnDelete.setAttribute("aria-label", "Delete");

        btnDelete.addEventListener('click', function () {
            list.removeChild(listItem);
            items.focus();
        });

        listItem.appendChild(btnDelete);
        list.appendChild(listItem);

        items.value = '';
    }
    items.focus();
});
