export default displayCard

const divCard = document.querySelector('.card')

function displayCard(){
    divCard.classList.remove('open')
    setTimeout(()=> divCard.classList.add('open'),100)
    
}