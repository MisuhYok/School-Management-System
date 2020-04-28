const _ = require('lodash')

const human = {
  body: {
    torso: 'Good',
    lower: 'Bad'
  },
  head: {
    brain: 'Perfect',
    eyes: 'none'
  }
}

console.log(human.torso.lower)
// console.log(_.get(human, 'torso.lower'))
