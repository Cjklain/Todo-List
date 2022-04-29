export {fadeForCard,hideCard}


function fadeForCard(){
    const divCard = document.querySelector('.card')
    divCard.classList.remove('open')
    setTimeout(()=> divCard.classList.add('open'),100)   
}

function hideCard(){
    const divCard = document.querySelector('.card');
    divCard.classList.remove('open');
}