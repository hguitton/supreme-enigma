import { nbPairs } from './game.js'
import { updateScore, updateAttempts } from './utils.js'

let correctGuesses = 0
let wrongGuesses = 0
let card1 = null
let card2 = null

export const handleCardSelection = (e) => {
  let cardSelected = e.originalTarget.nextSibling
  setCard(cardSelected)
}

// Set the card into card1 or card2 and compare
const setCard = (card) => {
  if(card1 === null){
    card1 = card
  } else if (card2 === null && card != card1 ){
    card2 = card
  }
  if (card2 != null){
    checkMatch(card1, card2)
  }
}

// Compare the 2 cards and increment the score/attempts
const checkMatch = (c1, c2) => {
  if(c1.dataset.pair == c2.dataset.pair){
    correctGuesses++
  } else {
    wrongGuesses++
    setTimeout(() => {
      c1.previousSibling.classList.remove('flipped')
      c2.previousSibling.classList.remove('flipped')
    }, 1500);
  }
  checkWin()
  card1 = null
  card2 = null
}

// Checks if the user wins and update the scores
const checkWin = () => {
  updateScore(correctGuesses, nbPairs)
  updateAttempts(correctGuesses + wrongGuesses)
  if(correctGuesses === nbPairs){
    updateScore(correctGuesses, nbPairs, true)
  }
}
