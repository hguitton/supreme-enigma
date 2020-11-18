export const updateScore = (score, nbPairs, win = false) => {
  let winingText = win ? ' Congrats ! ' : ''
  document.getElementById('score').innerText = score + ' / ' + nbPairs + winingText
}

export const updateAttempts = (attempts) => {
  document.getElementById('attempts').innerText = attempts
}