
const cards = document.querySelectorAll('.card');
const ServiceButtons = document.querySelectorAll('.service__button')

ServiceButtons[0].addEventListener('click', () => blur(1,2))
ServiceButtons[1].addEventListener('click', () => blur(4,6))
ServiceButtons[2].addEventListener('click', () => blur(5,3))

function blur(...args) {
    cards.forEach((el) => el.classList.remove('blur'));
    for (let arg of args) cards[arg].classList.add('blur');
}

// function blur(e) {
//  console.log(e)
// }

// cards.forEach((card) => card.addEventListener('click', function(e){
//     cards.forEach((el) => {
//         if (el === card) el.classList.add('blur')
//         else el.classList.remove('blur')
//     })
// }));

// TODO watch about binf


