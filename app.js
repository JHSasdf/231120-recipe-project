const inputElement = document.getElementById('input');
const btnElement = document.querySelector('#add_btn');
const ulElement = document.querySelector('ul');
let startIndex = 6;

btnElement.addEventListener('click', function() {
    const target = ulElement.children[startIndex];
    console.log(target);
    target.classList.add('visible')
    startIndex++;
})
