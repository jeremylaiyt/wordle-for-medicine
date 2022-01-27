import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `Owl Word ${lost ? 'X' : guesses.length}/6\n\n` +
      generateEmojiGrid(guesses) + `\n\n@clinical_owl`
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟢'
            case 'present':
              return '🟡'
            default:
              return '⚪️'
          }
        })
        .join('')
    })
    .join('\n')
}
