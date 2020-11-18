import { handleCardSelection } from './guess.js'

export const flipCard = (e) => {
  e.target.classList.add('flipped')
  handleCardSelection(e)
}