const inputFullName = document.querySelector('input');
const btn = document.querySelector('button');
const divShowMe = document.querySelector('.show_me');
const spanName = document.getElementById('name_span');
const spanSurname = document.getElementById('surname_span');
const spanFName = document.getElementById('father_name_span');

btn.addEventListener('click', function() {
    // убрать лишние пробелы по бокам 
    const withoutFreeSpace = inputFullName.value.trim();
    // разделить строку по пробелам 
    const arrFullName = withoutFreeSpace.split(' ');
    // каждому элементу массива дать заглавную букву
    for (let i = 0; i < arrFullName.length; i++) {
        arrFullName[i] = arrFullName[i].charAt(0).toUpperCase() + arrFullName[i].slice(1).toLowerCase();
    }
    // элемент массива присвоить в спан 
    spanSurname.innerHTML = arrFullName[0];
    spanName.innerHTML = arrFullName[1];
    spanFName.innerHTML = arrFullName[2];
    //показали блок с фио 
    divShowMe.style.display = 'block';
    inputFullName.value = '';
})