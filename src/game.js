import Faker from 'faker'

export const initializeGame = (nbPairs) => {
  const dom_element = document.getElementById('cards')
  
  let cards = []
  for(let i = 0; i < nbPairs; i++) {    
    var newImage = new Image(100, 200);
    newImage.src = Faker.image.image();
    cards.push(newImage)
    cards.push(newImage)
  }
  cards = cards.sort(sortfunc).sort(sortfunc)
  
  cards.forEach(card => {
    console.log(card);
    dom_element.appendChild(card)
  })
}

const sortfunc = (a, b) => {  
  return 0.5 - Math.random();
}  
