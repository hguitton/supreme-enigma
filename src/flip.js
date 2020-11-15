export const flipCard = (e) => {
  e.target.classList.add('flipped')
  document.dispatchEvent(new CustomEvent('cardFlipped', {
    detail: {
      card: e.originalTarget.nextSibling
    }
  }))
}