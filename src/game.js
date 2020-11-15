import { flipCard } from './flip.js'

let cards = []
let used_images = []

export const initializeGame = (nbPairs) => {
  let y = 0
  for(let i = 0; i < nbPairs; i++) {
    let image = pickImage()
    createCard(y++, i, image)
    createCard(y++, i, image)  
  }
  createSet()
}

// Suffle the cards
const sortfunc = (a, b) => {  
  return 0.5 - Math.random();
}

// Pick an image in the collection, unless it has been already picked
const pickImage = () => {
  let random
  do {
    random = Math.floor((Math.random() * 15) + 1);
  } while (used_images.includes(random))
  used_images.push(random)
  return '/images/' + random + '.jpg'
}

// Create the img tag and add it to the set
const createCard = (id, pair, image) => {
  let card = new Image(100, 100);
  card.src = image;
  card.id = id
  card.dataset.pair = pair
  cards.push(card)
}

// Add the set of cards to the dom
const createSet = () => {
  cards = cards.sort(sortfunc)
  cards.forEach(card => {
    let div = document.createElement('div')
    div.classList.add('card')
    div.onclick = flipCard

    let div2 = document.createElement('div')
    div2.classList.add('black')

    div.appendChild(div2)
    div.appendChild(card)
    document.getElementById('cards').appendChild(div)
  })
}