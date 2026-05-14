//I added:
//1. Limit to 10 entries
//2. Prevent duplicates

// select elements from the DOM
const list = document.querySelector('ul');
const items = document.querySelector("#favchap");
const btnInput = document.querySelector('button');

let counter = 0;
let listChacpter = [];
const MAX_CHAPTER = 10;

btnInput.addEventListener('click', function (e) {
    e.preventDefault();
    let elemento = items.value;

    if (items.value.trim() !== '') {

        if (counter >= MAX_CHAPTER) {
            alert(`Limit reached: maximum ${MAX_CHAPTER} entries`);
            items.value = '';
            return;
        }

        console.log(listChacpter.lastIndexOf(items.value));
        if (listChacpter.lastIndexOf(items.value) > -1) {
            alert('Este capítulo ya fue ingresado');
            items.value = '';
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = items.value;

        const btnDelete = document.createElement('button');
        btnDelete.textContent = '❌';
        btnDelete.setAttribute("aria-label", "Delete");

        btnDelete.addEventListener('click', function () {
            //Removing array element
            let index = listChacpter.indexOf(elemento)
            //Verify data to remove
            console.log(`elemento a buscar: ${elemento}`);
            console.log(`index a borrar: ${index}`);
            //Remove element
            list.removeChild(listItem);
            if (index > -1) {
                listChacpter.splice(index, 1);
            }
            console.log(listChacpter);
            counter--;
            items.focus();
        });

        listItem.appendChild(btnDelete);
        list.appendChild(listItem);

        listChacpter.push(items.value);
        items.value = '';
    } else {
        return;
    }
    items.focus();
    counter++;
    console.log(listChacpter);
});

