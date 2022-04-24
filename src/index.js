import './styles/style.css'

console.log('hey');
console.log('asdasda');
console.log('working');

const addButton = document.querySelector('.title')
const addDiv = document.querySelector('.wrapper')
console.log(addButton);
console.log(addDiv);
addButton.addEventListener('click',function(){
    addDiv.classList.add('open')
})