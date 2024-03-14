import { PRICES } from "./data.js";

export function createPriceInputs () {
    const pricesCards = document.querySelectorAll('.help-choise__label');

    pricesCards.forEach((card, ind) => card.addEventListener('click', () => {
        clear(pricesCards)

        setTimeout(() => addContent(card, ind) , 100)
     
   
      
  }))
}



function clear(elem) {
   elem.forEach((el) => el.classList.remove('card-height'))
  elem.forEach((card, ind) => {
    if (card.childNodes.length > 2) {
       while (card.childNodes.length > 4) {
        card.childNodes[card.childNodes.length - 1].remove()
       }
    }
    console.log(card.childNodes)
  })
}

function addContent(card, ind) {
    card.classList.add('card-height');
     
    const line = document.createElement('span');
    line.classList.add('line');
    const cardText = document.createElement('div');
    cardText.classList.add('help-choise__subtext');

    const price = document.createElement('div');
    const priceNumber = document.createElement('span');
    priceNumber.classList.add('price__numebr')
    const priceText = document.createElement('span');
    priceText.classList.add('price__text')
    priceNumber.textContent = `$${PRICES[ind].price}`;
    priceText.textContent = '/ per hour';

    const priceButton = document.createElement('button');
    priceButton.classList.add('price-button');
    priceButton.textContent = 'Order';

    price.append(priceNumber, priceText);
    cardText.textContent = PRICES[ind].text;
    card.append(line, cardText, price, priceButton);


}


